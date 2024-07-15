# DCoin - A simple demo of a cryptocurrency exchange

## How to run this project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

-   Implement blockchain with proof of work. Checkout in `src/services/blockchain.ts`
-   Implement login and register, store user data, along with `publicKey` and `privateKey` in database.
-   Create a page to show user's info. Checkout in `src/app/(routes)/me/page.tsx` or go to [http://localhost:3000/me](http://localhost:3000/me)
-   Create a page to show to blocks. Checkout in `src/app/(routes)/blocks/page.tsx` or go to [http://localhost:3000/blocks](http://localhost:3000/blocks)
-   Create a page to show to transactions. Checkout in `src/app/(routes)/transactions/page.tsx` or go to [http://localhost:3000/transactions](http://localhost:3000/transactions)
