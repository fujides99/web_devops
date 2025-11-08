# 🚀 DevOps Web App

<!-- BADGES -->
<p>
  <img src="https://img.shields.io/badge/Node.js-18.x-green?logo=node.js" alt="Node.js Version">
  <img src="https://img.shields.io/badge/Docker-Ready-blue?logo=docker" alt="Docker Ready">
  <a href="https://github.com/fujides99/devops-web-app/actions/workflows/ci-cd.yml">
    <img src="https://github.com/fujides99/devops-web-app/actions/workflows/ci-cd.yml/badge.svg" alt="CI/CD Status">
  </a>
  <img src="https://img.shields.io/github/license/fujides99/devops-web-app" alt="License">
</p>

<!-- DESKRIPSI -->
A simple yet powerful web application designed to demonstrate the core concepts of **DevOps**. This project showcases the entire lifecycle, from local development to containerization with Docker and automated deployment with GitHub Actions.

The web app itself provides a brief overview of the DevOps lifecycle and a list of popular tools in the ecosystem, fetched dynamically from a backend API.

---

## 🛠️ Tech Stack & Features

-   **Backend:** Node.js with Express.js 📦
-   **Frontend:** Vanilla HTML, CSS, and JavaScript 🎨
-   **Containerization:** Docker & Dockerfile 🐳
-   **Version Control:** Git & GitHub 📚
-   **CI/CD:** GitHub Actions for automated build and push 🔄

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your local machine:

-   [Node.js](https://nodejs.org/) (v18 or later)
-   [npm](https://www.npmjs.com/) (comes with Node.js)
-   [Docker](https://www.docker.com/products/docker-desktop)
-   [Git](https://git-scm.com/)

---

## 🏃‍♂️ Quick Start

Choose one of the methods below to get the application running.

### Method 1: Run Locally (for Development)

1.  **Clone the repository**
    ```bash
    git clone https://github.com/fujides99/devops-web-app.git
    cd devops-web-app
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the server**
    ```bash
    npm start
    ```

4.  **Open your browser**
    Navigate to [http://localhost:3000](http://localhost:3000)

---

### Method 2: Run with Docker (The DevOps Way)

This is the recommended method to experience the containerized version of the app.

1.  **Build the Docker Image**
    ```bash
    docker build -t YOUR_DOCKER/devops-web-app:latest .
    ```

2.  **Run the Docker Container**
    This command maps port 8080 on your machine to port 3000 inside the container.
    ```bash
    docker run -d -p 8080:3000 --name my-devops-app YOUR_DOCKER/devops-web-app:latest
    ```

3.  **Open your browser**
    Navigate to [http://localhost:8080](http://localhost:8080)

---

## 🤖 DevOps in Action

This project is not just *about* DevOps; it *practices* DevOps.

### 🐳 Containerization
The application is packaged into a lightweight Docker container, ensuring it runs consistently across any environment. The `Dockerfile` contains all the necessary instructions to build the image from scratch.

### 📚 Version Control
All source code is managed with Git and hosted on GitHub. This allows for tracking changes, collaborating with others, and maintaining a history of the project.

### 🔄 CI/CD (Continuous Integration/Continuous Deployment)
The `.github/workflows/ci-cd.yml` file defines an automated pipeline. With every push to the `main` branch, GitHub Actions will:
1.  **Build** the Docker image.
2.  **Push** the image to a container registry (like Docker Hub).

This automation minimizes manual errors and accelerates the deployment process.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Made with ❤️ and lots of ☕**
