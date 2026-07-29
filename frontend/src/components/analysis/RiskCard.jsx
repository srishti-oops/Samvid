export default function RiskCard({ risk, score }) {
  const getColor = () => {
    switch (risk.toLowerCase()) {
      case "high":
        return {
          text: "text-red-600",
          bg: "bg-red-500",
          light: "bg-red-50",
        };

      case "moderate":
      case "medium":
        return {
          text: "text-amber-600",
          bg: "bg-amber-500",
          light: "bg-amber-50",
        };

      default:
        return {
          text: "text-emerald-600",
          bg: "bg-emerald-500",
          light: "bg-emerald-50",
        };
    }
  };

  const colors = getColor();

  return (
    <section className="rounded-2xl border border-[#DCE3EB] bg-white p-8 shadow-sm">
      <p className="font-['Karla'] text-sm font-semibold uppercase tracking-[0.25em] text-[#5F6773]">
        Overall Risk
      </p>

      <div className="mt-6 flex items-end gap-3">
        <h2 className="font-['Kameron'] text-6xl text-[#1F2633]">
          {score}
        </h2>

        <span
          className={`mb-2 rounded-full px-4 py-1 text-sm font-semibold ${colors.light} ${colors.text}`}
        >
          {risk}
        </span>
      </div>

      <div className="mt-8 h-3 w-full overflow-hidden rounded-full bg-[#E8EDF2]">
        <div
          className={`h-full rounded-full ${colors.bg}`}
          style={{ width: `${score}%` }}
        />
      </div>

      <p className="mt-6 font-['Karla'] text-[15px] leading-7 text-[#5F6773]">
        This score is calculated by Samvid based on the severity of detected
        clauses, missing protections, and overall contractual risk.
      </p>
    </section>
  );
}