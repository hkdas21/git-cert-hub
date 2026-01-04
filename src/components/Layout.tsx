import React from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sun, Github } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-primer-canvas-default dark:bg-primer-dark-canvas-default transition-colors">
      <header className="sticky top-0 z-50 bg-primer-canvas-default dark:bg-primer-dark-canvas-default border-b border-primer-border-default dark:border-primer-dark-border-default">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Github className="w-8 h-8 text-primer-fg-default dark:text-primer-dark-fg-default" />
              <span className="text-xl font-semibold text-primer-fg-default dark:text-primer-dark-fg-default">
                GitHub Certification Hub
              </span>
            </Link>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-primer-canvas-subtle dark:hover:bg-primer-dark-canvas-subtle transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-primer-fg-default" />
              ) : (
                <Sun className="w-5 h-5 text-primer-dark-fg-default" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="border-t border-primer-border-default dark:border-primer-dark-border-default mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-primer-fg-muted dark:text-primer-dark-fg-muted">
            GitHub Certification Hub © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
