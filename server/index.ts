import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { sendContactEmail, verifyRecaptcha, type ContactFormData } from "./email.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Parse JSON bodies
  app.use(express.json());

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, subject, message, recaptchaToken } = req.body;

      // Validate required fields
      if (!firstName || !lastName || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      // Verify reCAPTCHA
      if (recaptchaToken) {
        const isHuman = await verifyRecaptcha(recaptchaToken);
        if (!isHuman) {
          return res.status(403).json({ error: "Spam detection failed. Please try again." });
        }
      }

      // Send email
      await sendContactEmail({ firstName, lastName, email, subject, message } as ContactFormData);

      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to send message. Please try again later." });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);

