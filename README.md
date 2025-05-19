# Assignment5DSolutions

This is a Node.js backend server application built with **Express**, **TypeScript**, and **MongoDB**. It includes features like file uploads, user authentication, and data validation using Joi.


## Features

- RESTful API using Express
- File upload handling with Multer
- User authentication using JWT
- Request validation with Joi
- MongoDB integration using Mongoose
- Environment variable management with dotenv
- Modular folder structure
- TypeScript with custom error handling and interfaces

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Assignment5DSolutions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and configure your environment variables:
   ```bash
   cp .env.example .env
   ```

4. Build the TypeScript code:
   ```bash
   npm run build
   ```

5. Start the server:
   ```bash
   npm run start
   ```

## Scripts

- `npm run build` - Compiles TypeScript into the `build` folder
- `npm run start` - Runs the built server using Node.js

## Project Structure

```
Assignment5DSolutions/
├── src/
│   ├── modules/
│   │   ├── auth/               # Authentication logic
│   │   └── upload/             # File upload logic
│   ├── config/                 # DB and environment configs
│   ├── handler/                # Error and response handlers
│   ├── interfaces/            # TypeScript interfaces
│   ├── middleware/            # Middleware functions
│   └── models/                # Mongoose models
├── build/                     # Compiled JS output
├── .env.example               # Example environment config
├── package.json
├── tsconfig.json
└── server.ts                 # Entry point
```

## Environment Variables

Make sure to define the following variables in your `.env` file:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/your-db
SECRET_KEY=your_jwt_secret
SALT_ROUND= 10
```

## License

ISC