# Achievera 🚀

![Achievera](./public/assets/achievera-showcase.png)

Achievera is a simple and powerful app designed to help you track your daily achievements and goals. 🌟 Celebrate your wins, big or small, and stay motivated on your journey to success.

## ✨ Features

- **🎯 Create Goals and Achievements**: Easily set and track your daily goals and achievements.
- **⏰ Daily Reminders**: Get daily reminders to log your accomplishments.
- **🖥️ User-Friendly Interface**:A clean and intuitive interface for a seamless experience.

## 👀 Live Preview

Check out the live preview of Achievera: [Live Demo](https://achievera.vercel.app)

## 🚀 Technologies Used

- NextJS
- TailwindCSS
- Zod
- Prisma
- PostgreSQL
- Husky
- Sentry

## 🛠️ Requirements

Before you begin, ensure you have met the following requirements:

- ✅ [Node.js](https://nodejs.org/) installed
- ✅ [pnpm](https://pnpm.io) package manager installed
- ✅ A [PostgreSQL](https://www.postgresql.org/) database is needed in order for the project to work.

## 📦 Installation

To install Achievera you need to follow the next steps:

1. Clone this repository to your local machine.

2. Install the required dependencies using `pnpm`:

```bash
pnpm install
```

3. Create the env files in both web and backend apps:

- Copy the `.env.example` file to `.env` and then modify:

```bash
cp .env.example .env
```

1. Fill out the recently created env files with proper data as your requirements:

.env

```bash
# App Config
NEXT_PUBLIC_URL='http://localhost:3000'
NEXTAUTH_URL='http://localhost:3000'

# Auth Config
NEXTAUTH_SECRET='authsecret'
GITHUB_APP_CLIENT_ID='githubid'
GITHUB_APP_CLIENT_SECRET='githubsecret'

# Database
POSTGRES_PRISMA_URL='postgresql://postgres:password@localhost:5432/achievera'
```

1. Start the development server by using the following command:

```bash
pnpm dev
```

1. Open your web browser and navigate to `http://localhost:3000`.

## 🤝 Contributing

Contributions are welcome! If you find any bugs or have suggestions for new features, please feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the [MIT License](./LICENSE.md).
