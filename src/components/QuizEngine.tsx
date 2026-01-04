import React, { useState } from 'react'
import { Check, X } from 'lucide-react'

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface QuizEngineProps {
  questions: QuizQuestion[]
}

const QuizEngine: React.FC<QuizEngineProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
  }

  if (showResult) {
    return (
      <div className="text-center p-8">
        <h2 className="text-3xl font-bold text-primer-fg-default dark:text-primer-dark-fg-default mb-4">
          Quiz Completed!
        </h2>
        <p className="text-xl text-primer-fg-muted dark:text-primer-dark-fg-muted mb-6">
          Your Score: {score} / {questions.length}
        </p>
        <button
          onClick={resetQuiz}
          className="px-6 py-3 bg-primer-accent-emphasis text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Retry Quiz
        </button>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-primer-fg-muted dark:text-primer-dark-fg-muted">
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <span className="text-primer-fg-muted dark:text-primer-dark-fg-muted">
          Score: {score}
        </span>
      </div>

      <div className="bg-primer-canvas-subtle dark:bg-primer-dark-canvas-subtle border border-primer-border-default dark:border-primer-dark-border-default rounded-lg p-6">
        <h3 className="text-xl font-semibold text-primer-fg-default dark:text-primer-dark-fg-default mb-6">
          {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                selectedAnswer === index
                  ? 'border-primer-accent-fg bg-primer-accent-subtle dark:bg-primer-accent-muted'
                  : 'border-primer-border-default dark:border-primer-dark-border-default hover:border-primer-accent-fg'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-primer-fg-default dark:text-primer-dark-fg-default">
                  {option}
                </span>
                {selectedAnswer === index && (
                  selectedAnswer === question.correctAnswer ? (
                    <Check className="w-5 h-5 text-primer-success-fg" />
                  ) : (
                    <X className="w-5 h-5 text-primer-danger-fg" />
                  )
                )}
              </div>
            </button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <div className={`mt-6 p-4 rounded-lg ${
            selectedAnswer === question.correctAnswer
              ? 'bg-primer-success-subtle dark:bg-primer-success-muted'
              : 'bg-primer-danger-subtle dark:bg-primer-danger-muted'
          }`}>
            <p className="text-primer-fg-default dark:text-primer-dark-fg-default">
              {question.explanation}
            </p>
          </div>
        )}
      </div>

      <button
        onClick={handleNext}
        disabled={selectedAnswer === null}
        className="w-full px-6 py-3 bg-primer-accent-emphasis text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
      </button>
    </div>
  )
}

export default QuizEngine
