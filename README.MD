# Console Busters Blog Application

<div style="text-align: center;">
    <img src="https://res.cloudinary.com/dq3pru6ji/image/upload/v1719986780/VECROS_BLOG_APPLICATION_DB_PROTOTYPE_jlvkad.png" alt="Console Busters">
</div>
<div style="text-align: center;">
    <img src="https://res.cloudinary.com/dq3pru6ji/image/upload/v1719986961/AUTH_SYSTEM_FOR_BLOG_APPLICATION_cagwwk.png" alt="Auth System for Blog Application">
</div>

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

- **Live Frontend URL not work properly now. This problem is from render server. not from our side because Live API URL working properly on POSTMAN.**

### Demo Video Link: https://youtu.be/2lYV9j6G-is

---

# API DOCUMENTATION 🙋🏻‍♂️

baseurl: http://localhost:8001

## Public Routes 📒

**1. Register 🧫** Method: POST

1. **Endpoint**
   > api/v1/users/register
2. **Body**

```bash
{
    "fullName": "Manoj Nishad",
    "email": "manojnishad100@gmail.com",
    "username": "manojnishad100",
    "password": "123456789",
    "confirmPassword": "123456789"
}
```

3. **Response**

```bash
{
    "statusCode": 201,
    "data": {},
    "message": "Profile created successfully & OTP has been sent to your registered email.",
    "success": true
}
```

**2. Verify OTP 🧫** Method: POST

1. **Endpoint**
   > api/v1/users/verify-otp
2. **Body**

```bash
{
    "randomOTP": "177000"
}
```

3. **Response**

```bash
{
    "statusCode": 200,
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsI",
        "refreshToken": "eyJhbGciOiJIUzI1NiIs"
    },
    "message": "User logged in successfully",
    "success": true
}
```

**3. Login 🧫** Method: POST

1. **Endpoint**
   > api/v1/users/login
2. **Body**

```bash
{
    "email": "manojnishad100@gmail.com",
    "username": "manojnishad100",
    "password": "123456789"
}
```

3. **Response**

```bash
{
    "statusCode": 200,
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR"
    },
    "message": "User logged in successfully",
    "success": true
}
```

**4. Forgot Password 🧫** Method: POST

1. **Endpoint**
   > api/v1/users/forgot-password
2. **Body**

```bash
{
    "email": "manojnishad100@gmail.com",
}
```

3. **Response**

```bash
{
    "statusCode": 200,
    "data": {},
    "message": "Reset password link sent successfully to your registered email.",
    "success": true
}
```

**5. Reset Password 🧫** Method: POST

1. **Endpoint**
   > api/v1/users/reset-password/:resetToken
2. **Body**

```bash
{
    "password": "12345678",
    "confirmPassword": "12345678"
}
```

3. **Response**

```bash
{
    "statusCode": 200,
    "data": {},
    "message": "Password change successfully.",
    "success": true
}
```

**6. Fetch All Blogs 🧫** Method: GET

1. **Endpoint**
   > api/v1/blogs/public/all?page=1&category=technology
2. **Body**

```bash
FORM DATA TO ADD FIELDS PAGE, AND CATEGORY IN QUERY
```

3. **Response**

```bash
{
    "statusCode": 200,
    "data": {
        "blogs": [
            {
                "_id": "668392669dc83276ed53adff",
                "title": "Show Code Snippets in React JS",
                "description": "Highlight.js is a very popular npm package that can help you style your code snippet automatically.",
                "content": "Content",
                "owner": {
                    "username": "manojofficialmj"
                },
                "isPublished": true,
                "category": "web-development",
                "createdAt": "2024-07-02T05:38:46.377Z",
                "updatedAt": "2024-07-03T17:54:11.305Z",
                "__v": 0,
                "slug": "show-code-snippets-in-react-js",
                "keywords": "SDE, DSA, MERN, JAVASCRIPT"
            },
            {
                "keywords": "",
                "_id": "6685332e39b37fc718d9aa1d",
                "title": "Widening or Automatic Type Conversion",
                "slug": "widening-or-automatic-type-conversion",
                "description": "Widening conversion occurs when two data types are converted automatically (Implicit)",
                "content": "<h2><strong>Widening or Automatic Type Conversion</strong></h2>",
                "owner": {
                    "username": "manojofficialmj"
                },
                "isPublished": true,
                "category": "education",
                "createdAt": "2024-07-03T11:17:02.395Z",
                "updatedAt": "2024-07-03T11:17:02.395Z",
                "__v": 0
            },
            {
                "keywords": "",
                "_id": "668541c671ac683b1836dc1f",
                "title": "How to Learn Data Structures and Algorithms (DSA)",
                "slug": "how-to-learn-data-structures-and-algorithms--dsa-",
                "description": "Mastering Data Structures and Algorithms (DSA) is essential for coding interviews and problem-solving",
                "content": "Mastering Data Structures",
                "owner": {
                    "username": "manojofficialmj"
                },
                "isPublished": true,
                "category": "online-courses",
                "createdAt": "2024-07-03T12:19:18.365Z",
                "updatedAt": "2024-07-03T12:19:18.365Z",
                "__v": 0
            }
        ],
        "currentPage": 1,
        "totalPages": 1,
        "blogsCount": 3
    },
    "message": "Blogs fetched successfully",
    "success": true
}
```

## Protected Routes 📒

**1. Profile 🧫** Method: GET

1. **Endpoint**
   > api/v1/users/profile
2. **Body**

```bash

```

3. **Response**

```bash
{
    "statusCode": 200,
    "data": {
        "user": {
            "_id": "668676723246442e7af9406m",
            "username": "manojnishad100",
            "email": "manojnishad100@gmail.com",
            "fullName": "Manoj Nishad",
            "role": "user",
            "blogs": [],
            "isVerified": true,
            "createdAt": "2024-07-04T10:16:18.595Z",
            "updatedAt": "2024-07-04T10:39:46.938Z",
            "__v": 0
        }
    },
    "message": "Profile fetched successfully",
    "success": true
}
```

**2. Logout 🧫** Method: POST

1. **Endpoint**
   > api/v1/users/profile/logout
2. **Body**

```bash

```

3. **Response**

```bash
{
    "statusCode": 200,
    "data": {},
    "message": "User logged out",
    "success": true
}
```

**3. Update Profile 🧫** Method: PATCH

1. **Endpoint**
   > api/v1/users/profile/update
2. **Body**

```bash
{
    "email": "manojnishad100@gmail.com",
    "username": "manojnishad100",
    "fullName": "Manoj Kumar"
}
```

3. **Response**

```bash
{
    "statusCode": 200,
    "data": {
        "user": {
            "_id": "668676723246442e7af9406e",
            "username": "manojnishad100",
            "email": "manojnishad100@gmail.com",
            "fullName": "Manoj Kumar",
            "role": "user",
            "blogs": [],
            "isVerified": true,
            "createdAt": "2024-07-04T10:16:18.595Z",
            "updatedAt": "2024-07-04T10:44:14.857Z",
            "__v": 0
        }
    },
    "message": "Profile updated successfully",
    "success": true
}
```

**4. Delete Profile 🧫** METHOD: DELETE

1. **Endpoint**
   > api/v1/users/profile/delete
2. **Body**

```bash

```

3. **Response**

```bash
{
    "statusCode": 200,
    "data": {}
    },
    "message": "Profile deleted successfully",
    "success": true
}
```

**5. Refresh Token 🧫** METHOD: POST

1. **Endpoint**
   > api/v1/users/profile/refresh
2. **Body**

```bash

```

3. **Response**

```bash
{
    "statusCode": 200,
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIs",
        "refreshToken": "eyJhbGciOiJIUzI1NiIs"
    },
    "message": "Access token refreshed",
    "success": true
}
```

**6. Create Blog 🧫** METHOD: POST

1. **Endpoint**
   > api/v1/blogs/create
2. **Body**

```bash
{
    "title": "This is a simple blog title 2",
    "description": "This is simple blog description 2",
    "content": "This is a simple blog content 2",
    "category": "web-development",
    "isPublished": false
}
```

3. **Response**

```bash
{
    "statusCode": 201,
    "data": {
        "blog": {
            "title": "This is a simple blog title 2",
            "slug": "this-is-a-simple-blog-title-2",
            "description": "This is simple blog description 2",
            "content": "This is a simple blog content 2",
            "keywords": "",
            "owner": "668676723246442e7af9406e",
            "isPublished": false,
            "category": "web-development",
            "_id": "66867e3e3246442e7af9409b",
            "createdAt": "2024-07-04T10:49:34.910Z",
            "updatedAt": "2024-07-04T10:49:34.910Z",
            "__v": 0
        }
    },
    "message": "Blog created successfully",
    "success": true
}
```

**7. Update Blog 🧫** METHOD: PATCH

1. **Endpoint**
   > api/v1/blogs/update/:id
2. **Body**

```bash
{
    "title": "This is a simple blog title 2",
    "description": "This is simple blog description 2",
    "content": "This is a simple blog content 2",
    "category": "technology",
    "isPublished": false
}
```

3. **Response**

```bash
{
    "statusCode": 200,
    "data": {
        "blog": {
            "title": "This is a simple blog title 2",
            "slug": "this-is-a-simple-blog-title-2",
            "description": "This is simple blog description 2",
            "content": "This is a simple blog content 2",
            "keywords": "",
            "owner": "668676723246442e7af9406e",
            "isPublished": false,
            "category": "technology",
            "_id": "66867e3e3246442e7af9409b",
            "createdAt": "2024-07-04T10:49:34.910Z",
            "updatedAt": "2024-07-04T10:49:34.910Z",
            "__v": 0
        }
    },
    "message": "Blog updated successfully",
    "success": true
}
```

**8. Delete Blog 🧫** METHOD: DELETE

1. **Endpoint**
   > api/v1/blogs/delete/:id
2. **Body**

```bash

```

3. **Response**

```bash
{
    "statusCode": 200,
    "data": {},
    "message": "Blog deleted successfully",
    "success": true
}
```

**9. Fetch All Blogs 🧫** METHOD: GET

1. **Endpoint**
   > api/v1/blogs/all?page=1&category=sports&isPublished=true
2. **Body**

```bash

```

3. **Response**

```bash
{
    "statusCode": 200,
    "data": {
        "blogs": [
            {
                "_id": "66867f7e3246442e7af940a5",
                "title": "This is a simple blog title 2",
                "slug": "this-is-a-simple-blog-title-2",
                "description": "This is simple blog description 2",
                "content": "This is a simple blog content 2",
                "keywords": "",
                "owner": "668676723246442e7af9406e",
                "isPublished": false,
                "category": "web-development",
                "createdAt": "2024-07-04T10:54:54.213Z",
                "updatedAt": "2024-07-04T10:54:54.213Z",
                "__v": 0
            }
        ],
        "currentPage": 1,
        "totalPages": 1,
        "blogsCount": 1
    },
    "message": "Blogs fetched successfully",
    "success": true
}
```

**10. Fetch Blog 🧫** METHOD: GET

1. **Endpoint**
   > api/v1/blogs/:id
2. **Body**

```bash

```

3. **Response**

```bash
{
    "statusCode": 200,
    "data": {
        "blog": {
            "_id": "66867f7e3246442e7af940a5",
            "title": "This is a simple blog title 2",
            "slug": "this-is-a-simple-blog-title-2",
            "description": "This is simple blog description 2",
            "content": "This is a simple blog content 2",
            "keywords": "",
            "owner": "668676723246442e7af9406e",
            "isPublished": false,
            "category": "web-development",
            "createdAt": "2024-07-04T10:54:54.213Z",
            "updatedAt": "2024-07-04T10:54:54.213Z",
            "__v": 0
        }
    },
    "message": "Blog fetched successfully",
    "success": true
}
```
