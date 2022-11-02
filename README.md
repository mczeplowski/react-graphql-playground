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

## How run e2e tests

Development:

```bash
npm run e2e
# or
yarn e2e
```

You can also run it using scripts from `package.json` like `cypress` or `cypress:headless`,
but you have to remember to have running app(`dev` or `build` + `start`).

## How run unit/integration tests

```bash
npm run test
# or
yarn test
```

## Code quality

- prettier
- eslint
- husky
- lint-staged

## Project structure

- /pages
- /modules - place for domain related stuff
- /config
- /components - place for shared components
- /generated - codegen's types

In `/src` directory we have page's tests(`__tests__` dir), to avoid it we could have separated custom directory for pages and just import them in `/pages` files.
