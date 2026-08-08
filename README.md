# Social App

A modern social media web application built with React, Vite, and Tailwind CSS. This project delivers a polished frontend experience for authentication, posting, following, profile browsing, notifications, and social interaction in a clean and responsive interface.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Overview

Social App is a frontend-only social platform experience designed to feel modern, intuitive, and visually appealing. It includes core social networking flows such as sign-in, sign-up, feed browsing, post creation, profile management, and notification interactions.

## 🚀 Features

- Secure authentication flow with sign in and sign up pages
- Protected routes for authenticated users only
- Social feed with post creation and browsing
- Detailed post view for individual content
- Rich user profile experience with stats and tabs
- Followers and following sections
- Bookmarks and notification support
- Responsive layout with a modern sidebar-based UI
- Toast notifications and smooth navigation

## 🛠️ Tech Stack

- React 19
- Vite 8
- React Router
- Tailwind CSS
- Axios
- Formik + Yup
- Font Awesome Icons
- React Toastify

## 📁 Project Structure

```bash
src/
├── api/              # API configuration and request setup
├── components/       # Reusable UI components
├── context/          # Authentication and global app context
├── hooks/            # Custom hooks for data fetching
├── pages/            # Route-based pages
└── assets/           # Static assets and images
```

## 🖼️ Screenshots

You can add screenshots here later to showcase the UI:

- Home Feed
- Profile Page
- Post Details
- Authentication Pages

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd social-app
```

2. Install dependencies

```bash
npm install
```

3. Create your environment file

```bash
cp .env.example .env
```

4. Update the API base URL in your `.env` file

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

5. Start the development server

```bash
npm run dev
```

Open http://localhost:5173 to view the app.

## 📜 Available Scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Build the project for production
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint checks
```

## 🔐 Environment Variables

| Variable            | Description                   |
| ------------------- | ----------------------------- |
| `VITE_API_BASE_URL` | Base URL for your backend API |

## 🧩 Backend Requirement

This frontend expects a backend API that supports:

- Authentication
- User profiles
- Posts
- Followers and following
- Bookmarks
- Notifications

## 🤝 Contributing

Contributions are welcome. If you would like to improve the project:

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Open a pull request

## 📬 Contact

For questions, suggestions, or collaboration, feel free to open an issue in the repository.
