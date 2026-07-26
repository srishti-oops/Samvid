import {
  FileText,
  ShieldAlert,
  Languages,
  Handshake,
  ShieldCheck,
  History,
  Briefcase,
  Home,
  FileSignature,
  Lock,
  BadgeCheck,
  Building2,
} from "lucide-react";

const comparisonRows = [
  {
    general: "Waits for prompts",
    samvid: "Reviews the entire agreement",
  },
  {
    general: "Generic responses",
    samvid: "Clause-by-clause analysis",
  },
  {
    general: "No risk assessment",
    samvid: "Explainable risk assessment",
  },
  {
    general: "No negotiation guidance",
    samvid: "Practical recommendations",
  },
  {
    general: "No document history",
    samvid: "Saved analysis history",
  },
  {
    general: "Treats every clause equally",
    samvid: "Prioritizes critical risks",
  },
  {
    general: "No confidence indicator",
    samvid: "Confidence-backed analysis",
  },
  {
    general: "Generic legal summaries",
    samvid: "Contract-specific explanations",
  },
  {
    general: "Reads the document",
    samvid: "Helps you understand it",
  },
];
const capabilities = [
  {
    icon: FileText,
    title: "Clause Detection",
    description:
      "Every clause is identified, categorized and reviewed individually.",
  },
  {
    icon: ShieldAlert,
    title: "Risk Assessment",
    description:
      "Highlight risky clauses before they become expensive surprises.",
  },
  {
    icon: Languages,
    title: "Plain-language Explanations",
    description:
      "Legal jargon translated into language anyone can understand.",
  },
  {
    icon: Handshake,
    title: "Negotiation Suggestions",
    description:
      "Know which clauses deserve discussion before signing.",
  },
  {
    icon: ShieldCheck,
    title: "Missing Clause Detection",
    description:
      "Identify important protections missing from an agreement.",
  },
  {
    icon: History,
    title: "Analysis History",
    description:
      "Access every previous review with highlights and recommendations.",
  },
];

const documents = [
  {
    icon: Briefcase,
    title: "Employment Contracts",
    description:
      "Understand probation, notice periods, non-compete clauses and salary terms.",
  },
  {
    icon: Home,
    title: "Rental Agreements",
    description:
      "Spot unfair deposits, lock-in periods, maintenance responsibilities and penalties.",
  },
  {
    icon: FileSignature,
    title: "Freelance Contracts",
    description:
      "Review payment terms, IP ownership, scope creep and termination clauses.",
  },
  {
    icon: Lock,
    title: "NDAs",
    description:
      "Check confidentiality duration, exceptions and legal obligations.",
  },
  {
    icon: BadgeCheck,
    title: "Offer Letters",
    description:
      "Verify compensation, benefits, joining conditions and company policies.",
  },
  {
    icon: Building2,
    title: "Service Agreements",
    description:
      "Review liabilities, warranties, renewals and dispute resolution clauses.",
  },
];

export default function WhySamvid() {
  return (
    <section
        id="why-samvid"
        className="bg-[#F5F7FA] pt-15 pb-24"
    >
      <div className="mx-auto max-w-[1750px] px-10 lg:px-20 xl:px-28">

        {/* ========================= */}
        {/* HEADING */}
        {/* ========================= */}

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
            WHY SAMVID?
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
            Everything Samvid does
          </h2>

        </div>

        {/* ========================= */}
        {/* TWO COLUMN LAYOUT */}
        {/* ========================= */}

        <div className="grid gap-16 lg:grid-cols-[40%_60%]">

          {/* ========================= */}
          {/* LEFT : COMPARISON */}
          {/* ========================= */}

          <div>

            <div className="grid grid-cols-2 border-b border-[#DCE2EA] pb-5">

              <h3 className="font-['Karla'] text-[15px] font-semibold uppercase tracking-[0.28em] text-[#737B88]">
                General AI
              </h3>

              <h3 className="text-right font-['Karla'] text-[15px] font-semibold uppercase tracking-[0.28em] text-[#737B88]">
                Samvid
              </h3>

            </div>

            <div className="divide-y divide-[#E7EBF1]">

              {comparisonRows.map((row) => (
                <div
                  key={row.general}
                  className="grid grid-cols-2 gap-10 py-6"
                >

                  <p className="font-['Karla'] text-[1.18rem] leading-8 text-[#5D6672]">
                    {row.general}
                  </p>

                  <p className="text-right font-['Karla'] text-[1.18rem] font-semibold leading-8 text-[#1F2633]">
                    {row.samvid}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* ========================= */}
          {/* RIGHT PANEL */}
          {/* ========================= */}

          <div className="border-l border-[#DCE2EA] pl-12">

            {/* ========================= */}
            {/* CAPABILITIES */}
            {/* ========================= */}

            <div>

              <div className="border-b border-[#DCE2EA] pb-5">

                <h3 className="font-['Karla'] text-[15px] font-semibold uppercase tracking-[0.28em] text-[#737B88]">
                  CAPABILITIES
                </h3>

              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-8 md:grid-cols-2 xl:grid-cols-3">

                {capabilities.map((item) => {

                  const Icon = item.icon;

                  return (

                    <div key={item.title}>

                      <div className="flex items-center gap-3">

                        <Icon
                          size={21}
                          strokeWidth={1.8}
                          className="shrink-0 text-[#435AB2]"
                        />

                        <h4
                          className="
                            font-['Kameron']
                            text-[1.32rem]
                            leading-[1.2]
                            text-[#1F2633]
                          "
                        >
                          {item.title}
                        </h4>

                      </div>

                      <p
                        className="
                          mt-3
                          pl-[34px]
                          font-['Karla']
                          text-[15px]
                          leading-7
                          text-[#5F6773]
                        "
                      >
                        {item.description}
                      </p>

                    </div>

                  );

                })}

              </div>

            </div>

            {/* ========================= */}
            {/* WORKS WITH */}
            {/* ========================= */}
            <div className="mt-16">

              <div className="border-b border-[#DCE2EA] pb-5">

                <h3
                  className="
                    font-['Karla']
                    text-[15px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#737B88]
                  "
                >
                  WORKS WITH
                </h3>

              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-8 md:grid-cols-2 xl:grid-cols-3">

                {documents.map((doc) => {

                  const Icon = doc.icon;

                  return (

                    <div key={doc.title}>

                      <div className="flex items-center gap-3">

                        <Icon
                          size={21}
                          strokeWidth={1.8}
                          className="shrink-0 text-[#435AB2]"
                        />

                        <h4
                          className="
                            font-['Kameron']
                            text-[1.32rem]
                            leading-[1.2]
                            text-[#1F2633]
                          "
                        >
                          {doc.title}
                        </h4>

                      </div>

                      <p
                        className="
                          mt-3
                          pl-[34px]
                          font-['Karla']
                          text-[15px]
                          leading-7
                          text-[#5F6773]
                        "
                      >
                        {doc.description}
                      </p>

                    </div>

                  );

                })}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}