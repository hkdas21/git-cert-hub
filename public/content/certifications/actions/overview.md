# GitHub Actions Certification

Master workflow automation, CI/CD pipelines, and GitHub Actions to streamline your development process.

## Module 1: Introduction to GitHub Actions

### What are GitHub Actions?

GitHub Actions is a powerful automation platform that allows you to build, test, and deploy your code right from GitHub. You can create custom workflows that respond to any GitHub event.

### Key Concepts

- **Workflow**: An automated process defined in YAML
- **Event**: A trigger that starts a workflow
- **Job**: A set of steps that execute on the same runner
- **Step**: An individual task within a job
- **Action**: A reusable unit of code
- **Runner**: A server that runs your workflows

## Module 2: Creating Your First Workflow

### Basic Workflow Structure

```yaml
name: CI Pipeline
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
```

### Workflow Triggers

- `push`: When code is pushed
- `pull_request`: When a PR is opened or updated
- `schedule`: Run on a schedule (cron)
- `workflow_dispatch`: Manual trigger
- `release`: When a release is published

## Module 3: Advanced Actions

### Using Secrets

```yaml
steps:
  - name: Deploy
    env:
      API_KEY: ${{ secrets.API_KEY }}
    run: ./deploy.sh
```

### Matrix Builds

Test across multiple versions:

```yaml
strategy:
  matrix:
    node-version: [14, 16, 18]
    os: [ubuntu-latest, windows-latest, macos-latest]
```

### Conditional Execution

```yaml
steps:
  - name: Deploy to production
    if: github.ref == 'refs/heads/main'
    run: npm run deploy
```

## Module 4: Marketplace Actions

### Popular Actions

1. **actions/checkout**: Check out repository code
2. **actions/setup-node**: Set up Node.js
3. **actions/upload-artifact**: Upload build artifacts
4. **actions/download-artifact**: Download artifacts
5. **peter-evans/create-pull-request**: Automate PR creation

### Creating Custom Actions

Three types of actions:
- **Docker container actions**: Run in Docker
- **JavaScript actions**: Run on the runner
- **Composite actions**: Combine multiple steps

## Module 5: CI/CD Workflows

### Continuous Integration

```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run tests
        run: npm test
      - name: Lint code
        run: npm run lint
      - name: Check formatting
        run: npm run format:check
```

### Continuous Deployment

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build
        run: npm run build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Module 6: Best Practices

### Performance Optimization

- Cache dependencies
- Use appropriate runners
- Parallelize jobs
- Set appropriate timeouts

### Security

- Use secrets for sensitive data
- Pin actions to specific versions
- Review third-party actions
- Use CODEOWNERS for workflow approval

### Monitoring

- Set up status badges
- Use notifications
- Monitor workflow runs
- Review logs regularly

## Practice Exercises

1. Create a CI workflow for your project
2. Add matrix testing across multiple versions
3. Implement conditional deployment
4. Create a custom action
5. Set up a scheduled workflow

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Actions Marketplace](https://github.com/marketplace?type=actions)
- [Awesome Actions](https://github.com/sdras/awesome-actions)

Ready to test your Actions knowledge? Head to the Quizzes tab!
