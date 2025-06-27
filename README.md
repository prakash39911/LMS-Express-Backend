Learning Management System (LMS) - Backend
This repository contains the backend source code for a modern, feature-rich Learning Management System. The server is built with Node.js, Express, and TypeScript, providing a robust, type-safe, and scalable foundation for the application. It handles all business logic, data management, and integrations with third-party services like Clerk for authentication and Razorpay for payments.
Live Demo lms-next-js-frontend.vercel.app
Frontend Repository github.com/prakash39911/LMS-NextJS-Frontend
Backend Repository (You are here)
<br/>
✨ Key Features
This LMS platform is designed with distinct, powerful features for both course creators (Teachers) and learners (Students).
For Teachers (Course Creators)
Course Creation & Management: Effortlessly create, upload, edit, and publish video courses with rich text descriptions, chapters, and attachments.
Advanced Teacher Dashboard: An analytics dashboard to visualize key metrics:
Total revenue and courses sold.
Number of student enrollments.
Sales performance chart for the last 30 days.
Income distribution pie chart by course.
Secure Payment Integration: Sell courses securely using Razorpay, a trusted payment gateway.
For Students (Learners)
Course Marketplace: Browse, search, and purchase courses from a diverse catalog.
Course Progress Tracking: Automatically track and save progress for each course, allowing students to resume learning exactly where they left off.
Student Billing Section: View purchase history and download PDF invoices for all transactions.
Course Ratings: Provide feedback and ratings for purchased courses.
AI-Powered Learning Tools:
Video Summary Generation: Generate concise AI summaries of course videos for quick revision.
Downloadable Summaries: Download the generated summaries as PDF files.
Core System Features
Robust Authentication & Authorization: Secure user authentication handled by Clerk, supporting sign-in, sign-up, and session management.
Role-Based Access Control (RBAC): Distinct roles for Teachers and Students, ensuring users can only access features relevant to their role.
AI-Powered Chatbot (RAG):
An intelligent chatbot built using the Retrieval-Augmented Generation (RAG) architecture.
Utilizes Pinecone vector database for semantic search, allowing users to ask detailed questions about course content and receive accurate answers.
Can also handle general queries, acting as a comprehensive support agent.
<br/>
🛠️ Tech Stack & Architecture
This project is built with a modern, scalable, and type-safe technology stack.
Backend
Runtime: Node.js
Framework: Express.js
Language: TypeScript
ORM: Prisma
API Style: RESTful API
Frontend
Framework: Next.js 14 (with App Router)
Language: TypeScript
Styling: Tailwind CSS & Shadcn/ui
State Management: Zustand
Form Management: React Hook Form & Zod for validation
Performance: Lighthouse scores: 100 (SEO), 97 (Performance).
Database
Database: PostgreSQL
Vector Database: Pinecone (for RAG AI)
Services & Integrations
Authentication: Clerk
Payment Gateway: Razorpay
AI: RAG (Retrieval-Augmented Generation)
Deployment
Backend: Render
Frontend: Vercel
<br/>
⚙️ System Architecture Overview
Generated mermaid
graph TD
subgraph "User's Browser"
A[Next.js Frontend on Vercel]
end

    subgraph "Backend on Render"
        B[Express.js REST API]
        C[Prisma ORM]
        D[PostgreSQL Database]
    end

    subgraph "Third-Party Services"
        E[Clerk -- for Authentication]
        F[Razorpay -- for Payments]
        G[Pinecone -- for AI Vector Search]
        H[AI Model -- for Summary/Chat]
    end

    A -- "API Requests (Authenticated)" --> B
    B -- "Database Queries" --> C
    C -- "Manages Connection" --> D
    B -- "Validates User Token" --> E
    B -- "Creates Payment Orders" --> F
    B -- "Semantic Search & RAG" --> G
    B -- "Generates Content" --> H

    style A fill:#000,color:#fff,stroke:#fff
    style B fill:#83a6ee,color:#000
    style D fill:#336791,color:#fff
    style E fill:#6C47FF,color:#fff
    style F fill:#3C87F4,color:#fff
    style G fill:#FFC107,color:#000

Use code with caution.
Mermaid
<br/>
🚀 Getting Started
Follow these instructions to set up and run the backend server locally.
Prerequisites
Node.js (v18 or later)
npm or yarn
PostgreSQL database instance
Installation & Setup
Clone the repository:
Generated bash
git clone https://github.com/your-username/LMS-Express-Backend.git
cd LMS-Express-Backend
Use code with caution.
Bash
Install dependencies:
Generated bash
npm install
Use code with caution.
Bash
Set up environment variables:
Create a .env file in the root of the project and add the necessary variables. You can use the .env.example file as a template.
Generated bash
cp .env.example .env
Use code with caution.
Bash
.env.example:
Generated env

# PostgreSQL Database URL from your provider

# Format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE

DATABASE_URL="postgresql://user:password@host:port/database"

# Clerk Authentication

CLERK_SECRET_KEY="your_clerk_secret_key"

# Razorpay API Keys

RAZORPAY_KEY_ID="your_razorpay_key_id"
RAZORPAY_KEY_SECRET="your_razorpay_key_secret"

# Pinecone Vector DB for AI Chatbot

PINECONE_API_KEY="your_pinecone_api_key"
PINECONE_ENVIRONMENT="your_pinecone_environment"

# Frontend URL for CORS

FRONTEND_STORE_URL="http://localhost:3000"
Use code with caution.
Env
Run database migrations:
Prisma will sync the schema with your PostgreSQL database.
Generated bash
npx prisma migrate dev
Use code with caution.
Bash
Start the development server:
Generated bash
npm run dev
Use code with caution.
Bash
The server will be running on http://localhost:8000 (or the port you specify).
<br/>
📖 API Endpoints Overview
The API follows RESTful conventions. All endpoints are prefixed with /api.
POST /api/auth/webhook: Webhook to sync user data from Clerk.
GET /api/courses: Get all published courses.
POST /api/courses: Create a new course (Teacher only).
GET /api/courses/:courseId: Get details for a specific course.
PATCH /api/courses/:courseId: Update a course (Teacher only).
POST /api/courses/:courseId/chapters: Add a new chapter to a course.
POST /api/courses/:courseId/checkout: Create a Razorpay checkout session for a course.
GET /api/analytics: Get teacher dashboard analytics (Teacher only).
POST /api/chatbot: Handle user queries for the AI chatbot.
