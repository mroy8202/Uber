# Uber

This repository contains the source code for an **Uber application**. It consists of a backend server built using Node.js and Express.js, and a frontend client built with React. The application includes features for users and captains (drivers), socket-based real-time updates, and secure authentication mechanisms. **It is best fitted for mobile screens**, offering an optimized and responsive user experience.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Features](#features)
  - [Backend Features](#backend-features)
  - [Frontend Features](#frontend-features)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [API Routes](#api-routes)

---

## Technologies Used

### Backend:

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Socket.io
- Bcrypt (for password hashing)
- JSON Web Token (JWT) for authentication
- dotenv for environment variables

### Frontend:

- React.js
- React Router DOM
- Tailwind CSS for styling
- Google Maps API (via `@react-google-maps/api`)
- Socket.io Client
- GSAP for animations

---

## Project Structure

### Backend:

- **`server.js`**: Entry point of the server.
- **`app.js`**: Main application setup and middleware configuration.
- **`config/`**: Database configuration.
- **`controllers/`**: Contains logic for handling requests (e.g., users, rides, captains, maps).
- **`models/`**: Mongoose schemas for MongoDB collections.
- **`routes/`**: API endpoints grouped by functionality.
- **`middlewares/`**: Middleware functions like authentication.
- **`socket/`**: Socket.io setup and handlers.

### Frontend:

- **`src/App.jsx`**: Main routing and layout setup.
- **`src/pages/`**: React components for different application pages.
- **`src/components/`**: Reusable components used across different pages.
- **`src/context/`**: Context providers for managing state (e.g., user, captain, socket).
- **`src/assets/`**: Static files like images and fonts.
- **`src/index.css`**: Global styles.

---

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. Install dependencies for both backend and frontend:

   ### Backend:

   ```bash
   cd backend
   npm install
   ```

   ### Frontend:

   ```bash
   npm install
   ```

---

## Features

### Backend Features:

- User and captain registration and login with JWT-based authentication.
- Protected routes using middleware for users and captains.
- Real-time location updates via Socket.io.
- MongoDB integration for persistent data storage.

### Frontend Features:

- Responsive design using Tailwind CSS.
- Animated UI using GSAP.
- React Router DOM for navigation.
- Google Maps API for real-time mapping features.
- Context-based state management for users, captains, and sockets.

---

## Environment Variables

Create a `.env` file in the `backend` directory and include the following variables:

```env
PORT=3000
MONGO_URI=<Your MongoDB connection string>
JWT_SECRET=<Your JWT secret>
GOOGLE_MAPS_API_KEY=<Your Google Maps API Key>
```

Create a `.env` file in the `client` directory and include the following variable:

```env
VITE_BASE_URL=<Your Backend Base URL>
VITE_GOOGLE_MAPS_API_KEY=<Your Google Maps API Key>
```

---

## Running the Application

### Backend:

1. Start the backend server in development mode using Nodemon:

   ```bash
   npm run dev
   ```

2. The backend will run on `http://localhost:3000` by default.

### Frontend:

1. Start the frontend development server:

   ```bash
   npm run dev
   ```

2. The frontend will run on `http://localhost:5173` by default.

---

## API Routes

### User Routes:

- `POST /users/register`: Register a new user.
- `POST /users/login`: Login as a user.
- `GET /users/profile`: Get user profile (protected).
- `GET /users/logout`: Logout user.

### Captain Routes:

- `POST /captains/register`: Register a new captain.
- `POST /captains/login`: Login as a captain.
- `GET /captains/profile`: Get captain profile (protected).
- `GET /captains/logout`: Logout captain.

### Ride Routes:

- `POST /rides/create`: Create a new ride.
- `GET /rides/get-fare`: Get fare estimate.
- `POST /rides/confirm`: Confirm a ride (captain only).
- `GET /rides/start-ride`: Start a ride (captain only).
- `POST /rides/end-ride`: End a ride (captain only).

### Maps Routes:

- `GET /maps/get-coordinates`: Get coordinates for an address.
- `GET /maps/get-distance-time`: Get distance and travel time between locations.
- `GET /maps/get-suggestions`: Get location suggestions.