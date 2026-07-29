import { FileText, UploadCloud } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

export default function UploadDropzone() {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const [file, setFile] = useState(null);

  const validateFile = (selected) => {
    if (!selected) return false;

    if (selected.type !== "application/pdf") {
      toast.error("Please upload a PDF document.");
      return false;
    }

    if (selected.size > MAX_FILE_SIZE) {
      toast.error("PDF must be smaller than 10 MB.");
      return false;
    }

    setFile(selected);
    return true;
  };

  const handleSelect = (e) => {
    validateFile(e.target.files?.[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    validateFile(e.dataTransfer.files?.[0]);
  };

  const handleAnalyze = () => {
    if (!file) {
      toast.error("Please select a PDF first.");
      return;
    }

    navigate("/analysis/loading", {
      state: { file },
    });
  };

  return (
    <section>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="cursor-pointer rounded-xl border-2 border-dashed border-[#DCE3EB] bg-white p-14 text-center transition hover:border-[#384B8F]"
      >
        <input
          ref={inputRef}
          type="file"
          accept=".pdf"
          hidden
          onChange={handleSelect}
        />

        {!file ? (
          <>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF2FA]">
              <UploadCloud className="h-10 w-10 text-[#384B8F]" />
            </div>

            <h3 className="mt-6 font-['Kameron'] text-2xl text-[#18202A]">
              Drag & Drop your agreement
            </h3>

            <p className="mt-2 text-[#5E6773]">
              Or click to browse PDF files (max 10 MB)
            </p>
          </>
        ) : (
          <>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF2FA]">
              <FileText className="h-10 w-10 text-[#384B8F]" />
            </div>

            <h3 className="mt-6 break-all font-['Kameron'] text-2xl text-[#18202A]">
              {file.name}
            </h3>

            <p className="mt-2 text-[#5E6773]">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </>
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={handleAnalyze}
          disabled={!file}
          className="h-12 rounded-lg bg-[#384B8F] px-8 text-white transition hover:bg-[#2F417F] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Analyze Agreement
        </button>
      </div>
    </section>
  );
}