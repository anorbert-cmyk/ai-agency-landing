import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQProps {
  content?: {
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
}

export default function FAQ({ content }: FAQProps) {
  if (!content) return null;

  return (
    <section id="faq" className="py-24 relative">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{content.title}</h2>
          <p className="text-slate-600 text-lg">
            {content.subtitle}
          </p>
        </div>

        <div className="glass rounded-2xl p-8 md:p-12">
          <Accordion type="single" collapsible className="w-full">
            {content.items.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-slate-200/60 last:border-0">
                <AccordionTrigger className="text-left text-lg font-medium text-slate-800 hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
