import { Link } from "react-router-dom";
import { FileText, Upload } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-[#DCE3EB] bg-white px-10 py-20 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF2FF]">
        <FileText size={30} className="text-[#384B8F]" />
      </div>

      <h3 className="mt-6 font-['Kameron'] text-3xl text-[#18202A]">
        No analyses yet
      </h3>

      <p className="mx-auto mt-4 max-w-lg leading-7 text-[#5E6773]">
        Upload your first agreement to receive a detailed legal review, identify
        risky clauses, and understand your document before signing.
      </p>

      <Link
        to="/upload"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#384B8F] px-6 py-3 font-medium text-white transition hover:bg-[#2F417F]"
      >
        <Upload size={18} />
        Upload Your First Document
      </Link>
    </div>
  );
}