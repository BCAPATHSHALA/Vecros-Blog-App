# Vecros Blog Application

![Vecros Technologies](https://res.cloudinary.com/dq3pru6ji/image/upload/v1719737006/vecros_app_ovxfro.png)

## Description

This is a full-stack web application developed as an internship assignment project for _*Vecros Technologies Private Limited*_. The application utilizes the MERN stack (MongoDB, Express.js, React.js, Node.js) for building a comprehensive blog management system.

## Features

### Frontend

- **Core Features:**

  - **Blog Management:** Implement CRUD operations for creating, reading, updating, and deleting blog posts.
  - **Rich Text Editor:** Integrate a rich text editor (React Quill) for creating and editing blog content.
  - **Responsive UI:** Ensure the UI is responsive and works seamlessly across different screen sizes.

- **Pages and Navigation:**

  - **Home Page:** Display featured blogs with titles, excerpts, and publication dates. Include navigation with categories (e.g., Technology, Travel).
  - **Category Pages:** Separate pages for each category showcasing relevant blogs.
  - **Filtering and Search:** Implement filtering by category and a search option to find specific blogs.
  - **Blog Details Page:** Clicking on a blog title navigates to a detailed view displaying full content, images, author details, and metadata.

- **State Management:**
  - Use Redux for centralized state management to handle application state efficiently.

### Backend

- **Technology Stack:**

  - Node.js with Express for backend API development.
  - MongoDB for database storage of blog content, images, user information, and permissions.

- **Features:**

  - **User Authentication and Authorization:** Implement JWT-based authentication for secure API endpoints. Users can share blogs with specified permissions (view/edit).
  - **Blog Sharing and Permissions:** Allow users to share blogs and define access levels for shared content.

- **CRUD Operations:**
  - Implement CRUD operations for managing blog posts to ensure full functionality for creating, editing, viewing, and deleting blogs.

## Installation Instructions

### Frontend

1. Clone the repository.
2. Navigate to the `frontend` directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.

### Backend

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install dependencies using `npm install`.
4. Start the server using `npm run dev`.

### Live API URL: https://vecros-blog-app.onrender.com

### Live Frontend URL: https://vecros-blog-app-jv6x.onrender.com

## NOTE

- **Live Frontend URL not work properly now. This problem is from render server. not from our side becaue Live API URL working properly on POSTMAN.**

### Demo Video Link: 