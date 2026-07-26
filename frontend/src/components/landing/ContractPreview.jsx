import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Clock3,
  FileText,
  ShieldAlert,
} from "lucide-react";

const findings = [
  {
    title: "Non-Compete Clause",
    risk: "High Risk",
    color: "bg-red-50 text-red-700 border-red-200",
    icon: ShieldAlert,
    description:
      "Restricts employment with competitors for two years after leaving.",
  },
  {
    title: "Termination Notice",
    risk: "Needs Review",
    color: "bg-amber-50 text-amber-700 border-amber-200",
    icon: AlertTriangle,
    description:
      "Notice period appears longer than typical employment agreements.",
  },
  {
    title: "Compensation",
    risk: "Looks Good",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: BadgeCheck,
    description:
      "Salary, benefits and payment schedule are clearly defined.",
  },
];

export default function ContractPreview() {
  return (
    <div className="w-full max-w-xl">
      <div className="overflow-hidden rounded-2xl border border-[#DCE3EB] bg-white shadow-[0_20px_50px_rgba(24,32,42,0.08)]">

        {/* Header */}

        <div className="border-b border-[#DCE3EB] px-6 py-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7B5C8F]">
                Agreement Analysis
              </p>

              <h3 className="mt-2 text-xl font-semibold font-[Kameron] text-[#18202A]">
                Employment Agreement.pdf
              </h3>

              <div className="mt-3 flex items-center gap-2 text-sm text-[#5E6773]">
                <FileText size={16} />
                14 Pages
              </div>
            </div>

            <span className="rounded-full bg-[#F1F6FF] px-3 py-1 text-sm font-medium text-[#384B8F]">
              Moderate Risk
            </span>
          </div>
        </div>

        {/* Summary */}

        <div className="grid grid-cols-3 border-b border-[#DCE3EB]">

          <div className="border-r border-[#DCE3EB] px-5 py-4">
            <div className="flex items-center gap-2 text-[#384B8F]">
              <BadgeCheck size={18} />
              <span className="text-xs font-medium uppercase tracking-wide">
                Explained
              </span>
            </div>

            <p className="mt-2 text-2xl font-semibold text-[#18202A]">
              12
            </p>
          </div>

          <div className="border-r border-[#DCE3EB] px-5 py-4">
            <div className="flex items-center gap-2 text-[#C95C54]">
              <AlertTriangle size={18} />
              <span className="text-xs font-medium uppercase tracking-wide">
                Review
              </span>
            </div>

            <p className="mt-2 text-2xl font-semibold text-[#18202A]">
              3
            </p>
          </div>

          <div className="px-5 py-4">
            <div className="flex items-center gap-2 text-[#3C8D68]">
              <Clock3 size={18} />
              <span className="text-xs font-medium uppercase tracking-wide">
                Reading
              </span>
            </div>

            <p className="mt-2 text-2xl font-semibold text-[#18202A]">
              3 min
            </p>
          </div>

        </div>

        {/* AI Summary */}

        <div className="border-b border-[#DCE3EB] bg-[#FAFBFD] px-6 py-5">

          <div className="flex items-center gap-2">
            <Briefcase
              size={18}
              className="text-[#384B8F]"
            />

            <h4 className="font-medium text-[#18202A]">
              AI Summary
            </h4>
          </div>

          <p className="mt-3 leading-7 text-[#5E6773]">
            Most clauses follow standard employment practices.
            However, the agreement contains a restrictive non-compete
            clause and an extended termination notice period that
            should be reviewed before signing.
          </p>

        </div>

        {/* Key Findings */}

        <div className="space-y-4 px-6 py-6">

          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5E6773]">
            Key Findings
          </h4>

          {findings.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-[#DCE3EB] p-4 transition-all duration-200 hover:border-[#384B8F] hover:shadow-sm"
              >
                <div className="flex items-start justify-between">

                  <div className="flex gap-3">

                    <div className="rounded-lg bg-[#F5F7FA] p-2">
                      <Icon
                        size={18}
                        className="text-[#384B8F]"
                      />
                    </div>

                    <div>

                      <h5 className="font-medium text-[#18202A]">
                        {item.title}
                      </h5>

                      <p className="mt-2 text-sm leading-6 text-[#5E6773]">
                        {item.description}
                      </p>

                    </div>

                  </div>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${item.color}`}
                  >
                    {item.risk}
                  </span>

                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}

        <div className="border-t border-[#DCE3EB] bg-[#FAFBFD] px-6 py-5">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-[#18202A]">
                Ready to review the complete agreement?
              </p>

              <p className="mt-1 text-sm text-[#5E6773]">
                View clause-by-clause explanations and recommendations.
              </p>
            </div>

            <button
              className="flex items-center gap-2 rounded-lg bg-[#384B8F] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#2F417F]"
            >
              Open Analysis
              <ArrowRight size={16} />
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}