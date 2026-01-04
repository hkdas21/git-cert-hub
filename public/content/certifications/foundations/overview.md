# GitHub Foundations Certification

Welcome to the GitHub Foundations certification track! This comprehensive guide will help you master the essential concepts and skills needed to pass the GitHub Foundations certification exam.

## Table of Contents

- [Module 1: Introduction to Git](#module-1-introduction-to-git)
- [Module 2: GitHub Essentials](#module-2-github-essentials)
- [Module 3: Collaboration Workflows](#module-3-collaboration-workflows)
- [Module 4: GitHub Features](#module-4-github-features)

## Module 1: Introduction to Git

### What is Git?

Git is a distributed version control system that allows multiple developers to work on a project simultaneously without interfering with each other's work.

### Key Concepts

- **Repository**: A storage location for your project
- **Commit**: A snapshot of your project at a specific point in time
- **Branch**: A parallel version of your repository
- **Merge**: Combining changes from different branches

### Basic Git Commands

```bash
# Initialize a repository
git init

# Clone a repository
git clone <url>

# Check status
git status

# Stage changes
git add <file>

# Commit changes
git commit -m "Your message"

# Push to remote
git push origin main
```

## Module 2: GitHub Essentials

### Creating a Repository

Learn how to create and manage repositories on GitHub:

1. Click the "+" icon in the top right
2. Select "New repository"
3. Fill in repository details
4. Choose public or private
5. Initialize with README (optional)

### README Files

A good README should include:

- Project title and description
- Installation instructions
- Usage examples
- Contributing guidelines
- License information

## Module 3: Collaboration Workflows

### Pull Requests

Pull requests are the heart of collaboration on GitHub:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Push to your fork
5. Open a pull request
6. Discuss and review
7. Merge when approved

### Code Review Best Practices

- Review code promptly
- Be constructive and kind
- Ask questions instead of making demands
- Suggest specific improvements
- Approve when satisfied

## Module 4: GitHub Features

### Issues

Track bugs, enhancements, and tasks:

- Create detailed issue descriptions
- Use labels for organization
- Assign to team members
- Link to pull requests
- Close when resolved

### Projects

Organize and prioritize work:

- **Kanban boards**: Visualize workflow
- **Task tracking**: Monitor progress
- **Milestones**: Group related issues
- **Automation**: Auto-move cards

### GitHub Actions (Preview)

Automate your workflow with CI/CD:

```yaml
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: npm test
```

## Practice Exercises

1. Create a new repository
2. Add a README with proper formatting
3. Create a branch and make changes
4. Open a pull request
5. Review and merge your PR

## Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com)
- [GitHub Learning Lab](https://lab.github.com)

---

**Ready to test your knowledge?** Head to the Quizzes tab!
