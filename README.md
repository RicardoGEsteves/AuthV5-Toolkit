# Auth.js V5 Toolkit

> **(UPDATE)** - with the latest dependencies updates, you will have to do some small config changes.

A comprehensive toolkit template repository tailored to assist in integrating advanced custom authentication into your Next.js applications using Auth.js V5. It demonstrates both client-side and server-side aspects and approaches.

## Table of Contents

- [Overview](#overview)
- [Concept](#concept)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Demo Images](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributions](#contributions)
- [License](#license)

## Overview

Auth.js V5 Toolkit is a specialized toolkit designed to streamline the process of implementing sophisticated and customizable authentication mechanisms within Next.js applications. It provides a solid foundation and structure to integrate Auth.js V5 seamlessly. It's designed to provide a robust and scalable solution for managing user authentication in web applications.

## Concept

The concept behind this toolkit is to create a scalable and maintainable solution for managing user authentication. It's designed with a modular approach, where each feature is encapsulated in its own module, making it easy to add, remove, or modify features.

> - **Client-Side Implementation:**
>   The client-side implementation includes client components and API calls. These components are responsible for rendering the user interface and interacting with the user. The API calls are used to communicate with the server, sending requests and receiving responses.

> - **Server-Side Implementation:**
>   The server-side implementation includes server actions and server components. Server actions handle the business logic, such as user registration, login, and authentication. Server components are responsible for rendering server-side views.

> - **Parallel Routes:**
>   The toolkit uses parallel routes to demonstrate a client and a server component rendering the same information with different approaches. This showcases the flexibility and versatility of the toolkit in handling different rendering strategies.

> - **User Registration and Login:**
>   The toolkit provides users with the ability to register and login with credentials or providers like Google and GitHub. This makes it easy for users to start using the application with their existing accounts.

> - **Two-Factor Authentication and Email Confirmation:**
>   The toolkit includes two-factor authentication for added security. This requires users to provide two forms of identification when logging in, such as a password and a verification code sent to their phone.

> - In addition, the toolkit includes **email confirmation and validation**. After registering, users receive an email with a link to confirm their account. This helps to verify that the email address provided by the user is valid and belongs to them.

## Key Features

- **Next.js & React:** Utilize Next.js and React for efficient server-side rendering and interactive UI.
- **TypeScript:** Ensure type safety and enhance code quality with TypeScript.
- **TailwindCSS:** Employ a utility-first CSS framework for rapid UI development and customization.
- **Auth.js V5 & OAuth 2:** Implement advanced authentication features using Auth.js V5 and OAuth 2 for secure authentication flows.
- **Prisma & PostgreSQL:** Leverage Prisma ORM with PostgreSQL for efficient database management and queries.
- **Shadcn-ui:** Utilize UI components from Shadcn-ui for visually appealing interfaces.
- **Bcryptjs:** Implement secure password hashing using Bcrypt for enhanced security.
- **React-hook-form & React-icons:** Manage forms efficiently and use icons for a better user experience.
- **Resend & Sonner:** Manage asynchronous tasks and scheduling effectively.
- **Zod:** Ensure data validation with Zod's schema-first approach.
- **Server Actions:** Implement server actions for authentication flows and providers.

- **Authentication Flows:** Implement authentication flows for sign up, sign in, sign out, forgot password, and reset password.
- **Authentication Providers:** Integrate authentication with credentials, OAuth 2, Google and Github providers, and refresh tokens.
- **Authentication Callbacks:** For JSON Web Tokens as they allow you to implement access controls without a database and to integrate with external databases or APIs.
- **Authentication Events:** Asynchronous functions that do not return a response, to handling any other side-effects.
- **Authentication Pages:** For handling Sign in, Sign out, Email Verification and displaying error messages.

## Tech Stack

- TypeScript
- React
- Next.js
- TailwindCSS
- Auth.js V5
- OAuth 2
- Prisma
- PostgreSQL
- Shadcn-ui
- Bcryptjs
- React-hook-form
- React-icons
- Resend
- Sonner
- Zod

## Demo Images

- Home Page
  ![Home Page](/public/demo-images/home.png)
- Login Page
  ![Login](/public/demo-images/login.png)
- Register Page
  ![Register](/public/demo-images/register.png)
- Settings Page Example
  ![Settings](/public/demo-images/settings.png)
- Settings Page Example Enable Two-Factor Authentication
  ![Settings](/public/demo-images/2FA.png)
- Admin Page Example, Authorized with two Parallel Routes
  ![Admin](/public/demo-images/adminAuthorized.png)
- Admin Page Example, Unauthorized with two Parallel Routes
  ![Admin](/public/demo-images/adminNotAuthorized.png)
- Parallel Routes
  ![Parallel Routes](/public/demo-images/parallelRoutes.png)
- Client Page Example with 2FA Disabled
  ![Client](/public/demo-images/client.png)
- Client Page Example with 2FA Enabled
  ![Client](/public/demo-images/2faEnabled.png)
- Server Page Example with 2FA Disabled
  ![Server](/public/demo-images/server.png)
- Mobile Navigation
  ![Mobile Navigation](/public/demo-images/mobileNavigation.png)
- Logout Dropdown

  ![Logout](/public/demo-images/logout.png)

- LoggedIn with Providers
  ![Logout](/public/demo-images/loggedInWithProviders.png)

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Configure the environment variables required for Auth.js V5 and Prisma setup.
5. Start the application with `npm run dev`.

## Usage

1. Access the application via the provided URL.
2. Implement advanced custom authentication into your Next.js application using the toolkit's structured approach.
3. Leverage the provided features and libraries to enhance your authentication mechanisms.

## Environment Variables

```bash
DATABASE_URL=
DIRECT_URL=

AUTH_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

RESEND_API_KEY=

NEXT_PUBLIC_APP_URL=
```

## Contributions

Contributions are encouraged! Get in touch to contributing to this project.

## License

This project is licensed under the [MIT License](LICENSE).
