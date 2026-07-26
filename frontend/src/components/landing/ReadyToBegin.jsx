import { ArrowRight } from "lucide-react";

export default function ReadyToBegin() {
  return (
    <section className="pt-12 pb-32">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-8 text-center">
        {/* Section Label */}

        <div className="mx-auto mb-6 max-w-4xl text-center">

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
                   READY TO BEGIN?
                            </p>

        {/* Heading */}

        <h2 className="mt-6 font-['Kameron'] text-[42px] font-medium leading-[1.15] text-[#2B3242] lg:text-[48px]">
          Ready to review your agreement?
        </h2>

        {/* Description */}

        <p className="mt-8 max-w-[640px] font-['Karla'] text-[19px] leading-8 text-[#646D79]">
          Upload your document and discover hidden risks,
          understand every clause, and sign with confidence.
        </p>

        {/* CTA */}

        <button className="mt-12 inline-flex items-center gap-2 rounded-lg bg-[#384B8F] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2F417F] hover:shadow-lg">
            Take the first step
          <ArrowRight size={18} />
        </button>
      </div>
      </div>
    </section>
  );
}