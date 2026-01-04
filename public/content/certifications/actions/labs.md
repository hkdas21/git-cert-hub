# Hands-On Labs: GitHub Actions

## Lab 1: Create Your First Workflow

### Objective
Create a basic CI workflow that runs tests on every push.

### Steps

#### 1. Create Workflow File

```bash
# In your repository
mkdir -p .github/workflows
cd .github/workflows
```

#### 2. Create `ci.yml`

```yaml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run linter
      run: npm run lint
      
    - name: Run tests
      run: npm test
      
    - name: Upload coverage
      uses: actions/upload-artifact@v3
      with:
        name: coverage-report
        path: coverage/
```

#### 3. Commit and Push

```bash
git add .github/workflows/ci.yml
git commit -m "Add CI workflow"
git push origin main
```

#### 4. Verify

1. Go to your repository on GitHub
2. Click "Actions" tab
3. See your workflow running
4. Check the results

### Expected Outcome
✅ Workflow file created  
✅ Workflow runs on push  
✅ All jobs complete successfully  

---

## Lab 2: Multi-Platform Testing

### Objective
Test your code across multiple operating systems and Node.js versions.

### Create `matrix-test.yml`

```yaml
name: Matrix Testing

on: [push, pull_request]

jobs:
  test:
    runs-on: ${{ matrix.os }}
    
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node-version: [14, 16, 18]
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Display environment
      run: |
        echo "OS: ${{ matrix.os }}"
        echo "Node: ${{ matrix.node-version }}"
        node --version
        npm --version
```

### Expected Outcome
✅ Tests run on 3 operating systems  
✅ Tests run on 3 Node.js versions  
✅ Total of 9 job combinations  

---

## Lab 3: Automated Deployment

### Objective
Deploy your application to GitHub Pages when code is pushed to main.

### Create `deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v2
      with:
        path: ./dist
  
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    
    runs-on: ubuntu-latest
    needs: build
    
    steps:
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v2
```

### Configuration

1. Go to Settings > Pages
2. Select "GitHub Actions" as source
3. Push to main branch
4. Check deployment status

### Expected Outcome
✅ Code built successfully  
✅ Deployed to GitHub Pages  
✅ Site accessible via URL  

---

## Lab 4: Custom Composite Action

### Objective
Create a reusable composite action for setting up your project.

### Create Action Directory

```bash
mkdir -p .github/actions/setup-project
cd .github/actions/setup-project
```

### Create `action.yml`

```yaml
name: 'Setup Project'
description: 'Set up Node.js and install dependencies'

inputs:
  node-version:
    description: 'Node.js version to use'
    required: false
    default: '18'

runs:
  using: 'composite'
  steps:
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ inputs.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
      shell: bash
    
    - name: Display versions
      run: |
        echo "Node version: $(node --version)"
        echo "NPM version: $(npm --version)"
      shell: bash
```

### Use Custom Action

```yaml
name: Test Custom Action

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup project
      uses: ./.github/actions/setup-project
      with:
        node-version: '18'
    
    - name: Run tests
      run: npm test
```

### Expected Outcome
✅ Custom action created  
✅ Action reusable across workflows  
✅ Simplifies workflow files  

---

## Lab 5: Conditional Deployment

### Objective
Deploy only when tests pass and branch is main.

### Create `conditional-deploy.yml`

```yaml
name: Conditional Deploy

on:
  push:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm ci
    - run: npm test
  
  deploy-staging:
    needs: test
    if: github.ref == 'refs/heads/develop'
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    - name: Deploy to Staging
      run: echo "Deploying to staging..."
  
  deploy-production:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    
    environment:
      name: production
      url: https://your-app.com
    
    steps:
    - uses: actions/checkout@v3
    - name: Deploy to Production
      run: echo "Deploying to production..."
```

### Expected Outcome
✅ Tests run on both branches  
✅ Staging deploy only on develop  
✅ Production deploy only on main  
✅ Deploys only after tests pass  

---

## Bonus Challenge

Create a complete CI/CD pipeline that:

1. Runs tests and linting
2. Builds the application
3. Creates a Docker image
4. Pushes to container registry
5. Deploys to multiple environments
6. Sends notifications on success/failure

**Congratulations!** You've mastered GitHub Actions fundamentals!
