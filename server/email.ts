import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = "annabellaszabo28@gmail.com";

export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
    const { firstName, lastName, email, subject, message } = data;

    const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #6366f1;">New Contact Form Submission</h2>
      <hr style="border: 1px solid #e2e8f0;">
      
      <p><strong>From:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Subject:</strong> ${subject}</p>
      
      <h3 style="color: #334155;">Message:</h3>
      <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #6366f1;">
        ${message.replace(/\n/g, "<br>")}
      </div>
      
      <hr style="border: 1px solid #e2e8f0; margin-top: 24px;">
      <p style="color: #64748b; font-size: 12px;">
        This email was sent from the Lumina Digital contact form.
      </p>
    </div>
  `;

    await resend.emails.send({
        from: "Lumina Digital <onboarding@resend.dev>",
        to: RECIPIENT_EMAIL,
        replyTo: email,
        subject: `[Contact Form] ${subject}`,
        html: htmlContent,
    });
}

export async function verifyRecaptcha(token: string): Promise<boolean> {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
        console.warn("RECAPTCHA_SECRET_KEY not set, skipping verification");
        return true; // Allow in development
    }

    const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${secretKey}&response=${token}`,
        }
    );

    const result = await response.json();

    // Score threshold: 0.5 (0.0 = bot, 1.0 = human)
    return result.success && result.score >= 0.5;
}
