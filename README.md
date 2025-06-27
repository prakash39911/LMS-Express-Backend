# Learning Management System (LMS)

> A full-featured online Learning Management System built with modern technologies, offering teachers the ability to create and sell video courses and students a seamless learning experience enhanced by AI-driven features.

---

## 🚀 Project Links

- **Live Demo:** [https://lms-next-js-frontend.vercel.app/](https://lms-next-js-frontend.vercel.app/)
- **Frontend Repository:** [github.com/prakash39911/LMS-NextJS-Frontend](https://github.com/prakash39911/LMS-NextJS-Frontend)

---

## 🧰 Tech Stack

| Layer                        | Technology / Service                    | Purpose                                                         |
| ---------------------------- | --------------------------------------- | --------------------------------------------------------------- |
| **Frontend**                 | Next.js, React, Tailwind CSS, Zustand   | Server-Side Rendering, UI components, styling, state management |
| **Backend**                  | Node.js, Express, TypeScript            | REST API development, type safety                               |
| **Database**                 | PostgreSQL, Prisma ORM                  | Relational data storage, schema migrations                      |
| **Authentication**           | Clerk                                   | User signup, login, session management                          |
| **Payments**                 | Razorpay                                | Secure payment processing                                       |
| **AI & RAG**                 | OpenAI embeddings, Pinecone Vector DB   | Semantic search, Retrieval-Augmented Generation (RAG) chatbot   |
| **File Hosting**             | Vercel (frontend), Render.com (backend) | Continuous deployment and hosting                               |
| **Forms & Validation**       | React Hook Form, Zod                    | Form state management, schema-based validation                  |
| **Charts & Data Viz**        | Chart.js (or Recharts)                  | Display sales, enrollment, and income analytics                 |
| **PDF Generation**           | jsPDF or PDFKit                         | Generate downloadable summary & billing PDFs                    |
| **Styling & Responsiveness** | Tailwind CSS                            | Utility-first CSS framework for responsive design               |

---

## 📋 Features

1. **User Authentication & Authorization**

   - Clerk-powered signup and login flows.
   - Role-based access control: **Teacher** & **Student**.

2. **Course Management (Teacher)**

   - Create, upload, and edit video-based courses.
   - Set pricing for each course.
   - View course sales, student enrollments, and revenue metrics.
   - **Dashboard Analytics:**
     - Sales & enrollments over the last 30 days (line/bar chart).
     - Course-wise income distribution (pie chart).

3. **Student Experience**

   - Browse and purchase courses.
   - Submit course ratings and reviews post-purchase.
   - Track course progress with completion percentages.
   - View billing history and download invoice PDFs.

4. **Payment Flow**

   - Razorpay integration for secure transactions.
   - Webhook handling via Express to record payment status.

5. **AI-Powered Enhancements**

   - **RAG Chatbot:**
     - Semantic search over course content using OpenAI embeddings & Pinecone.
     - Answer general and course-specific queries in real time.
   - **Video Summary Generator:**
     - Automatically produce concise, text-based summaries of video lectures.
     - Downloadable PDF summaries for quick revision.

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

## ⚙️ Getting Started (Backend)

1. **Clone the Repository**
   ```bash
   git clone https://github.com/prakash39911/LMS-NextJS-Backend.git
   cd LMS-NextJS-Backend
   ```
