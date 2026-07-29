import { ArrowUpRight, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function QuickActions({ onRefresh }) {
  const navigate = useNavigate();

  const handleUpload = () => {
    navigate("/upload");
  };

  return (
    <section>
      <div className="mb-5">
        <h3 className="font-['Kameron'] text-3xl text-[#18202A]">
          Get Started
        </h3>
        <p className="mt-2 text-[#5E6773]">
          Upload an agreement and let Samvid explain every important clause.
        </p>
      </div>

      <div className="rounded-xl border border-[#DCE3EB] bg-white p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#EEF2FF]">
              <Upload className="text-[#384B8F]" />
            </div>

            <h4 className="mt-6 font-['Kameron'] text-3xl text-[#384B8F]">
              Upload a Legal Agreement
            </h4>

            <p className="mt-3 max-w-3xl leading-7 text-[#5E6773]">
              Samvid supports rental agreements, employment contracts, agreements, NDAs, service agreements and many other
              legal documents.
            </p>
          </div>

          <button
            onClick={handleUpload}
            className="flex h-12 items-center gap-2 rounded-lg bg-[#384B8F] px-6 text-white transition hover:bg-[#2F417F]"
          >
            Upload Agreement
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}