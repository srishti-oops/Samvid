import {
  AlertTriangle,
  BadgeCheck,
  ShieldAlert,
} from "lucide-react";

function RiskBadge({ risk }) {
  const level = risk.toLowerCase();

  if (level === "high") {
    return (
      <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
        High Risk
      </span>
    );
  }

  if (level === "medium" || level === "moderate") {
    return (
      <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
        Moderate Risk
      </span>
    );
  }

  return (
    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
      Low Risk
    </span>
  );
}

function RiskIcon({ risk }) {
  const level = risk.toLowerCase();

  if (level === "high") {
    return (
      <div className="rounded-lg bg-red-50 p-2">
        <ShieldAlert
          size={18}
          className="text-red-600"
        />
      </div>
    );
  }

  if (level === "medium" || level === "moderate") {
    return (
      <div className="rounded-lg bg-amber-50 p-2">
        <AlertTriangle
          size={18}
          className="text-amber-600"
        />
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-emerald-50 p-2">
      <BadgeCheck
        size={18}
        className="text-emerald-600"
      />
    </div>
  );
}

export default function ClauseList({ clauses }) {
  return (
    <section className="rounded-2xl border border-[#DCE3EB] bg-white shadow-sm">

      <div className="border-b border-[#DCE3EB] px-8 py-5">
        <p className="font-['Karla'] text-xs font-semibold uppercase tracking-[0.25em] text-[#5F6773]">
          CLAUSE ANALYSIS
        </p>

        <h2 className="mt-1 font-['Kameron'] text-[30px] text-[#1F2633]">
          Clause by Clause Review
        </h2>
      </div>

      <div className="divide-y divide-[#E6EBF1]">

        {clauses.map((clause, index) => (
          <div
            key={index}
            className="px-8 py-7"
          >
            <div className="flex items-start justify-between">

              <div className="flex gap-4">

                <RiskIcon risk={clause.risk} />

                <div>

                  <h3 className="font-['Kameron'] text-[24px] text-[#1F2633]">
                    {clause.name}
                  </h3>

                  <p className="mt-3 font-['Karla'] text-[17px] leading-8 text-[#5F6773]">
                    {clause.explanation}
                  </p>

                  <div className="mt-5 rounded-xl bg-[#F7F9FC] p-4">

                    <p className="font-['Karla'] text-sm font-semibold uppercase tracking-[0.18em] text-[#384B8F]">
                      Recommendation
                    </p>

                    <p className="mt-2 font-['Karla'] text-[16px] leading-7 text-[#5F6773]">
                      {clause.recommendation}
                    </p>

                  </div>

                </div>

              </div>

              <RiskBadge risk={clause.risk} />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}