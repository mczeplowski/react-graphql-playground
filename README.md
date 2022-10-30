This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Environment variables setup

You have to create a `.env.local` file with one environment variable: `NEXT_PUBLIC_GITHUB_ACCESS_TOKEN`.
Value for this variable will be Github's personal access token (classic).
https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql

## How run app

Development:

```bash
npm run dev
# or
yarn dev
```

Production version:

```bash
npm run build && npm start
# or
yarn build && yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
