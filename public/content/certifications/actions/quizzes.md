# GitHub Actions Quizzes

## Quiz 1: Actions Fundamentals

**Question 1:** What file format is used for GitHub Actions workflows?

- A) JSON
- B) XML
- C) YAML
- D) TOML

**Answer:** C) YAML

**Explanation:** GitHub Actions workflows are defined using YAML (`.yml` or `.yaml`) files.

---

**Question 2:** Where should workflow files be stored?

- A) `/.github/workflows/`
- B) `/workflows/`
- C) `/.actions/`
- D) `/ci/`

**Answer:** A) `/.github/workflows/`

**Explanation:** Workflow files must be placed in the `.github/workflows/` directory of your repository.

---

## Quiz 2: Workflow Components

**Question 3:** What is a runner in GitHub Actions?

- A) A person who executes code
- B) A server that executes workflows
- C) A type of workflow
- D) A GitHub employee

**Answer:** B) A server that executes workflows

**Explanation:** A runner is a server (GitHub-hosted or self-hosted) that runs your workflow jobs.

---

**Question 4:** Which event trigger runs a workflow on a schedule?

- A) `cron`
- B) `schedule`
- C) `timer`
- D) `periodic`

**Answer:** B) `schedule`

**Explanation:** The `schedule` event with cron syntax triggers workflows at specified times.

---

## Quiz 3: Advanced Concepts

**Question 5:** How do you access a secret in a workflow?

- A) `${{ env.SECRET_NAME }}`
- B) `${{ secrets.SECRET_NAME }}`
- C) `${{ vars.SECRET_NAME }}`
- D) `${{ github.SECRET_NAME }}`

**Answer:** B) `${{ secrets.SECRET_NAME }}`

**Explanation:** Secrets are accessed using the `secrets` context in GitHub Actions.

---

**Question 6:** What does a matrix strategy do?

- A) Encrypts data
- B) Runs jobs in parallel with different configurations
- C) Creates a visual grid
- D) Manages dependencies

**Answer:** B) Runs jobs in parallel with different configurations

**Explanation:** Matrix strategies allow you to run jobs with multiple configurations simultaneously.
