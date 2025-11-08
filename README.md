# 🚀 DevOps Web App

<!-- BADGES -->
<p>
  <img src="https://img.shields.io/badge/Node.js-18.x-green?logo=node.js" alt="Node.js Version">
  <img src="https://img.shields.io/badge/Docker-Ready-blue?logo=docker" alt="Docker Ready">
  <a href="https://github.com/NAMA_USER_GITHUB/devops-web-app/actions/workflows/ci-cd.yml">
    <img src="https://github.com/NAMA_USER_GITHUB/devops-web-app/actions/workflows/ci-cd.yml/badge.svg" alt="CI/CD Status">
  </a>
  <img src="https://img.shields.io/github/license/NAMA_USER_GITHUB/devops-web-app" alt="License">
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
    git clone https://github.com/NAMA_USER_GITHUB/devops-web-app.git
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
    docker build -t NAMA_DOCKER_HUB_ANDA/devops-web-app:latest .
    ```

2.  **Run the Docker Container**
    This command maps port 8080 on your machine to port 3000 inside the container.
    ```bash
    docker run -d -p 8080:3000 --name my-devops-app NAMA_DOCKER_HUB_ANDA/devops-web-app:latest
    ```

3.  **Open your browser**
    Navigate to [http://localhost:8080](http://localhost:8080)

---

## 📁 Project Structure
