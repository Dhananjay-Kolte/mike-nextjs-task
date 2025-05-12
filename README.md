# Next.js Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- Modern Next.js 14 with App Router
- TypeScript support
- Tailwind CSS for styling
- Responsive design
- Server-side rendering capabilities
- API routes support

## Screenshots

### With side bar
![Home Page](./Pictures/Screenshots/with-side-bar.png)

### without side bar
![Mobile View](./Pictures/Screenshots/without-side-bar.png)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18.17 or later)
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/              # App router directory
├── components/       # Reusable components
├── public/          # Static assets
├── styles/          # Global styles
└── types/           # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run start` - Runs the production build
- `npm run lint` - Runs ESLint
- `npm run type-check` - Runs TypeScript type checking

## Environment Variables

Create a `.env.local` file in the root directory and add your environment variables:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
