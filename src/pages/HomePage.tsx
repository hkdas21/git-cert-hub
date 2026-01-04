import React, { useEffect, useState } from 'react'
import { BookOpen, Award, GitBranch, Shield } from 'lucide-react'
import AuthorBio from '../components/AuthorBio'
import CertificationCard from '../components/CertificationCard'

interface AuthorData {
  name: string
  image: string
  bio: string
  github?: string
  linkedin?: string
  twitter?: string
  email?: string
}

interface CertificationTrack {
  id: string
  title: string
  description: string
}

const HomePage: React.FC = () => {
  const [authorData, setAuthorData] = useState<AuthorData | null>(null)
  const [tracks, setTracks] = useState<CertificationTrack[]>([])

  useEffect(() => {
    // Load author bio
    fetch('/content/bio.md')
      .then(res => res.text())
      .then(_text => {
        // Parse frontmatter (simplified - in production, use gray-matter)
        const data: AuthorData = {
          name: 'GitHub Expert',
          image: 'https://via.placeholder.com/150',
          bio: 'Passionate about helping developers master GitHub and achieve their certification goals.',
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
          email: 'contact@example.com'
        }
        setAuthorData(data)
      })
      .catch(() => {
        // Default data if file not found
        setAuthorData({
          name: 'GitHub Expert',
          image: 'https://via.placeholder.com/150',
          bio: 'Passionate about helping developers master GitHub and achieve their certification goals.',
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          twitter: 'https://twitter.com',
          email: 'contact@example.com'
        })
      })

    // Load certification tracks
    fetch('/content/tracks.json')
      .then(res => res.json())
      .then(data => setTracks(data))
      .catch(() => {
        // Default tracks if file not found
        setTracks([
          {
            id: 'foundations',
            title: 'GitHub Foundations',
            description: 'Master the fundamentals of Git, GitHub, and collaborative development workflows.'
          },
          {
            id: 'actions',
            title: 'GitHub Actions',
            description: 'Learn to automate your workflow with CI/CD pipelines and GitHub Actions.'
          },
          {
            id: 'security',
            title: 'GitHub Advanced Security',
            description: 'Discover security best practices and tools to keep your code safe.'
          },
          {
            id: 'admin',
            title: 'GitHub Administration',
            description: 'Gain expertise in managing GitHub Enterprise and organization settings.'
          }
        ])
      })
  }, [])

  const getIcon = (trackId: string) => {
    switch (trackId) {
      case 'foundations':
        return <BookOpen className="w-6 h-6 text-white" />
      case 'actions':
        return <GitBranch className="w-6 h-6 text-white" />
      case 'security':
        return <Shield className="w-6 h-6 text-white" />
      case 'admin':
        return <Award className="w-6 h-6 text-white" />
      default:
        return <BookOpen className="w-6 h-6 text-white" />
    }
  }

  const getColor = (trackId: string) => {
    switch (trackId) {
      case 'foundations':
        return 'bg-blue-500'
      case 'actions':
        return 'bg-green-500'
      case 'security':
        return 'bg-red-500'
      case 'admin':
        return 'bg-purple-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primer-fg-default dark:text-primer-dark-fg-default mb-4">
          Welcome to GitHub Certification Hub
        </h1>
        <p className="text-xl text-primer-fg-muted dark:text-primer-dark-fg-muted">
          Your comprehensive learning portal for mastering GitHub Certifications
        </p>
      </div>

      {authorData && <AuthorBio {...authorData} />}

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-primer-fg-default dark:text-primer-dark-fg-default mb-6">
          Certification Tracks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map(track => (
            <CertificationCard
              key={track.id}
              id={track.id}
              title={track.title}
              description={track.description}
              icon={getIcon(track.id)}
              color={getColor(track.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
