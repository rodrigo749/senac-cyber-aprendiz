import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/home/HomePage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { LearningPathPage } from './pages/LearningPathPage'
import { QuizPremiadoPage } from './features/quiz-premiado/QuizPremiadoPage'
import { AdminLoginPage } from './pages/admin/AdminLoginPage'
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage'
import { AuthProvider } from './features/admin/AuthContext'
import { RequireAdmin } from './features/admin/RequireAdmin'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="flex min-h-screen flex-col bg-slate-950">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacidade" element={<PrivacyPolicyPage />} />
            <Route path="/trilhas/:slug" element={<LearningPathPage />} />
            <Route path="/quiz-premiado" element={<QuizPremiadoPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route
              path="/admin"
              element={
                <RequireAdmin>
                  <AdminDashboardPage />
                </RequireAdmin>
              }
            />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
