import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface CertificationCardProps {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  id,
  title,
  description,
  icon,
  color,
}) => {
  return (
    <Link
      to={`/certification/${id}`}
      className="group block p-6 bg-primer-canvas-default dark:bg-primer-dark-canvas-subtle border border-primer-border-default dark:border-primer-dark-border-default rounded-lg hover:border-primer-accent-fg dark:hover:border-primer-accent-fg transition-all hover:shadow-lg"
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${color}`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-primer-fg-default dark:text-primer-dark-fg-default mb-2 group-hover:text-primer-accent-fg">
            {title}
          </h3>
          <p className="text-primer-fg-muted dark:text-primer-dark-fg-muted mb-4">
            {description}
          </p>
          <div className="flex items-center text-primer-accent-fg font-medium">
            <span>Start Learning</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CertificationCard
