export interface AuthorBio {
  name: string
  image: string
  bio: string
  github?: string
  linkedin?: string
  twitter?: string
  email?: string
}

export interface CertificationTrack {
  id: string
  title: string
  description: string
}

export interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface Flashcard {
  term: string
  definition: string
}

export interface CertificationContent {
  overview: string
  quizzes: QuizQuestion[]
  labs: string
  flashcards: Flashcard[]
}
