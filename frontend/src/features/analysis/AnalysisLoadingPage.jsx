import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { analyzeDocument } from "../../services/analysisService";
import { saveAnalysis } from "../../services/documentService";

export default function AnalysisLoadingPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const file = location.state?.file;

    const [error, setError] = useState("");
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        let isMounted = true;

        async function processDocument() {

            if (!file) {
                setError(
                    "No document was found. Please upload your agreement again."
                );

                setTimeout(() => {
                    navigate("/upload");
                }, 2000);

                return;
            }

            try {

                setCurrentStep(1);

                const result = await analyzeDocument(file);

                if (!isMounted) return;

                setCurrentStep(2);

                const analysisId = await saveAnalysis(result, {
                    title: file.name.replace(/\.[^/.]+$/, ""),
                    filename: file.name,
                });

                if (!isMounted) return;

                setCurrentStep(3);
                     navigate(`/analysis/${analysisId}`);

                 } catch (err) {
                     console.error("Analysis failed:", err);

                     if (!isMounted) return;

                     let message =
                         "Something went wrong while analyzing your agreement.";

                     if (err?.response?.data?.message) {
                         message = err.response.data.message;
                     } else if (err?.message) {
                         message = err.message;
                     }

                     setError(message);

                     setTimeout(() => {
                         navigate("/upload");
                     }, 2500);
                 }
             }

             processDocument();

             return () => {
                 isMounted = false;
             };
         }, [file, navigate]);

         const steps = [
             "Reading uploaded document",
             "Extracting legal clauses",
             "Saving analysis securely",
             "Preparing your report",
         ];
      return (
          <main className="min-h-[calc(100vh-80px)] bg-[#F5F7FA] flex items-center justify-center px-6">
              <div className="w-full max-w-2xl rounded-2xl border border-[#DCE3EB] bg-white p-14 text-center">

                  <LoaderCircle className="mx-auto h-16 w-16 animate-spin text-[#384B8F]" />

                  <h1 className="mt-8 font-['Kameron'] text-5xl text-[#18202A]">
                      Analyzing Your Agreement
                  </h1>

                  <p className="mt-5 text-lg leading-8 text-[#5E6773]">
                      Samvid is reviewing your agreement, identifying important
                      clauses, evaluating risks and preparing your report.
                  </p>

                  <div className="mx-auto mt-12 max-w-md space-y-5">

                      {steps.map((step, index) => {

                          const completed = currentStep > index;
                          const active = currentStep === index;

                          return (
                              <div
                                  key={step}
                                  className="flex items-center gap-4 text-left"
                              >
                                  <div
                                      className={`h-3 w-3 rounded-full transition-all ${
                                          completed
                                              ? "bg-[#3C8D68]"
                                              : active
                                              ? "bg-[#384B8F] animate-pulse"
                                              : "bg-[#DCE3EB]"
                                      }`}
                                  />

                                  <span
                                      className={`${
                                          completed || active
                                              ? "text-[#18202A]"
                                              : "text-[#7A8796]"
                                      }`}
                                  >
                                      {step}
                                  </span>
                              </div>
                          );
                      })}

                  </div>

                  {error && (
                      <div className="mt-10 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-left text-sm text-red-700">
                          {error}
                      </div>
                  )}

              </div>
          </main>
      );
  }