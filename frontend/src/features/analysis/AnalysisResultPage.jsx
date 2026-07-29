import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
   ArrowLeft,
   Download,
   FileText,
   FileSearch,
   ShieldAlert,
   ShieldCheck,
   Scale,
   Scroll,
   PencilLine,
   TriangleAlert,
   CheckCircle2,
   FilePlus2,
   Handshake,
   Info,
   AlertTriangle,
 } from "lucide-react";

import DashboardHeader from "../dashboard/components/DashboardHeader";
import { getAnalysis } from "../../services/documentService";
import { downloadReport } from "./utils/downloadReport";

export default function AnalysisResultPage() {
  const { analysisId } = useParams();
  const navigate = useNavigate();

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadAnalysis() {
      try {
        const data = await getAnalysis(analysisId);
        setReport(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load this analysis.");
      } finally {
        setLoading(false);
      }
    }

    loadAnalysis();
  }, [analysisId]);

  const handleDownload = () => {
    if (report) {
      downloadReport(report);
    }
  };

  const riskStyles = {
    High: {
      badge: "bg-red-100 text-red-700 border border-red-200",
      border: "border-l-red-500",
    },
    Medium: {
      badge: "bg-amber-100 text-amber-700 border border-amber-200",
      border: "border-l-amber-500",
    },
    Moderate: {
      badge: "bg-amber-100 text-amber-700 border border-amber-200",
      border: "border-l-amber-500",
    },
    Low: {
      badge: "bg-emerald-100 text-emerald-700 border border-emerald-200",
      border: "border-l-emerald-500",
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F7FA]">
        <DashboardHeader />

        <div className="mx-auto max-w-7xl px-8 py-20">
          <div className="animate-pulse space-y-5">
            <div className="h-10 w-72 rounded-md bg-gray-200" />
            <div className="h-5 w-96 rounded-md bg-gray-200" />
            <div className="h-40 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !report) {
    return (
      <div className="min-h-screen bg-[#F5F7FA]">
        <DashboardHeader />

        <div className="flex h-[70vh] items-center justify-center">
          <div className="rounded-md border border-red-200 bg-white p-10 text-center shadow-sm">
            <AlertTriangle
              className="mx-auto mb-4 text-red-500"
              size={34}
            />

            <h2 className="mb-2 text-xl font-semibold text-[#18202A]">
              Analysis unavailable
            </h2>

            <p className="mb-8 text-[#5E6773]">
              {error}
            </p>

            <button
              onClick={() => navigate("/dashboard")}
              className="rounded-md bg-[#384B8F] px-5 py-2.5 text-white transition hover:bg-[#2F417F]"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <DashboardHeader />

      <main className="mx-auto max-w-7xl px-8 py-8">

        {/* HERO */}

        <section className="rounded-md border border-[#DCE3EB] bg-white p-8">

          <div className="flex items-start justify-between gap-8">

            <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#EEF2FF]">
                    <FileText size={22} className="text-[#384B8F]" />
                </div>

                <div>

                    <p className="mb-2 text-m font-semibold uppercase tracking-[0.25em] text-[#384B8F]">
                        AI CONTRACT ANALYSIS
                    </p>

                    <h1
                      className="text-4xl font-semibold text-[#384B8F]"
                      style={{ fontFamily: '"Kameron", serif' }}
                    >
                        Contract Intelligence Report
                    </h1>

                    <p className="mt-4 max-w-3xl text-[18px] leading-7 text-[#5E6773]">
                        Samvid has reviewed your document and highlighted potential legal risks,
                        missing protections and negotiation opportunities before you sign.
                    </p>

                </div>

            </div>

            <div className="flex flex-col gap-3">

                <button
                    onClick={() => navigate("/dashboard")}
                    className="flex items-center justify-center gap-3 rounded-xl border border-[#384B8F] bg-white px-5 py-2.5 text-m font-medium text-[#384B8F] transition-all hover:bg-[#EEF2FF]"
                >
                    <ArrowLeft size={16} />
                    Back to Dashboard
                </button>

                <button
                    onClick={handleDownload}
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#384B8F] px-5 py-2.5 text-white transition-all hover:bg-[#2F417F]"
                >
                    <Download size={18} />
                    Download Report
                </button>

                <button
                    onClick={() => navigate("/upload")}
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#384B8F] px-5 py-2.5 text-white transition-all hover:bg-[#2F417F]"
                >
                    <FilePlus2 size={18} />
                    Analyze Another Document
                </button>

            </div>

          </div>

        </section>

        {/* METRICS */}

        <section className="mt-7 rounded-md border border-[#DCE3EB] bg-white">

          <div className="grid grid-cols-3">

            <div className="border-r border-[#DCE3EB] p-6 transition-all duration-200 hover:bg-[#FAFBFC]">

                <div className="mb-5 flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <ShieldAlert
                      size={22}
                      className="text-[#384B8F]"
                    />

                    <p className="text-m font-semibold uppercase tracking-wider text-[#384B8F]">
                      Overall Risk
                    </p>

                  </div>

                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs uppercase font-semibold text-red-700">
                    {report.overallRisk}
                  </span>

                </div>
                <h2 className="font-kameron text-4xl text-[#18202A]">
                    {report.riskScore}
                </h2>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#EEF2F6]">
                    <div
                        className="h-full rounded-full bg-[#DC143C] transition-all duration-700"
                        style={{
                            width: `${report.riskScore}%`,
                        }}
                    />
                </div>
            </div>

            <div className="border-r border-[#DCE3EB] p-6 transition-all duration-200 hover:bg-[#FAFBFC]">

              <div className="mb-5 flex items-center gap-2">

                <Scale
                  size={22}
                  className="text-[#384B8F]"
                />

                <p className="text-m font-semibold uppercase tracking-wider text-[#384B8F]">
                  Risk Score
                </p>

              </div>
              <h2 className="font-kameron text-4xl text-[#18202A]">

                {report.riskScore}

                <span className="ml-1 text-xl text-[#8A93A0]">
                  /100
                </span>

              </h2>

              <p className="mt-5 text-m text-[#5E6773]">
                Overall contractual risk based on the clauses.
              </p>

            </div>

            <div className="p-6 transition-all duration-200 hover:bg-[#FAFBFC]">

              <div className="mb-5 flex items-center gap-2">

                <CheckCircle2
                  size={22}
                  className="text-[#3C8D68]"
                />

                <p className="text-m font-semibold uppercase tracking-wider text-[#384B8F]">
                  AI Confidence
                </p>

              </div>

              <div className="flex items-end gap-3">

                <h2 className="font-kameron text-4xl text-[#18202A]">
                  {report.confidence}%
                </h2>

                <span className="mb-1 rounded-full bg-emerald-50 px-3 py-1 text-xs uppercase font-semibold text-emerald-700">
                  Very High
                </span>

              </div>

              <p className="mt-5 text-m text-[#5E6773]">
                Confidence level of Samvid's analysis.
              </p>

            </div>

          </div>

        </section>

        {/* AI SUMMARY */}

        <section className="mt-8">

          <div className="mb-5 flex items-center gap-2">

            <Scroll
              size={19}
              className="text-[#384B8F]"
            />

            <h2 className="text-xl font-semibold uppercase tracking-[0.20em] text-[#384B8F]">
              AI Summary
            </h2>

          </div>
          <div className="rounded-md border border-[#DCE3EB] bg-white p-7">

            <p className="font-karla max-w-none text-[18px] leading-8 text-[#5E6773]">
              {report.summary}
            </p>

          </div>

        </section>

        {/* CLAUSE BY CLAUSE REVIEW */}

        <section className="mt-10">

          <div className="mb-5 flex items-center gap-2">

            <PencilLine
              size={19}
              className="text-[#384B8F]"
            />

            <h2 className="text-xl font-semibold uppercase tracking-[0.20em] text-[#384B8F]">
              Clause Review
            </h2>

          </div>

          <div className="space-y-4">

            {report.clauses?.map((clause, index) => {

              const style =
                riskStyles[clause.risk] || riskStyles.High;

              return (

                <div
                  key={index}
                  className={`rounded-md border border-[#DCE3EB] border-l-4 ${style.border} bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C7D3E5] hover:shadow-md`}
                >

                  <div className="flex items-start justify-between gap-6 p-6">

                    {/* LEFT */}

                    <div className="flex-1">

                      <div className="mb-3 flex items-center gap-3">

                        <span className="text-s font-semibold uppercase tracking-[0.15em] text-[#384B8F]">
                          Clause {index + 1}
                        </span>

                      </div>

                      <h3 className="font-kameron text-2xl font-semibold text-[#18202A]">
                        {clause.name}
                      </h3>

                      <p className="mt-3 text-[18px] leading-7 text-[#5E6773]">
                        {clause.explanation}
                      </p>

                    </div>

                    {/* RIGHT */}

                    <div className="flex flex-col items-end gap-4">

                      <span
                        className={`inline-flex min-w-[130px] justify-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide whitespace-nowrap ${style.badge}`}
                      >
                        {clause.risk} Risk
                      </span>

                    </div>

                  </div>

                  {/* Recommendation */}

                  {clause.recommendation && (

                    <div className="border-t border-[#DCE3EB] px-6 py-5">

                      <p className="mb-1 text-s font-semibold uppercase tracking-[0.15em] text-[#384B8F]">
                        Suggested Action
                      </p>

                      <p className="text-[18px] leading-7 text-[#5E6773]">
                        {clause.recommendation}
                      </p>

                    </div>

                  )}

                </div>

              );

            })}

          </div>

        </section>
        {/* MISSING CLAUSES & NEGOTIATION SUGGESTIONS */}

        <section className="mt-10">

          <div className="grid gap-6 lg:grid-cols-2">

            {/* Missing Clauses */}

            <div>

              <div className="mb-5 flex items-center gap-2">

                <TriangleAlert
                  size={19}
                  className="text-[#384B8F]"
                />

                <h2 className="text-xl font-semibold uppercase tracking-[0.20em] text-[#384B8F]">
                  Missing Clauses
                </h2>

              </div>

              <div className="rounded-md border border-[#DCE3EB] bg-white p-6">

                {report.missingClauses &&
                report.missingClauses.length > 0 ? (

                  <div className="space-y-4">

                    {report.missingClauses.map((item, index) => (

                      <div
                        key={index}
                        className="flex items-start gap-3"
                      >

                        <FilePlus2
                           size={18}
                           className="mt-1 text-[#3C8D68] flex-shrink-0"
                         />

                        <p className="text-[18px] leading-7 text-[#5E6773]">
                          {item}
                        </p>

                      </div>

                    ))}

                  </div>

                ) : (

                  <p className="text-[15px] leading-7 text-[#5E6773]">
                    No important clauses appear to be missing.
                  </p>

                )}

              </div>

            </div>

            {/* Negotiation Suggestions */}

            <div>

              <div className="mb-5 flex items-center gap-2">

                <Handshake
                  size={18}
                  className="text-[#384B8F]"
                />

                <h2 className="text-xl font-semibold uppercase tracking-[0.20em] text-[#384B8F]">
                  Negotiation Suggestions
                </h2>

              </div>

              <div className="rounded-md border border-[#DCE3EB] bg-white p-6">

                {report.negotiationTips &&
                report.negotiationTips.length > 0 ? (

                  <div className="space-y-4">

                    {report.negotiationTips.map((tip, index) => (

                      <div
                        key={index}
                        className="flex items-start gap-3"
                      >

                        <TriangleAlert
                          size={18}
                          className="mt-1 text-[#D79B2F] flex-shrink-0"
                        />

                        <p className="text-[17px] leading-7 text-[#5E6773]">
                          {tip}
                        </p>

                      </div>

                    ))}

                  </div>

                ) : (

                  <p className="text-[17px] leading-7 text-[#5E6773]">
                    No negotiation recommendations were generated for this agreement.
                  </p>

                )}

              </div>

            </div>

          </div>

        </section>

        {/* DISCLAIMER */}

        <section className="mt-10">

          <div className="mb-5 flex items-center gap-2">

            <Info
              size={18}
              className="text-[#384B8F]"
            />

            <h2 className="text-xl font-semibold uppercase tracking-[0.20em] text-[#384B8F]">
              Disclaimer
            </h2>

          </div>

          <div className="rounded-md border border-[#DCE3EB] bg-white p-6">

            <p className="text-[19px] leading-8 text-[#DC143C]">
              This report has been generated using Samvid's AI-assisted legal
              document analysis. It is intended to improve understanding of
              contractual language and highlight potential legal risks. This
              report does not constitute legal advice. Users should consult a
              qualified legal professional before making legally binding
              decisions.
            </p>

          </div>

        </section>

        {/* ACTIONS */}

        <section className="mt-10 mb-12">

        <div className="mt-12 flex flex-col gap-4 border-t border-[#DCE3EB] pt-8 md:flex-row md:items-center md:justify-between">

          <button
            onClick={() => navigate("/dashboard")}
            className="inline-flex items-center gap-2 rounded-lg border border-[#DCE3EB] bg-white px-6 py-3 font-medium text-[#384B8F] transition-all duration-200 hover:bg-[#F5F7FA]"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </button>

          <div className="flex flex-wrap gap-3">

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-lg border border-[#384B8F] bg-white px-6 py-3 font-medium text-[#384B8F] transition-all duration-200 hover:bg-[#EEF2FF]"
            >
              <Download size={18} />
              Download Report
            </button>

            <button
              onClick={() => navigate("/upload")}
              className="inline-flex items-center gap-2 rounded-lg bg-[#384B8F] px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-[#2F417F]"
            >
              <FilePlus2 size={18} />
              Analyze Another Document
            </button>

          </div>

        </div>

        </section>

      </main>

    </div>

  );
}