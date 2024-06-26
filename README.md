1:50:23

# Spider Academy

## Mind map based courses platform

This project is based on [Web Prodigies](https://youtu.be/XkOXNlHJP6M?si=H6pGw4kVxh41F5n7) video.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Start Prisma

We are using PostgreSQL as database at [neon.tech](https://neon.tech/).

Initialize Prisma ORM with the `init` command or the Prisma CLI:

```bash
npx prisma init
```

First run to spin up all the migration schemas

```bash
npx prisma generate
```

Now push the database to Neon Tech

```bash
npx prisma push
```

to generate Prisma Client.

To monitor your database through local GUI run:

Initialize Prisma ORM with the `init` command or the Prisma CLI:

```bash
npx prisma studio
```

Confirm if your database tables are correct at `http://localhost:5555/`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
