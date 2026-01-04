# GitHub Actions Flashcards

## Core Concepts

**Term:** Workflow  
**Definition:** An automated process defined in a YAML file that runs one or more jobs based on events in your repository.

---

**Term:** Event  
**Definition:** A specific activity that triggers a workflow run, such as push, pull request, or schedule.

---

**Term:** Job  
**Definition:** A set of steps that execute on the same runner, running in parallel with other jobs by default.

---

**Term:** Step  
**Definition:** An individual task within a job that can run commands or actions.

---

**Term:** Action  
**Definition:** A reusable unit of code that performs a specific task, either from the marketplace or custom-built.

---

**Term:** Runner  
**Definition:** A server that runs your workflows, either GitHub-hosted or self-hosted.

---

## Workflow Syntax

**Term:** on  
**Definition:** The workflow key that specifies which events trigger the workflow to run.

---

**Term:** jobs  
**Definition:** The workflow section that contains one or more jobs to be executed.

---

**Term:** runs-on  
**Definition:** Specifies the type of runner to use for a job (e.g., ubuntu-latest, windows-latest).

---

**Term:** steps  
**Definition:** A sequence of tasks that run commands or actions within a job.

---

**Term:** uses  
**Definition:** Keyword to specify an action to run as part of a step.

---

**Term:** run  
**Definition:** Keyword to execute shell commands directly in a step.

---

## Advanced Features

**Term:** Matrix Strategy  
**Definition:** Allows you to run jobs with multiple configurations simultaneously, testing across different versions or platforms.

---

**Term:** Secrets  
**Definition:** Encrypted environment variables stored in GitHub that can be used in workflows for sensitive data.

---

**Term:** Artifacts  
**Definition:** Files produced by a workflow that can be uploaded, downloaded, and shared between jobs.

---

**Term:** Cache  
**Definition:** A way to store dependencies and build outputs to speed up workflow execution.

---

**Term:** Environment  
**Definition:** A deployment target with protection rules and secrets, such as production or staging.

---

**Term:** Concurrency  
**Definition:** Controls how many workflow runs can execute simultaneously or sequentially.

---

## Triggers

**Term:** push  
**Definition:** Triggers a workflow when commits are pushed to specified branches.

---

**Term:** pull_request  
**Definition:** Triggers a workflow when pull request events occur (opened, synchronized, reopened).

---

**Term:** schedule  
**Definition:** Triggers a workflow at scheduled times using cron syntax.

---

**Term:** workflow_dispatch  
**Definition:** Allows manual triggering of a workflow from the GitHub UI or API.

---

**Term:** repository_dispatch  
**Definition:** Triggers a workflow via webhook, allowing external events to start workflows.

---

**Term:** release  
**Definition:** Triggers a workflow when a release is published, created, or edited.

---

## Contexts

**Term:** github context  
**Definition:** Contains information about the workflow run, repository, and event that triggered it.

---

**Term:** secrets context  
**Definition:** Provides access to secrets defined in the repository or organization.

---

**Term:** env context  
**Definition:** Contains environment variables available to steps in a workflow.

---

**Term:** matrix context  
**Definition:** Provides access to matrix parameters configured for the current job.

---

**Term:** needs context  
**Definition:** Contains outputs from all jobs that the current job depends on.

---

**Term:** inputs context  
**Definition:** Contains input parameters for reusable workflows or manually triggered workflows.

---

## Actions Types

**Term:** JavaScript Action  
**Definition:** An action written in JavaScript/TypeScript that runs directly on the runner.

---

**Term:** Docker Container Action  
**Definition:** An action packaged as a Docker container with specific environment and dependencies.

---

**Term:** Composite Action  
**Definition:** An action that combines multiple workflow steps into a single reusable action.

---

**Term:** Marketplace Action  
**Definition:** Pre-built actions available in the GitHub Actions Marketplace for common tasks.

---

## Best Practices

**Term:** Action Pinning  
**Definition:** Referencing actions by specific commit SHA for security and reproducibility.

---

**Term:** Workflow Status Badge  
**Definition:** An image that displays the current status of a workflow, embeddable in README files.

---

**Term:** Job Dependencies  
**Definition:** Using the `needs` keyword to control job execution order and create dependencies.

---

**Term:** Conditional Execution  
**Definition:** Using `if` conditions to control when jobs or steps run based on expressions.

---

**Term:** Timeout  
**Definition:** Maximum time a job or step can run before being automatically cancelled.

---

**Term:** Continue on Error  
**Definition:** Allows a workflow to continue running even if a specific step fails.
