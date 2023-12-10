# Mapup Assessment
## Overview

The Project is a streamlined Node.js web application with a comprehensive development and deployment workflow. This project is designed to showcase best practices in web development, containerization with Docker, and continuous integration/continuous deployment (CI/CD) using GitHub Actions

## Key Features

## Features

1. **Express.js Web Application:**
   The project establishes a minimalistic Express.js web application that employs dynamic rendering with EJS templates. It includes dedicated routes for the home and about pages.

2. **Dockerized Architecture:**
   The application is containerized using a Dockerfile optimized for production. It takes advantage of the official Node.js 18 Alpine image, ensuring a lightweight and efficient container.

3. **AWS Elastic Container Registry (ECR) Integration:**
   Seamless integration with AWS ECR facilitates efficient and secure storage of Docker images. The setup encompasses creating an ECR repository and configuring IAM roles and policies for access management.

4. **GitHub Actions Workflow:**
   A robust CI/CD pipeline is implemented using GitHub Actions. The workflow triggers on push or pull request events, automating builds and deployments. The Docker image undergoes the processes of building, tagging, and pushing to AWS ECR.

5. **Security Best Practices:**
   The project prioritizes security best practices by utilizing GitHub Secrets for storing sensitive credentials. This approach ensures the safeguarding of critical information, such as AWS credentials.

6. **Comprehensive Testing:**
   The project incorporates a testing suite consisting of Mocha, Chai, and Supertest. A sample test is included to validate the correctness of the home page route.

7. **Documentation:**
   A detailed README.md file provides users with guidance on local project setup, comprehension of folder structures, Dockerfile configurations, AWS ECR setup, GitHub Actions workflow, and security measures.

## Running Project Locally
1. Clone the repository locally.

    ```
    git clone https://github.com/pmdsuhail/express-docker-ecr.git
    cd express-docker-ecr
    npm install
    npm start
    ```
The application will be accessible on http://localhost:8080

If you want to change the port, duplicate the file `.env.example` and rename it to `.env` and customize the port accordingly. For e.g.

```
# File: .env

APP_PORT=3000
```
