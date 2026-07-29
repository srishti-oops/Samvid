import { useEffect, useState } from "react";
import {
    Navigate,
    useNavigate,
    useParams,
} from "react-router-dom";
import {
    ArrowLeft,
    Download,
    FileText,
    Sparkles,
} from "lucide-react";

import { getAnalysis } from "../../services/documentService";
import { downloadReport } from "./utils/downloadReport";
import RiskCard from "../../components/analysis/RiskCard";
import SummaryCard from "../../components/analysis/SummaryCard";
import ClauseList from "../../components/analysis/ClauseList";
import MissingClauses from "../../components/analysis/MissingClauses";
import NegotiationTips from "../../components/analysis/NegotiationTips";
import ConfidenceCard from "../../components/analysis/ConfidenceCard";

export default function AnalysisPage() {

    const { analysisId } = useParams();
    const navigate = useNavigate();

    const [analysis, setAnalysis] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const handleDownload = async () => {
        try {
            await downloadReport(analysisId);
        } catch (err) {
            console.error(err);
            alert("Unable to download report.");
        }
    };
    useEffect(() => {

        let mounted = true;

        async function loadAnalysis() {

            if (!analysisId) {
                setError("Analysis not found.");
                setLoading(false);
                return;
            }

            try {

                const data = await getAnalysis(analysisId);

                if (!mounted) return;

                if (!data) {
                    setError("This analysis no longer exists.");
                    setLoading(false);
                    return;
                }

                setAnalysis({

                    fileName:
                        data.filename ||
                        data.fileName ||
                        data.title ||
                        "Uploaded Agreement",

                    overallRisk:
                        data.riskLevel ||
                        data.overallRisk ||
                        "Moderate",

                    riskScore:
                        data.riskScore ?? 50,

                    confidence:
                        data.confidence ?? 90,

                    summary:
                        data.summary ||
                        "No summary generated.",

                    clauses:
                        data.clauses || [],

                    missingClauses:
                        data.missingClauses || [],

                    negotiationTips:
                        data.recommendations ||
                        data.negotiationTips ||
                        [],

                    createdAt:
                        data.createdAt

                });

                setLoading(false);

            } catch (err) {

                console.error(err);

                if (!mounted) return;

                setError(
                    err?.message ||
                    "Unable to load this analysis."
                );

                setLoading(false);
            }
        }

        loadAnalysis();

        return () => {
            mounted = false;
        };

    }, [analysisId]);

    if (loading) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-[#F5F7FA]">
                <div className="text-center">

                    <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#DCE3EB] border-t-[#384B8F]" />

                    <h2 className="mt-6 font-['Kameron'] text-3xl text-[#18202A]">
                        Preparing Your Report
                    </h2>

                    <p className="mt-3 text-[#5E6773]">
                        Fetching your analysis...
                    </p>

                </div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-[#F5F7FA] px-6">

                <div className="w-full max-w-xl rounded-2xl border border-[#DCE3EB] bg-white p-12 text-center">

                    <h2 className="font-['Kameron'] text-4xl text-[#18202A]">
                        Analysis Not Found
                    </h2>

                    <p className="mt-5 leading-8 text-[#5E6773]">
                        {error}
                    </p>

                    <button
                        onClick={() => navigate("/dashboard")}
                        className="mt-10 rounded-xl bg-[#384B8F] px-7 py-3 text-white transition hover:bg-[#2F417F]"
                    >
                        Back to Dashboard
                    </button>

                </div>

            </main>
        );
    }

    if (!analysis) {
        return <Navigate to="/dashboard" replace />;
    }

    return (

        <main className="min-h-screen bg-[#F5F7FA]">

            <div className="mx-auto max-w-[1480px] px-8 py-12 lg:px-12">

                {/* Hero */}

                <section className="rounded-3xl border border-[#DCE3EB] bg-white px-10 py-10">

                    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

                        <div className="max-w-4xl">

                            <div className="flex items-center gap-3">

                                <div className="rounded-xl bg-[#EEF3FF] p-2.5">

                                    <FileText
                                        size={20}
                                        className="text-[#384B8F]"
                                    />

                                </div>

                                <p className="font-['Karla'] text-xs font-semibold uppercase tracking-[0.28em] text-[#5F6773]">

                                    LEGAL ANALYSIS REPORT

                                </p>

                            </div>

                            <h1 className="mt-5 font-['Kameron'] text-5xl leading-tight text-[#18202A]">

                                {analysis.fileName}

                            </h1>

                            <p className="mt-6 max-w-3xl font-['Karla'] text-[18px] leading-9 text-[#5E6773]">

                                Samvid has completed a comprehensive review of
                                your document and identified important legal
                                clauses, potential risks, missing protections,
                                and practical recommendations before signing.

                            </p>

                        </div>

                        <div className="flex flex-col gap-3 lg:w-[260px]">

                            <button
                                onClick={() => navigate("/dashboard")}
                                className="flex items-center justify-center gap-2 rounded-xl border border-[#DCE3EB] bg-white px-5 py-3 font-medium text-[#18202A] transition hover:border-[#384B8F]"
                            >
                                <ArrowLeft size={18} />
                                Back to Dashboard
                            </button>

                            <button
                                onClick={handleDownload}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#384B8F] px-5 py-3 font-medium text-white transition hover:bg-[#2F417F]"
                            >
                                <Download size={18} />
                                Download Report
                            </button>

                            <button
                                onClick={() => navigate("/upload")}
                                className="flex items-center justify-center gap-2 rounded-xl border border-[#DCE3EB] bg-[#F8FAFC] px-5 py-3 font-medium text-[#18202A] transition hover:border-[#384B8F]"
                            >
                                <Sparkles size={18} />
                                Analyze Another
                            </button>

                        </div>

                    </div>

                </section>
                {/* Main Content */}

                <section className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">

                    {/* Left Content */}

                    <div className="space-y-8">

                        <SummaryCard
                            summary={analysis.summary}
                        />

                        <ClauseList
                            clauses={analysis.clauses}
                        />

                        {/* Bottom Grid */}

                        <div className="grid gap-8 lg:grid-cols-2">

                            <MissingClauses
                                clauses={analysis.missingClauses}
                            />

                            <NegotiationTips
                                tips={analysis.negotiationTips}
                            />

                        </div>

                    </div>

                    {/* Right Sidebar */}

                    <aside className="self-start xl:sticky xl:top-8">

                        <div className="space-y-6">

                            <RiskCard
                                risk={analysis.overallRisk}
                                score={analysis.riskScore}
                            />

                            <ConfidenceCard
                                confidence={analysis.confidence}
                            />

                            {/* Quick Actions */}

                            <section className="rounded-2xl border border-[#DCE3EB] bg-white p-6">

                                <p className="font-['Karla'] text-xs font-semibold uppercase tracking-[0.22em] text-[#5F6773]">
                                    NEXT STEPS
                                </p>

                                <h2 className="mt-2 font-['Kameron'] text-[28px] text-[#18202A]">
                                    What would you like to do?
                                </h2>

                                <div className="mt-6 space-y-3">

                                    <button
                                        onClick={handleDownload}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#384B8F] px-5 py-3 font-medium text-white transition hover:bg-[#2F417F]"
                                    >  <Download size={18} />
                                        Download Report
                                    </button>

                                    <button
                                        onClick={() => navigate("/upload")}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#DCE3EB] bg-[#F8FAFC] px-5 py-3 font-medium text-[#18202A] transition hover:border-[#384B8F]"
                                    >
                                        <Sparkles size={18} />
                                        Analyze Another Document
                                    </button>

                                    <button
                                        onClick={() => navigate("/dashboard")}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#DCE3EB] bg-white px-5 py-3 font-medium text-[#18202A] transition hover:border-[#384B8F]"
                                    >
                                        <ArrowLeft size={18} />
                                        Back to Dashboard
                                    </button>

                                </div>

                            </section>

                        </div>

                    </aside>

                </section>

            </div>

        </main>

    );

}