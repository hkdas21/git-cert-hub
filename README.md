# GitHub Certification Hub

A professional, high-performance web application that serves as a comprehensive learning portal for GitHub Certifications. Built with React, Vite, TypeScript, and Tailwind CSS.

![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)
![React](https://img.shields.io/badge/React-18-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## ✨ Features

- **📚 Multiple Certification Tracks**: Foundations, Actions, Security, and Administration
- **📝 Interactive Learning**: Modules, quizzes, labs, and flashcards
- **🎨 GitHub Primer Design**: Clean, professional UI inspired by GitHub
- **🌓 Dark/Light Mode**: Full theme support with smooth transitions
- **📱 Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- **⚡ Fast Performance**: Built with Vite for optimal loading speeds
- **🔄 Data-Driven**: Content managed through Markdown files
- **🧪 Quiz Engine**: Interactive multiple-choice questions with instant feedback
- **🔬 Hands-On Labs**: Step-by-step guides with syntax-highlighted code
- **🎴 Flashcards**: Flip-card UI for quick terminology review

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/git-cert-hub.git

# Navigate to project directory
cd git-cert-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
git-cert-hub/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── public/
│   └── content/                # Markdown content files
│       ├── bio.md              # Author bio
│       ├── tracks.json         # Certification tracks
│       └── certifications/     # Per-track content
│           ├── foundations/
│           ├── actions/
│           ├── security/
│           └── admin/
├── src/
│   ├── components/             # React components
│   │   ├── Layout.tsx
│   │   ├── AuthorBio.tsx
│   │   ├── CertificationCard.tsx
│   │   ├── MarkdownRenderer.tsx
│   │   ├── QuizEngine.tsx
│   │   └── FlashcardViewer.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx    # Theme management
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── CertificationPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 📝 Content Management

### Adding a New Certification Track

1. **Add track to `public/content/tracks.json`**:
```json
{
  "id": "new-track",
  "title": "New Track Title",
  "description": "Track description"
}
```

2. **Create content directory**:
```
public/content/certifications/new-track/
├── overview.md     # Main modules and content
├── quizzes.md      # Quiz questions
├── labs.md         # Hands-on labs
└── flashcards.md   # Terminology flashcards
```

3. **Write content in Markdown** with GitHub Flavored Markdown support

### Updating Author Bio

Edit `public/content/bio.md`:

```markdown
---
name: "Your Name"
image: "https://your-image-url.com/photo.jpg"
bio: "Your bio text"
github: "https://github.com/username"
linkedin: "https://linkedin.com/in/username"
twitter: "https://twitter.com/username"
email: "your@email.com"
---

# About the Author
Your extended bio content...
```

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primer: {
        // Your custom colors
      }
    }
  }
}
```

### Base URL

For custom deployment paths, update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

## 🚀 Deployment

### GitHub Pages

1. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Select "GitHub Actions" as source

2. **Update `vite.config.ts`**:
```typescript
base: '/your-repo-name/'
```

3. **Push to main branch**:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

The workflow automatically builds and deploys your site.

### Custom Domain

1. Add `CNAME` file to `public/` directory
2. Configure DNS with your provider
3. Enable HTTPS in repository settings

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

### Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Routing**: React Router DOM 6
- **Markdown**: react-markdown + gray-matter
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📖 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GitHub Actions](https://docs.github.com/actions)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- GitHub Primer Design System for inspiration
- GitHub Education team for certification programs
- Open source community for amazing tools

## 📧 Contact

For questions or feedback, please open an issue or reach out via the contact information in the author bio.

---

**Built with ❤️ for GitHub learners everywhere**
