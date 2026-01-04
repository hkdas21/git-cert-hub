import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CertificationPage from './pages/CertificationPage'

function App() {
  return (
    <ThemeProvider>
      <Router basename="/git-cert-hub">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/certification/:trackId" element={<CertificationPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
