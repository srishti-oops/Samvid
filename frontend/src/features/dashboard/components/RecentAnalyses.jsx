import { Link } from "react-router-dom";
import EmptyState from "./EmptyState";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { deleteAnalysis } from "../../../services/documentService";
export default function RecentAnalyses({
    analyses = [],
    loading = false,
    onRefresh,
}) {
    const [analysisToDelete, setAnalysisToDelete] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const handleDelete = async () => {
        if (!analysisToDelete) return;

        try {
            setIsDeleting(true);

            await deleteAnalysis(analysisToDelete.id);

            setAnalysisToDelete(null);

            if (onRefresh) {
                await onRefresh();
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsDeleting(false);
        }
    };
    return (
        <section>

            <div className="mb-5">

                <h3 className="font-['Kameron'] text-3xl text-[#18202A]">
                    Recent Analyses
                </h3>

                <p className="mt-2 text-[#5E6773]">
                    Your latest reviewed legal agreements will appear here.
                </p>

            </div>

            {loading ? (

                <div className="rounded-xl border border-[#DCE3EB] bg-white p-10 text-center text-[#5E6773]">
                    Loading analyses...
                </div>

            ) : analyses.length === 0 ? (

                <EmptyState />

            ) : (

                <div className="overflow-hidden rounded-xl border border-[#DCE3EB] bg-white">

                    {analyses.map((analysis) => (

                        <div
                            key={analysis.id}
                            className="flex items-stretch border-b border-[#EEF2F6] last:border-b-0"
                        >

                            <Link
                                to={`/analysis/${analysis.id}`}
                                className="flex-1 px-6 py-3 transition-colors hover:bg-[#F8FAFC]"
                            >

                                <div className="flex items-center justify-between">

                                    <div>

                                        <h4 className="font-['Kameron'] text-xl text-[#18202A]">
                                            {analysis.title || analysis.filename}
                                        </h4>
                                    </div>

                                    <div className="mr-4 flex items-center gap-2">

                                        <div
                                            className={`inline-flex rounded-full px-5 py-1 text-sm font-semibold ${
                                                analysis.riskScore >= 71
                                                    ? "bg-red-100 text-red-700"
                                                    : analysis.riskScore >= 31
                                                    ? "bg-amber-100 text-amber-700"
                                                    : "bg-green-100 text-green-700"
                                            }`}
                                        >
                                            {analysis.riskScore}
                                        </div>

                                        <span className="text-sm font-medium text-[#5E6773]">
                                            {analysis.riskLevel &&
                                            analysis.riskLevel !== "Unknown"
                                                ? analysis.riskLevel
                                                : analysis.riskScore >= 71
                                                    ? "High"
                                                    : analysis.riskScore >= 31
                                                    ? "Medium"
                                                    : "Low"}
                                        </span>

                                    </div>

                                </div>

                            </Link>

                            <button
                                type="button"
                                onClick={() => setAnalysisToDelete(analysis)}
                                className="flex w-14 items-center justify-center border-l border-[#EEF2F6] text-[#C95C54] transition-colors hover:bg-red-50"
                                aria-label="Delete analysis"
                            >
                                <Trash2 size={18} />
                            </button>

                        </div>
                    ))}

                </div>

            )}
{analysisToDelete && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

            <h3
                className="text-2xl text-[#18202A]"
                style={{ fontFamily: '"Kameron", serif' }}
            >
                Delete Analysis?
            </h3>

            <p className="mt-3 text-[#5E6773]">
                This analysis will be permanently removed. This action cannot be undone.
            </p>

            <div className="mt-8 flex justify-end gap-3">

                <button
                    onClick={() => setAnalysisToDelete(null)}
                    className="rounded-lg border border-[#DCE3EB] px-5 py-2 text-[#18202A]"
                >
                    Cancel
                </button>

                <button
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="rounded-lg bg-[#C95C54] px-5 py-2 text-white transition hover:opacity-90 disabled:opacity-60"
                >
                    {isDeleting ? "Deleting..." : "Delete"}
                </button>

            </div>

        </div>
    </div>
)}
        </section>
    );
}