import { Sparkles } from "lucide-react";

export default function SummaryCard({ summary }) {
  return (
    <section className="rounded-2xl border border-[#DCE3EB] bg-white shadow-sm">
      {/* Header */}

      <div className="flex items-center gap-3 border-b border-[#DCE3EB] px-8 py-5">
        <div className="rounded-lg bg-[#EEF3FF] p-2">
          <Sparkles
            size={18}
            className="text-[#384B8F]"
          />
        </div>

        <div>
          <p className="font-['Karla'] text-xs font-semibold uppercase tracking-[0.25em] text-[#5F6773]">
            AI SUMMARY
          </p>

          <h2 className="mt-1 font-['Kameron'] text-[28px] text-[#1F2633]">
            Contract Overview
          </h2>
        </div>
      </div>

      {/* Body */}

      <div className="px-8 py-8">
        <p className="font-['Karla'] text-[18px] leading-9 text-[#5F6773]">
          {summary}
        </p>
      </div>
    </section>
  );
}