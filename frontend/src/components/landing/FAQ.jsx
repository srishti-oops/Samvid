import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Can Samvid replace a lawyer?",
    answer:
      "No. Samvid helps you understand agreements, identify potential risks, and prepare better questions before signing. It complements professional legal advice rather than replacing it.",
  },
  {
    question: "Why doesn't Samvid simply say 'Safe' or 'Unsafe'?",
    answer:
      "Legal agreements are rarely that simple. Instead of reducing a contract to a single label, Samvid explains each important clause, highlights potential risks, and helps you understand what deserves your attention before you decide.",
  },
  {
    question: "Are my documents secure?",
    answer:
      "Yes. Documents are processed securely and are never shared publicly. Your uploads remain private, and you remain in control of your files.",
  },
  {
    question: "How long does analysis take?",
    answer:
      "Most agreements are analyzed within a few seconds, depending on the document size.",
  },
  {
    question: "Can I upload PDFs only?",
    answer:
      "Samvid supports PDF documents and text-based agreements. Support for additional document formats can be added in future releases.",
  },
  {
    question: "How accurate are the recommendations?",
    answer:
      "Samvid highlights potential issues and explains clauses using AI-powered analysis. Every agreement is different, so important legal decisions should always involve careful review and, where appropriate, professional legal advice.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="bg-[#F5F7FA] pt-2 pb-20"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-10 text-center">

           <p
            className="
              font-['Karla']
              text-[15px]
              font-semibold
              uppercase
              tracking-[0.45em]
              text-[#435AB2]
            "
          >
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="font-['Kameron'] text-5xl leading-tight text-[#1F2633]">
            Questions? Answered.
          </h2>

        </div>

        <div className="border-t border-[#D9DEE6]">

          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#D9DEE6]"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between py-8 text-left"
                >
                  <h3 className="pr-8 font-['Kameron'] text-[1.55rem] leading-snug text-[#1F2633]">
                    {faq.question}
                  </h3>

                  {isOpen ? (
                    <Minus
                      size={22}
                      strokeWidth={1.8}
                      className="shrink-0 text-[#435AB2]"
                    />
                  ) : (
                    <Plus
                      size={22}
                      strokeWidth={1.8}
                      className="shrink-0 text-[#435AB2]"
                    />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "max-h-48 pb-8"
                      : "max-h-0"
                  }`}
                >
                  <p className="max-w-4xl pr-14 font-['Karla'] text-[17px] leading-8 text-[#5F6773]">
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}