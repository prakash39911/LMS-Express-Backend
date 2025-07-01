# Learning Management System (LMS) - Backend

## 🚀 Overview

> A full-stack Learning Management System where teachers can create, sell, and analyze video courses. Students enjoy a seamless learning experience with progress tracking, secure Razorpay payments, and innovative AI tools. Instantly generate video summaries for revision or ask the intelligent RAG chatbot for course details. Built with Next.js and Node.js for top-tier performance and SEO.

---

## 🚀 Project Links

- **Live Demo:** [Live Link](https://lms-next-js-frontend.vercel.app/)
- **Frontend Repository:** [Frontend Repo](https://github.com/prakash39911/LMS-NextJS-Frontend)

---

## ✨ Watch Video Demo

- **Click on the image to watch**

[![Watch the video](https://res.cloudinary.com/prakashcloud/image/upload/v1751171417/Screenshot_from_2025-06-29_09-45-22_lfkq6t.png)](https://res.cloudinary.com/prakashcloud/video/upload/v1751347629/LMS_Demo_1_vvwgtv.mp4)

---

## 🛠️ Tech Stack

| Layer                        | Technology / Service                    | Purpose                                                         |
| ---------------------------- | --------------------------------------- | --------------------------------------------------------------- |
| **Frontend**                 | Next.js, React, Tailwind CSS, Zustand   | Server-Side Rendering, UI components, styling, state management |
| **Backend**                  | Node.js, Express, TypeScript            | REST API development, type safety                               |
| **Database**                 | PostgreSQL, Prisma ORM                  | Relational data storage, schema migrations                      |
| **Media Storage**            | Cloudinary                              | Stores images and videos on the cloud                           |
| **Authentication**           | Clerk                                   | User signup, login, session management                          |
| **Payments**                 | Razorpay                                | Secure payment processing                                       |
| **AI & RAG**                 | Gemini embeddings, Pinecone Vector DB   | Semantic search, Retrieval-Augmented Generation (RAG) chatbot   |
| **Hosting**                  | Vercel (frontend), Render.com (backend) | Continuous deployment and hosting                               |
| **Forms & Validation**       | React Hook Form, Zod                    | Form state management, schema-based validation                  |
| **Charts & Data**            | Recharts                                | Display sales, enrollment, and income analytics                 |
| **PDF Generation**           | jsPDF                                   | Generate downloadable summary & billing PDFs                    |
| **Styling & Responsiveness** | Tailwind CSS                            | Utility-first CSS framework for responsive design               |
| **Development Tools**        | Ngrok                                   | Webhook testing                                                 |

---

## ✨ Key Features

1. **User Authentication & Authorization**

   - Clerk-powered signup and login flows.
   - Role-based access control: **Teacher** & **Student**.

2. **Course Management (Teacher)**

   - Create, upload video-based courses.
   - Set pricing for each course.
   - View course sales, student enrollments, and revenue metrics.
   - **Dashboard Analytics:**
     - Sales & enrollments over the last 30 days (Line chart).
     - Course-wise income distribution (pie chart).

3. **Student Experience**

   - Browse and purchase courses.
   - Submit course ratings post-purchase.
   - Track course progress with completion percentages.
   - View billing history and download invoice PDFs.

4. **AI-Powered Enhancements**

   - **RAG Chatbot:**
     - Semantic search over course content using "gemini-embedding" model & Pinecone.
     - Answer general and course-specific queries in real time.
   - **Video Summary Generator:**
     - Automatically produce concise, text-based summaries of video lectures.
     - Downloadable PDF summaries for quick revision.

5. **Payment Flow**

   - Razorpay integration for secure transactions.
   - Webhook handling via Express to record payment status.

6. **API & Data Layer**

   - Fully-typed REST APIs using Express + TypeScript.
   - PostgreSQL database managed with Prisma ORM.
   - Secure environment variable management for API keys, database URLs, and secrets.

7. **Performance & SEO**

   - Frontend Lighthouse audit scores: **SEO: 100**, **Performance: 97**.
   - Server-side rendering (SSR) for faster page loads and improved crawlability.

8. **Responsive Design**
   - Tailwind CSS for utility-first, mobile-first styling.
   - Seamless UX across desktop, tablet, and mobile devices.

---

## 🚀 Getting Started

1. **Frontend**

   ```bash
   git clone https://github.com/prakash39911/LMS-NextJS-Frontend
   cd LMS-NextJS-Frontend
   npm install
   npm run dev
   ```

2. **Backend**

   ```bash
   git clone https://github.com/prakash39911/LMS-Express-Backend
   cd LMS-Express-Backend
   npm install
   npm run dev
   ```

Ensure you set up environment variables.
