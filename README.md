# Createxp Assignment

This project is a web application built using **Next.js** with **TypeScript**, **Tailwind CSS**, and **Prisma** for database management. It follows modern frontend development practices and leverages Radix UI for component styling.

## 🚀 Features

- **Next.js 15**: React-based framework for fast development.
- **TypeScript**: Strongly typed JavaScript for better development experience.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Prisma**: ORM for database management.
- **ESLint & Prettier**: Enforces code quality and formatting.
- **Radix UI**: Accessible UI component library.

## 📁 Project Structure

```
createxp-assignment/
│── app/                 # Main application logic
│── components/          # Reusable UI components
│── lib/                 # Utility functions and helpers
│── prisma/              # Database schema and Prisma configurations
│── types/               # TypeScript type definitions
│── next.config.ts       # Next.js configuration
│── tailwind.config.ts   # Tailwind CSS configuration
│── tsconfig.json        # TypeScript configuration
│── package.json         # Project dependencies and scripts
│── .gitignore           # Files to ignore in Git
│── eslint.config.mjs    # ESLint configuration
│── postcss.config.mjs   # PostCSS configuration
│── components.json      # Component-related configuration
│── README.md            # Project documentation
```

## 🛠 Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/kalpesh-d/createxp-assignment.git
   cd createxp-assignment
   ```

2. **Install dependencies**
   ```sh
   npm install
   # OR
   yarn install
   ```

3. **Setup environment variables**
   Create a `.env` file in the root directory and add necessary variables:
   ```sh
   DATABASE_URL="your_database_connection_string"
   ```

4. **Run database migrations**
   ```sh
   npx prisma migrate dev
   ```

5. **Start the development server**
   ```sh
   npm run dev
   ```

## 📜 Scripts

Available scripts in `package.json`:

- **`npm run dev`** - Start the development server.
- **`npm run build`** - Build the project for production.
- **`npm run start`** - Start the production server.
- **`npm run lint`** - Run ESLint checks.

## 📌 Technologies Used

**Next.js**: React framework for SSR & SSG
**TypeScript**: Typed JavaScript for safer code
**Prisma**: ORM for database operations
**Tailwind CSS**: Styling framework
**Radix UI**: Accessible components
