import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Home, BookOpen, FileQuestion, FlaskConical, Layers } from 'lucide-react'
import MarkdownRenderer from '../components/MarkdownRenderer'
import QuizEngine from '../components/QuizEngine'
import FlashcardViewer from '../components/FlashcardViewer'

type TabType = 'modules' | 'quizzes' | 'labs' | 'flashcards'

const CertificationPage: React.FC = () => {
  const { trackId } = useParams<{ trackId: string }>()
  const [activeTab, setActiveTab] = useState<TabType>('modules')
  const [modulesContent, setModulesContent] = useState('')
  const [quizzes, setQuizzes] = useState<any[]>([])
  const [labsContent, setLabsContent] = useState('')
  const [flashcards, setFlashcards] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    
    // Load modules
    fetch(`/content/certifications/${trackId}/overview.md`)
      .then(res => res.text())
      .then(text => setModulesContent(text))
      .catch(() => setModulesContent(`# ${trackId?.toUpperCase()} Certification\n\nWelcome to the ${trackId} certification track!\n\n## Module 1: Introduction\n\nThis is an introduction to ${trackId}.\n\n## Module 2: Core Concepts\n\nLearn the core concepts and principles.\n\n## Module 3: Advanced Topics\n\nDive deeper into advanced topics and best practices.`))

    // Load quizzes
    fetch(`/content/certifications/${trackId}/quizzes.md`)
      .then(res => res.text())
      .then(_text => {
        // Parse quiz data (simplified)
        const sampleQuizzes = [
          {
            question: `What is the primary purpose of ${trackId}?`,
            options: ['Option A', 'Option B', 'Option C', 'Option D'],
            correctAnswer: 0,
            explanation: 'This is the correct answer because...'
          },
          {
            question: `Which of the following is a best practice in ${trackId}?`,
            options: ['Practice 1', 'Practice 2', 'Practice 3', 'Practice 4'],
            correctAnswer: 1,
            explanation: 'This practice is recommended because...'
          }
        ]
        setQuizzes(sampleQuizzes)
      })
      .catch(() => {
        setQuizzes([
          {
            question: `What is the primary purpose of ${trackId}?`,
            options: ['Option A', 'Option B', 'Option C', 'Option D'],
            correctAnswer: 0,
            explanation: 'This is the correct answer because...'
          }
        ])
      })

    // Load labs
    fetch(`/content/certifications/${trackId}/labs.md`)
      .then(res => res.text())
      .then(text => setLabsContent(text))
      .catch(() => setLabsContent(`# Hands-On Labs\n\n## Lab 1: Getting Started\n\n### Prerequisites\n- Basic understanding of ${trackId}\n- GitHub account\n\n### Steps\n\n1. Clone the repository\n\`\`\`bash\ngit clone https://github.com/example/repo.git\n\`\`\`\n\n2. Navigate to the project\n\`\`\`bash\ncd repo\n\`\`\`\n\n3. Follow the instructions in the README\n\n## Lab 2: Advanced Configuration\n\nConfigure advanced settings for ${trackId}.`))

    // Load flashcards
    fetch(`/content/certifications/${trackId}/flashcards.md`)
      .then(res => res.text())
      .then(_text => {
        // Parse flashcard data (simplified)
        const sampleCards = [
          { term: 'Repository', definition: 'A storage location for your project files and their revision history.' },
          { term: 'Commit', definition: 'A snapshot of your repository at a specific point in time.' },
          { term: 'Branch', definition: 'A parallel version of your repository that diverges from the main working project.' },
          { term: 'Pull Request', definition: 'A method of submitting contributions to a project.' }
        ]
        setFlashcards(sampleCards)
      })
      .catch(() => {
        setFlashcards([
          { term: 'Repository', definition: 'A storage location for your project files and their revision history.' },
          { term: 'Commit', definition: 'A snapshot of your repository at a specific point in time.' }
        ])
      })

    setLoading(false)
  }, [trackId])

  const tabs = [
    { id: 'modules' as TabType, label: 'Modules', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'quizzes' as TabType, label: 'Quizzes', icon: <FileQuestion className="w-4 h-4" /> },
    { id: 'labs' as TabType, label: 'Labs', icon: <FlaskConical className="w-4 h-4" /> },
    { id: 'flashcards' as TabType, label: 'Flashcards', icon: <Layers className="w-4 h-4" /> }
  ]

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-primer-fg-muted dark:text-primer-dark-fg-muted mb-6">
        <Link to="/" className="hover:text-primer-accent-fg">
          <Home className="w-4 h-4" />
        </Link>
        <span>/</span>
        <span className="text-primer-fg-default dark:text-primer-dark-fg-default capitalize">
          {trackId}
        </span>
      </nav>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-primer-fg-default dark:text-primer-dark-fg-default mb-8 capitalize">
        {trackId} Certification
      </h1>

      {/* Tabs */}
      <div className="border-b border-primer-border-default dark:border-primer-dark-border-default mb-8">
        <div className="flex space-x-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 pb-3 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-primer-accent-fg text-primer-accent-fg'
                  : 'border-transparent text-primer-fg-muted dark:text-primer-dark-fg-muted hover:text-primer-fg-default dark:hover:text-primer-dark-fg-default'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="bg-primer-canvas-default dark:bg-primer-dark-canvas-subtle border border-primer-border-default dark:border-primer-dark-border-default rounded-lg p-8">
        {loading ? (
          <div className="text-center text-primer-fg-muted dark:text-primer-dark-fg-muted">
            Loading...
          </div>
        ) : (
          <>
            {activeTab === 'modules' && <MarkdownRenderer content={modulesContent} />}
            {activeTab === 'quizzes' && <QuizEngine questions={quizzes} />}
            {activeTab === 'labs' && <MarkdownRenderer content={labsContent} />}
            {activeTab === 'flashcards' && <FlashcardViewer flashcards={flashcards} />}
          </>
        )}
      </div>
    </div>
  )
}

export default CertificationPage
