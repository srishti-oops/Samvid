import { useCallback, useEffect, useState } from "react";
import { getAllAnalyses } from "../../../services/documentService";

export default function useDashboardData() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [dashboard, setDashboard] = useState({
        documents: 0,
        highRiskClauses: 0,
        monthlyAnalyses: 0,
        averageRisk: 0,
        recentAnalyses: [],
    });

    const refresh = useCallback(async () => {
        try {
            setLoading(true);
            setError("");

            const analyses = await getAllAnalyses();

            const now = new Date();

            const thisMonth = analyses.filter((analysis) => {
                if (!analysis.createdAt) return false;

                const date =
                    analysis.createdAt.toDate?.() ??
                    new Date(analysis.createdAt);

                return (
                    date.getMonth() === now.getMonth() &&
                    date.getFullYear() === now.getFullYear()
                );
            });

            const highRisk = analyses.filter(
                (analysis) =>
                    analysis.riskScore >= 71 ||
                    analysis.riskLevel === "High"
            );

            const averageRisk =
                analyses.length === 0
                    ? 0
                    : Math.round(
                          analyses.reduce(
                              (sum, analysis) =>
                                  sum + (analysis.riskScore || 0),
                              0
                          ) / analyses.length
                      );

            setDashboard({
                documents: analyses.length,
                highRiskClauses: highRisk.length,
                monthlyAnalyses: thisMonth.length,
                averageRisk,
                recentAnalyses: analyses,
            });
        } catch (err) {
            console.error(err);
            setError("Unable to load dashboard.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        refresh();
    }, [refresh]);

    return {
        ...dashboard,
        loading,
        error,
        refresh,
    };
}