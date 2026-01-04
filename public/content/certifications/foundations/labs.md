# Hands-On Labs: GitHub Foundations

## Lab 1: Getting Started with Git and GitHub

### Objective
Learn the basics of Git and GitHub by creating your first repository.

### Prerequisites
- Git installed on your computer
- GitHub account created
- Basic command line knowledge

### Steps

#### 1. Configure Git

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email
git config --global user.email "your.email@example.com"

# Verify settings
git config --list
```

#### 2. Create a Local Repository

```bash
# Create a new directory
mkdir my-first-repo
cd my-first-repo

# Initialize Git
git init

# Create a README file
echo "# My First Repository" > README.md

# Check status
git status
```

#### 3. Make Your First Commit

```bash
# Stage the file
git add README.md

# Commit with a message
git commit -m "Initial commit: Add README"

# View commit history
git log
```

#### 4. Connect to GitHub

1. Go to GitHub and create a new repository
2. Copy the repository URL
3. Add remote and push:

```bash
# Add remote repository
git remote add origin https://github.com/username/my-first-repo.git

# Push to GitHub
git push -u origin main
```

### Expected Outcome
✅ Local repository created  
✅ First commit made  
✅ Code pushed to GitHub  

---

## Lab 2: Branching and Merging

### Objective
Master Git branching and merging workflows.

### Steps

#### 1. Create a New Branch

```bash
# Create and switch to new branch
git checkout -b feature/add-description

# Verify current branch
git branch
```

#### 2. Make Changes

```bash
# Edit README.md
echo "\n## Description\nThis is my learning project." >> README.md

# Stage and commit
git add README.md
git commit -m "Add project description"
```

#### 3. Merge Changes

```bash
# Switch back to main branch
git checkout main

# Merge feature branch
git merge feature/add-description

# Push changes
git push origin main
```

#### 4. Delete Feature Branch

```bash
# Delete local branch
git branch -d feature/add-description

# Delete remote branch (if pushed)
git push origin --delete feature/add-description
```

### Expected Outcome
✅ Feature branch created  
✅ Changes made on feature branch  
✅ Branch merged into main  
✅ Feature branch deleted  

---

## Lab 3: Collaborative Workflow

### Objective
Practice collaborating with others using pull requests.

### Steps

#### 1. Fork a Repository

1. Navigate to a repository on GitHub
2. Click the "Fork" button
3. Clone your fork locally:

```bash
git clone https://github.com/YOUR-USERNAME/REPO-NAME.git
cd REPO-NAME
```

#### 2. Create a Feature Branch

```bash
# Create branch for your changes
git checkout -b fix/typo-in-readme

# Add upstream remote
git remote add upstream https://github.com/ORIGINAL-OWNER/REPO-NAME.git
```

#### 3. Make and Push Changes

```bash
# Make your changes
# Edit files as needed

# Commit changes
git add .
git commit -m "Fix typo in README"

# Push to your fork
git push origin fix/typo-in-readme
```

#### 4. Create Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill in PR description
4. Click "Create pull request"

### Expected Outcome
✅ Repository forked  
✅ Changes made on feature branch  
✅ Pull request created  
✅ Ready for review  

---

## Lab 4: Working with Issues

### Objective
Learn to track work using GitHub Issues.

### Steps

#### 1. Create an Issue

1. Go to your repository on GitHub
2. Click "Issues" tab
3. Click "New issue"
4. Fill in:
   - **Title**: "Add installation instructions"
   - **Description**: Detailed description
   - **Labels**: "documentation", "enhancement"
   - **Assignee**: Assign to yourself

#### 2. Link Issue to Commit

```bash
# Create branch referencing issue number
git checkout -b docs/installation-#1

# Make changes
echo "\n## Installation\npip install package-name" >> README.md

# Commit with issue reference
git commit -m "Add installation instructions (closes #1)"

# Push changes
git push origin docs/installation-#1
```

#### 3. Close Issue with PR

1. Create pull request
2. In PR description, add: "Closes #1"
3. Merge PR
4. Verify issue auto-closed

### Expected Outcome
✅ Issue created and labeled  
✅ Branch linked to issue  
✅ PR created with issue reference  
✅ Issue auto-closed on merge  

---

## Bonus Challenge

Create a complete workflow:

1. Create an issue for a new feature
2. Create a branch from the issue
3. Implement the feature with multiple commits
4. Push branch and create PR
5. Review your own code
6. Merge and delete branch
7. Verify issue is closed

**Congratulations!** You've completed the GitHub Foundations labs. Practice these workflows regularly to master Git and GitHub.
