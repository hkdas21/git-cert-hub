import React, { useState } from 'react'
import { RotateCcw } from 'lucide-react'

interface Flashcard {
  term: string
  definition: string
}

interface FlashcardViewerProps {
  flashcards: Flashcard[]
}

const FlashcardViewer: React.FC<FlashcardViewerProps> = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const handleNext = () => {
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev + 1) % flashcards.length)
  }

  const handlePrevious = () => {
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length)
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  if (flashcards.length === 0) {
    return (
      <div className="text-center text-primer-fg-muted dark:text-primer-dark-fg-muted">
        No flashcards available
      </div>
    )
  }

  const currentCard = flashcards[currentIndex]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-primer-fg-muted dark:text-primer-dark-fg-muted">
          Card {currentIndex + 1} of {flashcards.length}
        </span>
        <button
          onClick={handleFlip}
          className="flex items-center space-x-2 text-primer-accent-fg hover:text-primer-accent-emphasis"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Flip Card</span>
        </button>
      </div>

      <div
        onClick={handleFlip}
        className="relative h-64 cursor-pointer perspective-1000"
      >
        <div
          className={`absolute inset-0 transition-transform duration-500 transform-style-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Front */}
          <div className="absolute inset-0 backface-hidden">
            <div className="h-full bg-primer-canvas-subtle dark:bg-primer-dark-canvas-subtle border-2 border-primer-border-default dark:border-primer-dark-border-default rounded-lg p-8 flex flex-col items-center justify-center">
              <p className="text-sm text-primer-fg-muted dark:text-primer-dark-fg-muted mb-2">
                TERM
              </p>
              <h3 className="text-2xl font-bold text-primer-fg-default dark:text-primer-dark-fg-default text-center">
                {currentCard.term}
              </h3>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <div className="h-full bg-primer-accent-subtle dark:bg-primer-accent-muted border-2 border-primer-accent-fg rounded-lg p-8 flex flex-col items-center justify-center">
              <p className="text-sm text-primer-fg-muted dark:text-primer-dark-fg-muted mb-2">
                DEFINITION
              </p>
              <p className="text-lg text-primer-fg-default dark:text-primer-dark-fg-default text-center">
                {currentCard.definition}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          className="px-6 py-3 bg-primer-canvas-subtle dark:bg-primer-dark-canvas-subtle border border-primer-border-default dark:border-primer-dark-border-default rounded-lg hover:bg-primer-canvas-inset dark:hover:bg-primer-dark-canvas-inset transition-colors"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-3 bg-primer-accent-emphasis text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default FlashcardViewer
