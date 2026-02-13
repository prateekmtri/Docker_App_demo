# 🐳 Docker & CI/CD Proof of Concept (PoC)

This is a minimalist full-stack application built specifically to demonstrate **Containerization** and **Automated CI/CD Pipelines**. The focus of this project is on the DevOps architecture rather than the application's UI complexity.

## 🎯 Purpose of this Project
* **Containerization:** Writing `Dockerfile` for both frontend and backend to ensure environment consistency.
* **Docker Compose:** Orchestrating multiple containers and networks with a single command.
* **Continuous Integration (CI):** Using GitHub Actions to automatically test builds on every code push.
* **Continuous Deployment (CD):** Automating deployments to Netlify and Render upon successful CI checks.

## 🛠️ Tech Stack & Infrastructure
* **Frontend:** Next.js (Client-Side Rendering)
* **Backend:** Node.js, Express.js
* **Containerization & Orchestration:** Docker, Docker Compose
* **CI/CD Pipeline:** GitHub Actions
* **Cloud Hosting:** Netlify (Frontend) & Render (Backend)

## 🔄 CI/CD Architecture Flow
1. **Push:** Developer pushes code to the `main` branch on GitHub.
2. **CI Check:** GitHub Actions automatically triggers, setting up a Node environment to build and test the codebase.
3. **CD (Backend):** Render detects the push, builds a fresh Docker image from the backend `Dockerfile`, and deploys the API.
4. **CD (Frontend):** Netlify pulls the latest code, executes the static export build, and deploys the frontend which fetches data from the live Render API.

## 🚀 Running Locally (The Magic of Docker Compose)
You no longer need to run multiple commands or set up networks manually. To start the entire infrastructure (Frontend, Backend, and Network) on your local machine:

1. Clone this repository.
2. Run this single command in the root directory:
   ```bash
   docker-compose up -d --build
Open your browser and visit: http://localhost:3000

To stop and clean up everything, run:

