# 💼 Job Portal Web Application  

A modern **MERN Stack Job Portal** that connects **job seekers** and **employers** in one platform.  
Users can browse and apply for jobs, while recruiters can post and manage openings — all with secure Firebase authentication and a sleek, responsive UI.

🌐 **Live Demo:** [https://jobs-portal-9cc03.web.app/](https://jobs-portal-9cc03.web.app/)
---
🌐 Sever Link : https://job-portal-server-bay-zeta.vercel.app/

## 🚀 Features  

### 👤 User Features
- Secure **Firebase Authentication** (Email/Password + Google Login)
- Browse all job listings with **search, filter, and sort**
- View detailed job descriptions and requirements
- **Apply for jobs** directly from the site
- Track applied jobs
- **Responsive** layout for all devices

### 🧑‍💼 Recruiter Features
- Post new job listings  
- Manage, update, or delete existing posts  
- View applications received for each job  

### ✨ Additional Features
- **Modern UI:** Tailwind CSS + DaisyUI  
- **Animations:** Framer Motion for smooth transitions  
- **Notifications:** SweetAlert2 & React Toastify  
- **Routing:** React Router DOM (protected routes supported)  
- **Icons:** React Icons for a consistent design language  
- **Persistent Auth State:** Firebase Auth listener  
- **Backend API:** Express + MongoDB (Mongoose ORM)  
- **Deployed:**  
  - Frontend → Firebase Hosting  
  - Backend → Vercel  

---

## 🛠️ Tech Stack  

| Layer | Technologies Used |
|-------|-------------------|
| **Frontend** | React.js, React Router, Tailwind CSS, DaisyUI, Framer Motion, React Toastify, SweetAlert2, React Icons |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (via Mongoose) |
| **Authentication** | Firebase Authentication |
| **Deployment** | Firebase Hosting (Frontend), Vercel (Backend) |

---

## 📁 Folder Structure  

job-portal/
│
├── client/ # React frontend (Vite or CRA)
│ ├── src/
│ │ ├── components/ # Reusable components (Navbar, Footer, Cards)
│ │ ├── pages/ # Route pages (Home, Login, JobDetails, Dashboard)
│ │ ├── context/ # AuthContext, ThemeContext
│ │ ├── CustomHooks/ # Reusable custom hooks (e.g., useAuth)
│ │ ├── assets/ # Images, logos, etc.
│ │ └── main.jsx # Entry point
│ ├── .env # Frontend environment variables
│ └── package.json
│
├── server/ # Express backend
│ ├── routes/ # API endpoints
│ ├── models/ # Mongoose models (Job, User, Application)
│ ├── controllers/ # Business logic
│ ├── server.js # Main server entry
│ └── .env # Backend environment variables

👨‍💻 Author

Name : Amit Sarkar 
 GitHub : https://github.com/Amitkumersarkar
 LinkedIn : www.linkedin.com/in/amit-sarkar-63504b252

📜 License

MIT License
 

