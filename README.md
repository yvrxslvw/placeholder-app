# Placeholder Application

This application was created to self-improve some techniques such as:
* [Feature-Sliced Design](https://feature-sliced.design)
* [Redux Toolkit & RTK Query](https://redux-toolkit.js.org)

The application is based on the service [jsonPlaceholder](https://jsonplaceholder.typicode.com) using some mock data to complete pages.

## Used technologies

* Vite
* React
* TypeScript
* Sass
* Axios (for dynamic data in the store)
* Redux Toolkit
* Classnames
* Compose-function
* Feature-Sliced Design (Architectural methodology)

## Installing for npm

```
npm install
npm run dev
```

## Installing for yarn

```
yarn
yarn dev
```

## Folder structure

```
src/ ──┐
       ├ app/ ┐ - Application entry point layer
       |      |
       |      ├ providers/ - Application providers such as store, router etc...
       |      ├ store/ - Redux store
       |      ├ index.tsx - Entry point with providers
       |      ├ style.scss - Global styles
       |      ├ types.d.ts - Global types
       |
       ├ entities/ ┐ - Business-entities with logic
       |           |
       |           ├ index.ts - Slice provider
       |           ├ slice/ ┐
       |                    |
       |                    ├ index.ts - Segment provider
       |                    ├ api/ - Segment API functions
       |                    ├ models/ - Segment models & stores
       |                    ├ UI/ - Segment UI-library
       |
       ├ features/ ┐ - Some actions from client
       |           |
       |           ├ index.ts - Slice provider
       |           ├ slice/ ┐
       |                    |
       |                    ├ index.ts - Segment provider
       |                    ├ api/ - Segment API functions
       |                    ├ models/ - Segment models & stores
       |                    ├ UI/ - Segment UI-library
       |
       ├ pages/ ┐ - Application pages
       |        |
       |        ├ index.ts - Slice provider
       |        ├ page/ ┐
       |        |       |
       |        |       ├ index.tsx - Page UI
       |        |       ├ style.module.scss - Page styles
       |        |       
       |        ├ .../  ┐
       |
       ├ shared/ ┐ - Reusable functionality
       |         |
       |         ├ index.ts/ - Slice provider
       |         ├ api/ - API instances
       |         ├ assets/ - Static elements like images, icons etc
       |         ├ constants/ - Constants
       |         ├ hooks/ - Hooks
       |         ├ models/ - Models
       |         ├ store/ - Root store, root action etc...
       |         ├ styles/ - Styles, variables, mixins
       |         ├ UI/ - UI-library
       |
       ├ widgets/ ┐ - Full blocks for pages
       |          |
       |          ├ index.ts - Slice provider
       |          ├ slice/ ┐
       |                   |
       |                   ├ index.ts - Segment provider
       |                   ├ api/ - Segment API functions
       |                   ├ models/ - Segment models & stores
       |                   ├ UI/ - Segment UI-library
       |
       ├ index.tsx - Main application entry point
```

## Authors

- [@yvrxslvw](https://github.com/yvrxslvw)
