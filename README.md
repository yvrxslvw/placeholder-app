# Placeholder Application

This application was created to self-improve some techniques such as:
* [🍰Feature-Sliced Design](https://feature-sliced.design)
* [Redux Toolkit](https://redux-toolkit.js.org)

The application is based on the service [jsonPlaceholder](https://jsonplaceholder.typicode.com) using some mock data to complete pages.

## Used technologies

* [Vite](https://vitejs.dev/)
* [React](https://es.react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Sass](https://sass-lang.com/)
* [Redux Toolkit](https://redux-toolkit.js.org)
* [Classnames](https://www.npmjs.com/package/classnames)
* [Compose-function](https://www.npmjs.com/package/compose-function)
* [🍰Feature-Sliced Design (Architectural design methodology)](https://feature-sliced.design)

## Installing for npm

```shell
npm install
npm run dev
```

## Installing for yarn

```shell
yarn
yarn dev
```

## Folder structure

```
└── src/
    ├── app/                          # LAYER: Application entry point
    |     ├── providers/              # Providers, e.g. router, store, etc...
    |     ├── store/                  # Global application store
    |     ├── index.tsx               # Entry component with providers
    |     └── types.d.ts              # Some types
    |
    ├── entities/                     # LAYER: Business-entities with some logic
    |     ├── todo/                   # SLICE: One todo-card
    |     |    ├── model/             # SEGMENT: Redux slice and actions
    |     |    ├── UI/                # SEGMENT: Todo-card UI-component
    |     |    └── index.ts           # Slice provider
    |     └── index.ts                # Entities provider
    |
    ├── features/                     # LAYER: Some actions with entities
    |     ├── todo/                   # SLICE: Toggle todo-completed button
    |     |    ├── toggle-completed/  # SEGMENT: Todo toggle completed feature
    |     |    └── index.ts           # Slice provider
    |     └── index.ts                # Features provider
    |
    ├── pages/                        # LAYER: Application pages
    |     ├── main-page/              # Main page
    |     ├── todos-page/             # Todos page
    |     ├── index.tsx               # Router component
    |     └── routes.tsx              # Route array
    |
    ├── shared/                       # LAYER: Reused components, functions, hooks, etc...
    |     ├── api/                    # API models for each entity
    |     ├── constants/              # Some global constants
    |     ├── helpers/                # Some global helper-functions
    |     ├── hooks/                  # Some global hooks
    |     ├── models/                 # Some global models
    |     ├── styles/                 # Global styles and style-variables
    |     ├── UI/                     # Global UI-library
    |     └── index.ts                # Shared provider
    |
    ├── widgets/                      # LAYER: Full blocks for inserting to some page
    |     ├── todo/                   # SLICE: Todos block
    |     |    ├── lib/               # SEGMENT: Some helpers
    |     |    ├── UI/                # SEGMENT: Block UI-component
    |     |    └── index.ts           # Slice provider
    |     └── index.ts                # Widgets provider
    |
    └── index.tsx                     # Rendering the application
```

## Authors

- [@yvrxslvw](https://github.com/yvrxslvw)
