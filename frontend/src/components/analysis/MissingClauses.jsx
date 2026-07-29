import { ShieldCheck } from "lucide-react";

export default function MissingClauses({ clauses }) {
  return (
    <section className="rounded-2xl border border-[#DCE3EB] bg-white shadow-sm">

      {/* Header */}

      <div className="border-b border-[#DCE3EB] px-8 py-5">
        <p className="font-['Karla'] text-xs font-semibold uppercase tracking-[0.25em] text-[#5F6773]">
          MISSING CLAUSES
        </p>

        <h2 className="mt-1 font-['Kameron'] text-[30px] text-[#1F2633]">
          Important Protections
        </h2>
      </div>

      {/* Content */}

      <div className="space-y-5 px-8 py-8">

        {clauses.length === 0 ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="font-['Karla'] text-[17px] text-emerald-700">
              Great! No important missing clauses were detected.
            </p>
          </div>
        ) : (
          clauses.map((clause, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-xl border border-[#E5EAF0] bg-[#FAFBFD] p-5 transition-all duration-200 hover:border-[#384B8F]"
            >
              <div className="rounded-lg bg-[#EEF3FF] p-2">
                <ShieldCheck
                  size={18}
                  className="text-[#384B8F]"
                />
              </div>

              <div>
                <h3 className="font-['Kameron'] text-[22px] text-[#1F2633]">
                  {clause}
                </h3>

                <p className="mt-2 font-['Karla'] text-[16px] leading-7 text-[#5F6773]">
                  This protection was not found in the agreement. Consider
                  discussing it before signing.
                </p>
              </div>
            </div>
          ))
        )}

      </div>

    </section>
  );
}