# Learning Management System (LMS) - Backend

**Live Application:** [https://lms-next-js-frontend.vercel.app/](https://lms-next-js-frontend.vercel.app/)  
**Frontend Repository:** [https://github.com/prakash39911/LMS-NextJS-Frontend](https://github.com/prakash39911/LMS-NextJS-Frontend)

## 🚀 Technology Stack

### Frontend

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **State Management:** Zustand
- **Forms & Validation:** React Hook Form + Zod
- **Styling:** Tailwind CSS
- **Authentication UI:** Clerk Components
- **Payment Integration:** Razorpay
- **AI Components:** RAG (Retrieval-Augmented Generation)
- **Deployment:** Vercel

### Backend

- **Framework:** Express.js
- **Language:** TypeScript
- **ORM:** Prisma
- **Database:** PostgreSQL
- **Authentication:** Clerk
- **Payment Processing:** Razorpay API
- **Vector Database:** Pinecone (for RAG AI)
- **Deployment:** Render.com

### Performance & Quality

- **Lighthouse Scores:** SEO 100, Performance 97
- **Type Safety:** Full TypeScript implementation
- **Responsive Design:** Mobile-first approach

## 🔥 Key Features

### 🛡️ Authentication & Authorization

- Secure authentication using **Clerk** (with social logins)
- Role-based access control (Teacher/Student)
- Protected API routes with JWT verification

### 👨‍🏫 Teacher Features

1. **Course Management**

   - Create/upload video courses with rich descriptions
   - Set pricing for premium courses
   - Edit/update course content

2. **Analytics Dashboard**
   - View courses sold and student enrollment metrics
   - 30-day sales trend visualization (charts)
   - Income distribution by course (pie charts)
   - Revenue tracking

### 👨‍🎓 Student Features

1. **Course Experience**

   - Browse and purchase courses
   - Rate and review purchased courses
   - Track progress through course content
   - Resume watching from last position

2. **AI-Powered Learning Tools**

   - Chatbot with RAG architecture for course queries
   - AI-generated video summaries
   - PDF export of course summaries

3. **Billing Management**
   - Purchase history
   - Downloadable invoice PDFs
   - Payment receipts

### 💰 Payment System

- Integrated Razorpay payment gateway
- Secure checkout flow
- Payment verification webhooks
- Purchase confirmation emails

### 🤖 AI Integration

- **RAG (Retrieval-Augmented Generation) Chatbot**

  - Semantic search powered by Pinecone vector DB
  - Answers both course-specific and general questions
  - Context-aware responses

- **Video Summarization**
  - AI-generated concise summaries
  - PDF export functionality
  - Key concept extraction

### 🛠️ Technical Highlights

1. **Backend Architecture**

   - RESTful API design
   - Type-safe Express.js with TypeScript
   - Prisma ORM for database operations
   - Modular code structure

2. **Performance Optimizations**

   - Efficient database queries
   - Caching strategies
   - Optimized media delivery

3. **DevOps**
   - CI/CD pipelines
   - Automated deployments
   - Environment management

## 📊 Database Schema (PostgreSQL)

- Users (synced with Clerk)
- Courses
- Enrollments
- Payments
- Progress Tracking
- Reviews/Ratings
- Chatbot Conversations
- Vector embeddings (Pinecone)

## 🌐 Deployment

- **Frontend:** Vercel (Next.js)
- **Backend:** Render.com (Node.js)
- **Database:** PostgreSQL (Render.com)
- **Vector DB:** Pinecone

## 🧰 Development Tools

- Prisma Studio for database management
- Postman/Thunder Client for API testing
- Zod for runtime validation
- ESLint + Prettier for code quality

## 🚧 Future Roadmap

- [ ] Course completion certificates
- [ ] Discussion forums
- [ ] Mobile app (React Native)
- [ ] Enhanced analytics
- [ ] Bulk course uploads
- [ ] Affiliate program

## 📜 License

MIT License - See [LICENSE](LICENSE) for details.
