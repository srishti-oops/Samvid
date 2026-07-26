import { Upload, ScanSearch, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload",
    chip: "PDF • DOCX • TXT",
    description:
      "Upload or paste your agreement securely. Samvid supports PDFs, Word documents and plain text so you can begin in seconds.",
  },
  {
    number: "02",
    icon: ScanSearch,
    title: "Analyze",
    chip: "Clause Detection",
    description:
      "Every important clause is reviewed to identify obligations, unusual terms, hidden risks and areas that deserve your attention.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Understand",
    chip: "Plain-language Summary",
    description:
      "Receive clear explanations and practical guidance so you understand what you're agreeing to before you sign.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#F5F7FA] pt-8 pb-24"
    >
      <div className="mx-auto max-w-[1500px] px-8 lg:px-12">
        {/* ---------------------------------------------------------------- */}
        {/* Heading */}
        {/* ---------------------------------------------------------------- */}

        <div className="mx-auto max-w-4xl text-center">
          <p
            className="
              font-['Karla']
              text-[15px]
              font-semibold
              tracking-[0.45em]
              uppercase
              text-[#435AB2]
            "
          >
            HOW IT WORKS
          </p>

          <h2
            className="
              mt-5
              font-['Kameron']
              text-[50px]
              leading-[1.08]
              tracking-[-0.035em]
              text-[#1F2633]
              lg:text-[54px]
            "
          >
            Understand any legal document

            in three simple steps.
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-[760px]
              font-['Karla']
              text-[20px]
              leading-9
              text-[#5F6675]
            "
          >
            Upload your agreement, let Samvid review every important clause,
            then receive explanations in language anyone can understand before
            making a commitment.
          </p>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Timeline */}
        {/* ---------------------------------------------------------------- */}

        <div className="relative mt-14">
          {/* Continuous Line */}

          <div className="absolute left-0 right-0 top-[82px] z-0 h-[2px] bg-[#D8DEE8]" />

          <div className="relative z-10 grid gap-14 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step Number */}

                  <div className="mb-5">
                    <span
                      className="
                        font-['Karla']
                        text-[18px]
                        font-semibold
                        tracking-[0.35em]
                        text-[#435AB2]
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Circle */}

                  <div
                    className="
                      relative
                      flex
                      h-[88px]
                      w-[88px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D7DEE8]
                      bg-[#F5F7FA]
                      shadow-[0_10px_35px_rgba(31,38,51,0.06)]
                    "
                  >
                    <Icon
                      size={34}
                      strokeWidth={1.8}
                      className="text-[#435AB2]"
                    />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-9
                      font-['Kameron']
                      text-[34px]
                      leading-none
                      text-[#1F2633]
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Chip */}

                  <div
                    className="
                      mt-5
                      inline-flex
                      items-center
                      rounded-full
                      border
                      border-[#D7DDE8]
                      px-4
                      py-1.5
                      font-['Karla']
                      text-[13px]
                      font-medium
                      tracking-[0.02em]
                      text-[#435AB2]
                    "
                  >
                    {step.chip}
                  </div>

                  {/* Description */}

                  <p
                    className="
                      mx-auto
                      mt-5
                      max-w-[310px]
                      font-['Karla']
                      text-[17px]
                      leading-8
                      text-[#5F6775]
                    "
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Editorial Closing */}
        {/* ---------------------------------------------------------------- */}

        <div className="mt-20 flex items-center justify-center gap-8">
          <div className="h-px w-28 bg-[#D8DEE8]" />

          <p
            className="
              text-center
              font-['Kameron']
              text-[22px]
              leading-relaxed
              text-[#4C5565]
            "
          >
            No legal jargon. No confusing terminology.
            <br />
            Just clear, understandable explanations.
          </p>

          <div className="h-px w-28 bg-[#D8DEE8]" />
        </div>
      </div>
    </section>
  );
}