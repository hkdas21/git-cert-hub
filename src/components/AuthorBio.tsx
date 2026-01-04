import React from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

interface AuthorBioProps {
  name: string
  image: string
  bio: string
  github?: string
  linkedin?: string
  twitter?: string
  email?: string
}

const AuthorBio: React.FC<AuthorBioProps> = ({
  name,
  image,
  bio,
  github,
  linkedin,
  twitter,
  email,
}) => {
  return (
    <div className="bg-primer-canvas-subtle dark:bg-primer-dark-canvas-subtle border border-primer-border-default dark:border-primer-dark-border-default rounded-lg p-8 mb-12">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full object-cover border-4 border-primer-canvas-default dark:border-primer-dark-canvas-default"
        />
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-primer-fg-default dark:text-primer-dark-fg-default mb-2">
            {name}
          </h2>
          <p className="text-primer-fg-muted dark:text-primer-dark-fg-muted mb-4">
            {bio}
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primer-fg-muted dark:text-primer-dark-fg-muted hover:text-primer-accent-fg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primer-fg-muted dark:text-primer-dark-fg-muted hover:text-primer-accent-fg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primer-fg-muted dark:text-primer-dark-fg-muted hover:text-primer-accent-fg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="text-primer-fg-muted dark:text-primer-dark-fg-muted hover:text-primer-accent-fg transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorBio
