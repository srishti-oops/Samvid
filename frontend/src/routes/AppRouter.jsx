import { Routes, Route } from "react-router-dom";

import LandingPage from "../features/landing/LandingPage";
import LoginPage from "../features/login/LoginPage";
import SignupPage from "../features/signup/SignupPage";
import DashboardPage from "../features/dashboard/DashboardPage";
import OnboardingPage from "../features/onboarding/OnboardingPage";
import UploadPage from "../features/upload/UploadPage";
import PublicRoute from "../auth/PublicRoute";
import AnalysisResultPage from "../features/analysis/AnalysisResultPage";
import AnalysisLoadingPage from "../features/analysis/AnalysisLoadingPage";

import ProtectedRoute from "../auth/ProtectedRoute";

export default function AppRouter() {
    return (
        <Routes>

            {/* Public Routes */}

            <Route
                path="/"
                element={<LandingPage />}
            />

            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />

            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <SignupPage />
                </PublicRoute>
              }
            />

            {/* Protected Routes */}

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <DashboardPage />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/onboarding"
                element={
                    <ProtectedRoute>
                        <OnboardingPage />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/upload"
                element={
                    <ProtectedRoute>
                        <UploadPage />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/analysis/loading"
                element={
                    <ProtectedRoute>
                        <AnalysisLoadingPage />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/analysis/:analysisId"
                element={
                    <ProtectedRoute>
                        <AnalysisResultPage />
                    </ProtectedRoute>
                }
            />

        </Routes>
    );
}