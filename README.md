LearnHub: Your Center for Skill 
Enhancement
LearnHub is a modern full-stack Online Learning Platform (OLP) that enables users to learn 
new skills at their own pace. It provides a clean, responsive interface for both students and 
instructors and integrates user-friendly features like course management, progress 
tracking, and secure payments.
Live Demo
learnhubrce.vercel.app
Screenshots
Tech Stack
Frontend:
- Next.js (React Framework)
- TypeScript
- Tailwind CSS
- Bootstrap
- Axios
Backend:
- Node.js
- Express.js
- MongoDB
- RESTful API Integration
Folder Structure
learnhub/
├── app/ # All pages and routes (Next.js)
├── components/ # Reusable UI components
├── public/ # Static assets
├── styles/ # Global styles
├── package.json # Project metadata and scripts
├── tailwind.config.ts
├── tsconfig.json
└── ...
Features
• User registration and login
• Browse and filter courses
• Enroll in free/paid courses
• View learning progress
• Interactive discussions and live sessions
• Certificate generation on completion
• Instructor dashboard to create/update courses
• Admin management features
Use Case: Learn Web Development
Sarah, a student, registers on LearnHub and browses web development courses. She enrolls 
in one, studies at her own pace, interacts with instructors, and earns a certificate after 
completing the course.
Installation & Local Setup
Make sure you have Node.js, MongoDB, and pnpm installed.
git clone https://github.com/your-username/learnhub.git
cd learnhub
pnpm install
pnpm dev
App runs on http://localhost:3000
Configure your MongoDB connection string in a .env file:
MONGO_URI=mongodb+srv://<your-db-url>
NEXT_PUBLIC_API_URL=http://localhost:3000/api
Roles
- Students: Enroll in courses, track progress, receive certificates
- Instructors: Create and manage course content
- Admin: Full platform control, monitor users/courses.
