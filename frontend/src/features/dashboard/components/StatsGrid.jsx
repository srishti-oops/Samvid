import StatCard from "./StatCard";

export default function StatsGrid({
    documents = 0,
    highRiskClauses = 0,
    monthlyAnalyses = 0,
    averageRisk = 0,
    loading = false,
}) {

    return (
        <section>

            <div className="mb-5">

                <h3 className="font-['Kameron'] text-3xl text-[#18202A]">
                    Overview
                </h3>

                <h3 className="mt-2 text-[#5E6773]">
                    Your document intelligence at a glance.
                </h3>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    title="Documents Analysed"
                    value={loading ? "—" : documents}
                    subtitle={
                        documents === 0
                            ? "No documents yet"
                            : `${documents} document${documents === 1 ? "" : "s"} analysed`
                    }
                />

                <StatCard
                    title="High Risk Agreements"
                    value={loading ? "—" : highRiskClauses}
                    subtitle={
                        highRiskClauses === 0
                            ? "Everything looks clear"
                            : `${highRiskClauses} agreement${highRiskClauses === 1 ? "" : "s"} need attention`
                    }
                />

                <StatCard
                    title="Analyses This Month"
                    value={loading ? "—" : monthlyAnalyses}
                    subtitle={
                        monthlyAnalyses === 0
                            ? "Start with your first agreement"
                            : `${monthlyAnalyses} completed this month`
                    }
                />

                <StatCard
                    title="Average Risk Score"
                    value={
                        loading
                            ? "—"
                            : documents === 0
                                ? "—"
                                : `${averageRisk}`
                    }
                    subtitle={
                        documents === 0
                            ? "Available after your first analysis"
                            : averageRisk <= 30
                                ? "Low overall risk"
                                : averageRisk <= 70
                                    ? "Moderate overall risk"
                                    : "High overall risk"
                    }
                />

            </div>

        </section>
    );
}