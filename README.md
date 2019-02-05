# Bug example app with next-sass

## How to use

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Run production build with:

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## The idea behind the example

This example features:

* A bug with next routing and scss imports

This example demonstrates a bug with client-routing to pages that import
or have components that import scss files. If SSR occurs on a page with
scss imports, client-side routing works fine. If the SSR page does not
include any scss import, client-side routing then does not take place.

