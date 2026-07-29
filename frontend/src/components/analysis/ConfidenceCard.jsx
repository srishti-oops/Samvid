import { BadgeCheck } from "lucide-react";

export default function ConfidenceCard({ confidence }) {
  const getStatus = () => {
    if (confidence >= 90) {
      return {
        label: "Very High",
        color: "text-emerald-600",
        bg: "bg-emerald-500",
        light: "bg-emerald-50",
      };
    }

    if (confidence >= 75) {
      return {
        label: "High",
        color: "text-[#384B8F]",
        bg: "bg-[#384B8F]",
        light: "bg-[#EEF3FF]",
      };
    }

    return {
      label: "Moderate",
      color: "text-amber-600",
      bg: "bg-amber-500",
      light: "bg-amber-50",
    };
  };

  const status = getStatus();

  return (
    <section className="rounded-2xl border border-[#DCE3EB] bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <div className={`rounded-lg p-2 ${status.light}`}>
          <BadgeCheck size={18} className={status.color} />
        </div>

        <div>
          <p className="font-['Karla'] text-xs font-semibold uppercase tracking-[0.25em] text-[#5F6773]">
            AI Confidence
          </p>

          <h2 className="mt-1 font-['Kameron'] text-[28px] text-[#1F2633]">
            Analysis Reliability
          </h2>
        </div>
      </div>

      <div className="mt-8 flex items-end gap-3">
        <h3 className="font-['Kameron'] text-6xl text-[#1F2633]">
          {confidence}%
        </h3>

        <span
          className={`mb-2 rounded-full px-4 py-1 text-sm font-semibold ${status.light} ${status.color}`}
        >
          {status.label}
        </span>
      </div>

      <div className="mt-8 h-3 w-full overflow-hidden rounded-full bg-[#E8EDF2]">
        <div
          className={`h-full rounded-full ${status.bg}`}
          style={{ width: `${confidence}%` }}
        />
      </div>

      <p className="mt-6 font-['Karla'] text-[15px] leading-7 text-[#5F6773]">
        Confidence indicates how certain the AI is about its analysis based on
        the clarity, completeness, and consistency of the contract.
      </p>
    </section>
  );
}