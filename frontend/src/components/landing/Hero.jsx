import Navbar from "../layout/Navbar";
import {
  ArrowRight,
  Shield,
  Languages,
  Sparkles,
} from "lucide-react";
export default function Hero() {
  return (
    <>
      <Navbar />

      <section
        id="hero"
        className="
        relative
        mx-auto
        grid
        max-w-[1280px]
        grid-cols-1
        items-center
        gap-12
        px-8
        pt-20
        pb-24
        lg:grid-cols-[1.08fr_0.92fr]
        "
      >

        {/* Background accents */}

        <div className="absolute left-[-140px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[#EEF2FA] blur-3xl opacity-70" />

        <div className="absolute right-[-160px] bottom-[-160px] h-[420px] w-[420px] rounded-full bg-[#EEF2FA] blur-3xl opacity-70" />

        <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-8 pt-14 pb-14 lg:grid-cols-[1.08fr_0.92fr]">

          {/* LEFT */}

          <div>

            <span className="font-['Karla'] text-sm font-semibold uppercase tracking-[0.20em] text-[#384B8F]">
              AI-powered legal document intelligence
            </span>

            <h1 className="mt-4 max-w-[760px] whitespace-nowrap font-['Kameron'] text-[54px] lg:text-[60px] font-medium leading-[1.08] tracking-[-0.03em] text-[#2B3242]">
              Clarity before commitment.
            </h1>

            <h2 className="mt-6 max-w-[690px] font-['Kameron'] text-[30px] font-normal leading-[1.22] text-[#1F2633] lg:text-[34px]">
              Understand legal agreements before <br /> you sign.
            </h2>

            <p className="mt-6 max-w-[610px] font-['Karla'] text-[19px] leading-[1.9] text-[#646D79]">
              Samvid explains complex legal language, highlights risky
              clauses, and helps you make informed decisions before signing.
            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="inline-flex items-center gap-2 rounded-lg bg-[#384B8F] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2F417F] hover:shadow-lg">
                Analyze Agreement
                <ArrowRight size={18} />
              </button>

              <button className="rounded-lg border border-[#DCE3EB] bg-white px-8 py-4 font-semibold text-[#384B8F] transition-all duration-300 hover:border-[#384B8F] hover:bg-[#FAFBFD]">
                How It Works
              </button>

            </div>

            {/* Trust Cards */}

            <div className="mt-12 flex flex-wrap gap-4">

              <div className="flex h-[60px] w-[220px] items-center gap-3 rounded-xl border border-[#DCE3EB] bg-white px-5">
                <Shield size={18} className="text-[#384B8F]" />
                <span className="font-['Karla'] text-[15px] font-semibold text-[#2B3242]">
                  Private by Design
                </span>
              </div>

              <div className="flex h-[60px] w-[220px] items-center gap-3 rounded-xl border border-[#DCE3EB] bg-white px-5">
                <Languages size={18} className="text-[#384B8F]" />
                <span className="font-['Karla'] text-[15px] font-semibold text-[#2B3242]">
                  Plain Language
                </span>
              </div>

              <div className="flex h-[60px] w-[220px] items-center gap-3 rounded-xl border border-[#DCE3EB] bg-white px-5">
                <Sparkles size={18} className="text-[#384B8F]" />
                <span className="font-['Karla'] text-[15px] font-semibold text-[#2B3242]">
                  AI-Assisted Analysis
                </span>
              </div>

            </div>

            <p className="mt-7 max-w-[560px] font-['Karla'] text-[18px] leading-7 text-[#7A8391]">
              Trusted for employment, rental, freelance, and everyday legal agreements.
            </p>

          </div>
          {/* RIGHT */}

          <div className="hidden lg:flex items-center justify-center pl-10">

            <div className="relative mt-20 ml-12 xl:ml-16 flex w-full max-w-[620px] flex-col">

              {/* Opening Quote */}

              <div className="absolute -top-14 left-0 select-none font-['Kameron'] text-[128px] leading-none text-[#DDE5F3]">
                “
              </div>

              {/* Editorial Quote */}

              <h2
                className="relative z-10
                pl-8
                max-w-[620px]
                font-['Kameron']
                text-[68px]
                leading-[1.04]
                tracking-[-0.04em]
                text-[#1F2633]"
              >
                Every signature deserves certainty.
              </h2>

              {/* Footer */}

              <div className="mt-10 pl-8">

                <div className="mb-6 h-[2px] w-36 rounded-full bg-[#435AB2]/80"></div>

                <p className="font-['Karla'] text-[15px] font-semibold uppercase tracking-[0.38em] text-[#435AB2]">
                  Samvid
                </p>

              </div>
</div>
            </div>

          </div>
<div className="absolute bottom-0 left-1/2 h-px w-full max-w-7xl -translate-x-1/2 bg-[#E4E8EE]" />
      </section>
    </>
  );
}