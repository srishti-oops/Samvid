import DashboardHeader from "./components/DashboardHeader";
import WelcomeSection from "./components/WelcomeSection";
import StatsGrid from "./components/StatsGrid";
import QuickActions from "./components/QuickActions";
import RecentAnalyses from "./components/RecentAnalyses";
import useDashboardData from "./hooks/useDashboardData";
export default function DashboardPage() {
    const {
        documents,
        highRiskClauses,
        monthlyAnalyses,
        averageRisk,
        recentAnalyses,
        loading,
        error,
        refresh,
    } = useDashboardData();
    return (
        <div className="min-h-screen bg-[#F5F7FA]">

            <DashboardHeader />

            <main className="mx-auto max-w-7xl px-8 py-10">

                <WelcomeSection />

                <div className="mt-10">
                    <StatsGrid
                        documents={documents}
                        highRiskClauses={highRiskClauses}
                        monthlyAnalyses={monthlyAnalyses}
                        averageRisk={averageRisk}
                        loading={loading}
                    />
                </div>

                <div className="mt-10">
                    <QuickActions
                        onRefresh={refresh}
                    />
                </div>

                <div className="mt-10">

                    {error && (
                        <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {error}
                        </div>
                    )}

                    <RecentAnalyses
                        analyses={recentAnalyses}
                        loading={loading}
                        onRefresh={refresh}
                    />

                </div>

            </main>

        </div>
    );
}