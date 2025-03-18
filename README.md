# CodeSync- Collaborative Code Execution Platform

## Overview
The Collaborative Code Execution Platform is a serverless web application enabling real-time collaborative code editing and execution. It allows users to edit code simultaneously, view execution results, and interact with others in real-time. This platform is designed to be scalable, cost-efficient, and secure, utilizing AWS services and modern web technologies.

## Features
- **Real-time Collaboration**: Multiple users can edit and execute code in real-time.
- **Code Execution**: Supports multiple languages via Piston API, with AWS Lambda.
- **User Authentication**: Seamless login via Google/GitHub using Firebase Authentication.
- **Real-Time State Synchronization**: Uses **ElastiCache (Redis)** for pub/sub to sync editing state across users.

## Tech Stack
- **Frontend**: React.js, AWS S3 (for static hosting), API Gateway, WebSockets, Firebase Authentication
- **Backend**: AWS Lambda (for API logic), API Gateway (for REST API and WebSockets), DynamoDB (for session/user data storage), ElastiCache (Redis) for real-time collaboration, Piston API for code execution
- **CI/CD**: GitHub Actions for automation.

## Architecture Overview
- **Frontend**: The React app is hosted on AWS S3 with CloudFront for fast global delivery. It communicates with AWS Lambda via API Gateway for backend services.
- **Backend**: The API logic runs on **AWS Lambda**, with **API Gateway** exposing REST APIs and WebSocket connections. Data is stored in **DynamoDB**, and **ElastiCache (Redis)** is used for real-time state synchronization.
- **Code Execution**: Code execution is handled by **Piston API** for most cases, with **AWS Lambda** used for lightweight execution, and **Fargate** for heavier tasks.


