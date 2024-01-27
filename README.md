# Instructions:
Milestone 1:

- [X]  Create a card component and render static data.

Milestone 2:

- [X]  Make the card component reusable
- [X]  Render multiple cards with different data

Milestone 3:

- [X]  Create a new “My Tokens” page
- [X]  When clicking a card on the home page, add it to your “My Tokens” list
- [X]  Navigating to your My Tokens page should show you all your favourited tokens
- [X]  Use Zustand to persist the data across page loads

Milestone 4:

- [X]  Use the Coin Market Cap API (or similar) to pull dynamic data, limit the amount returned to 10 or 20, don’t worry about pagination.
- Here's the link to the docs: https://coinmarketcap.com/api/documentation/v1/
- Specifically this endpoint should be pretty handy: https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyListingsLatest
- Here’s an API key: `0cb61b43-fe49-42ce-8e3a-e030fb104f24`

Milestone 5:

- [ ]  Instead of using zustand to persist state, implement Mongo DB to store your “My Tokens” data.

Milestone 6:

- [X]  Add in the ability to delete/remove favourited items

# ReadMe

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
