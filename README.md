# Elevate Labs DevOps Internship: Task 1

## Objective
To automate code deployment by setting up a Continuous Integration and Continuous Deployment (CI/CD) pipeline that builds, tests, and deploys a Node.js web application.

## Tools Utilized
* **Version Control:** GitHub
* **CI/CD Automation:** GitHub Actions
* **Containerization:** Docker & DockerHub
* **Backend Framework:** Node.js (Express)
* **Testing:** Jest

## Methodology & Execution

* **Application Setup:** Engineered a custom "System Pulse API" in Node.js designed to monitor and return server health metrics dynamically.
* **Containerization:** Authored a `Dockerfile` utilizing a lightweight `node:20-alpine` base image to securely package the application and its dependencies for consistent deployment.
* **Automated Testing:** Integrated Jest to perform real unit testing, ensuring the server initializes correctly without crashing before any deployment steps are triggered.
* **Pipeline Configuration:** Developed a GitHub Actions workflow (`.github/workflows/main.yml`) configured to automatically trigger the CI/CD process upon any push to the `main` branch.
* **Secure Deployment:** Configured GitHub Repository Secrets (`DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN`) to safely authenticate and automate the Docker build-and-push process to DockerHub.

## Key Learnings & Debugging
During the automated testing phase, a cross-platform execution error occurred (`sh: 1: jest: Permission denied`) because the Linux runner could not execute the Windows-generated Jest binary shim. 

**Resolution:** Instead of relying on the executable shim, I debugged the workflow by updating the `package.json` test script to invoke Jest directly through Node (`node ./node_modules/jest/bin/jest.js`). This made the CI execution deterministic across different OS runner environments and successfully passed the pipeline.