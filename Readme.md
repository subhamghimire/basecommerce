# Backend with Django & Frontend with React.js

This project is a simple base application with the backend built using Django and the frontend built using React.js. The backend provides API endpoints for product data and user authentication, while the frontend interacts with the backend using JWT-based authentication.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
  - [Django Backend Setup](#django-backend-setup)
  - [React Frontend Setup](#react-frontend-setup)
- [Authentication Flow](#authentication-flow)
- [API Routes](#api-routes)
- [Next Steps](#next-steps)

## Technologies Used

- **Backend**: Django, SimpleJWT, MySQL
- **Frontend**: React.js, Axios, JWT for authentication
- **Others**: Promises & Async/Await in JavaScript, Sessions, Local Storage, Cookies
## Folder Structure

The project has the following folder structure:

/project \
  ├── /apicommerce # Django backend \
  └── /frontendcommerce # React frontend

## Setup Instructions

### Django Backend Setup

1. Install required packages for the Django project by setting up the environment:
   - Create a virtual environment (optional but recommended):
     ```bash
     python -m venv venv
     source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
     ```
   - Install the required dependencies from `requirements.txt`:
     ```bash
     pip install -r requirements.txt
     ```

2. Set up your environment variables:
   - Copy the `.env.sample` to `.env`:
     ```bash
     cp .env.sample .env
     ```
   - Add your MySQL credentials to the `.env` file.

3. Run the Django server:
   ```bash
   python manage.py runserver

4. The Django server should now be running at http://127.0.0.1:8000/.

### React Frontend Setup
1. Install required dependencies for the React project
```
cd frontendcommerce
npm install
```

2. Start the React application:
```
npm run start
```

3. The React app should now be running at http://localhost:3000/

4. You can register a new user and log in. After a successful login, you will be redirected to the /dashboard page, where you can fetch and display a list of products. This can be modified to your needs.

5. Look into chrome devtool for network calls.

## Authentication Flow
1. The authentication is handled using JWT (JSON Web Token) which includes an access token and a refresh token.
2. Access Token is used to authenticate requests to the backend.
3. Refresh Token is used to get a new access token when the current one expires.

## API Routes
You can add new API routes to `urls.py` and define the corresponding views and logic.

### Example:
1. GET /api/products/ - Fetch list of products.
2. POST /api/auth/login/ - Login the user and get the tokens.
3. POST /api/auth/register/ - Register a new user.
4. and many ...

You can extend this with more routes like adding, updating, and deleting products or handling other user-related tasks.

## Next Steps
1. Continue with Django learning: Focus on Django basics and fundamentals.

2. Continue learning JavaScript: Deep dive into JavaScript core concepts and fundamentals, including Promises, Async/Await, and handling API requests in React.
