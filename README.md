# MERN Food Ordering App - Backend

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation Instructions](#installation-instructions)
- [API Documentation](#api-documentation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [Contact](#contact)

## Project Description

The **MERN Food Ordering App Backend** serves as the server-side component of the MERN Food Ordering Application. It manages data operations, user authentication, and business logic, providing a robust API for the frontend to interact with. This backend is built with Node.js and Express.js, utilizing MongoDB for data storage.

## Features

- **User Authentication**: Secure user registration and login functionalities.
- **Restaurant Management**: CRUD operations for restaurants and their menus.
- **Order Processing**: Handle customer orders, including creation, updating, and tracking.
- **Payment Integration**: Manage payment processing through integrated payment gateways.
- **Data Validation**: Ensure data integrity and validation for all inputs.
- **Error Handling**: Comprehensive error handling and logging mechanisms.

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose (for MongoDB object modeling)
  - TypeScript
  - Auth0 (for authentication)
  - Stripe (for payment processing)
  - Cloudinary (for image storage)
- **Tools**:
  - Git & GitHub for version control
  - Visual Studio Code as the code editor
  - ESLint & Prettier for code quality and formatting

## Installation Instructions

Follow these steps to set up the backend project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Rohit8008/mern-food-ordering-app-backend.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd mern-food-ordering-app-backend
   ```

3. **Install Dependencies**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the required packages:

   ```bash
   npm install
   ```

4. **Configure Environment Variables**

   Create a `.env` file in the root directory and add the necessary environment variables as specified in the [Environment Variables](#environment-variables) section.

5. **Start the Development Server**

   ```bash
   npm run dev
   ```

   The backend server should now be running at `http://localhost:5000`.

## API Documentation

The backend provides a set of RESTful API endpoints for interacting with the application. Below is a brief overview of the available endpoints:

- **User Routes**:
  - `POST /api/users/register`: Register a new user.
  - `POST /api/users/login`: Authenticate a user and return a token.
  - `GET /api/users/profile`: Retrieve the authenticated user's profile.

- **Restaurant Routes**:
  - `GET /api/restaurants`: Retrieve a list of all restaurants.
  - `POST /api/restaurants`: Create a new restaurant.
  - `PUT /api/restaurants/:id`: Update an existing restaurant.
  - `DELETE /api/restaurants/:id`: Delete a restaurant.

- **Menu Routes**:
  - `GET /api/restaurants/:restaurantId/menu`: Retrieve the menu for a specific restaurant.
  - `POST /api/restaurants/:restaurantId/menu`: Add a new menu item.
  - `PUT /api/restaurants/:restaurantId/menu/:itemId`: Update a menu item.
  - `DELETE /api/restaurants/:restaurantId/menu/:itemId`: Delete a menu item.

- **Order Routes**:
  - `POST /api/orders`: Create a new order.
  - `GET /api/orders/:id`: Retrieve details of a specific order.
  - `PUT /api/orders/:id`: Update the status of an order.

For detailed information on request parameters and responses, please refer to the API documentation within the codebase.

## Usage

After setting up the backend server, you can:

1. **Test API Endpoints**: Use tools like [Postman](https://www.postman.com/) to test the API endpoints.
2. **Integrate with Frontend**: Connect the backend with the frontend application to enable full-stack functionality.
3. **Monitor Logs**: Check the console for server logs to monitor API requests and responses.

## Environment Variables

The application requires several environment variables for proper configuration. Create a `.env` file in the root directory and add the following variables:

```env
# MongoDB connection string
MONGO_CONNECTION_STRING=your_mongodb_connection_string

# Auth0 configuration
AUTH0_AUDIENCE=your_auth0_audience
AUTH0_ISSUER_BASE_URL=your_auth0_issuer_base_url

# Cloudinary configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Stripe configuration
STRIPE_API_KEY=your_stripe_api_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

Replace the placeholder values with your actual configuration details.

## Contribution Guidelines

Contributions are welcome! To contribute:

1. **Fork the Repository**

   Click the "Fork" button at the top-right corner of this page.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/your-username/mern-food-ordering-app-backend.git
   ```

3. **Create a New Branch**

   ```bash
   git checkout -b feature/YourFeatureName
   ```

4. **Make Your Changes**

   Implement your changes and commit them with clear and descriptive messages.

5. **Push to Your Fork**

   ```bash
   git push origin feature/YourFeatureName
   ```

6. **Create a Pull Request**

   Navigate to the original repository and click "Compare & pull request."

Please ensure your code adheres to the project's coding standards and includes necessary tests.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

For any inquiries or feedback, please contact:

- **Rohit Mittal**
- **LinkedIn**: [linkedin.com/in/rohit8001](https://linkedin.com/in/rohit8001)
- **GitHub**: [Rohit8008](https://github.com/Rohit8008)

---

Happy Coding! 🚀 
