---
title: "Next-Redux Boilerplate"
description: "Opinionated Next.js+Redux project boilerplate for building super-performant SSR React websites."
category: "Open Source"
link: "https://github.com/hcorta/next-boilerplate"
bannerImage: "https://raw.githubusercontent.com/hcorta/next-redux-boilerplate/main/public/cover.png"
tags:
    - Next
    - React
    - Redux
---

# Features

- 🔥 **SSR** – [Next](https://nextjs.org) for Static Site Generator.
- ⚛️ **State Management** – [Redux](https://react-redux.js.org) for managing and centralizing application state.
- ⌛️ **Async Logic** – [Thunks](https://github.com/reduxjs/redux-thunk) for asynchronous logic that interacts with the Redux store
- 🗳 **Persisting State** – [Redux Persist](https://github.com/rt2zz/redux-persist) for persist and rehydrate the Redux store
- � **Integrated testing** – [Jest](https://jestjs.io/) for creating, running, and structuring tests.
- ⚙️ **Bundle Analyzer** – [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) for anaylizing builds.
- 🎨 **Styles/Components lib** – Unopinionated! Why? 👉 [Read this](#Styles)

![https://raw.githubusercontent.com/hcorta/next-redux-boilerplate/main/public/cover.png](https://raw.githubusercontent.com/hcorta/next-redux-boilerplate/main/public/cover.png)

## Motivation

**Redux** is one of the de facto library for managing large single-state React applications.

Setting up Redux for static apps is rather simple: a single Redux store has to be created and provided to all pages. When Next.js static site generator or server side rendering is involved, however, things start to get complicated.

This is where this boilerplate comes in handy, bringing Next.js and Redux together.

The primary aim of this project is to eliminate all preliminary setup with one simple install so you can focus in developing your application.

<aside>
⚠️ Please, note that this template is intended for **building medium-large applications with complex state management**. If that is not your case, you'll probably be OK with some of the [examples provided by the Next.js team](https://github.com/vercel/next.js/tree/canary/examples).

</aside>

## Installation

1. Create a repo in your profile via the "Use this template" option.

2. Install dependencies

```bash
yarn
```

## Usage

### Project structure

The basic structure of the project is provided in the following way. No configuration needed, just the files you need to build your app.

```bash
├── README.md                *# README file*
├── .babelrc                 *# Babel configuration*
├── .eslintignore            *# Eslint ignore config*
├── .gitignore               *# Git ignore config*
├── .prettierignore          *# Prettier ignore config*
├── .prettierrc              *# Prettier configuration*
├── jest.config.js           *# Jest configuration*
├── next.config.js           *# Next configuration*
├── public                   *# Public folder*
│   ├── manifest.json
│   └── favicon.ico
└── src
├── components           *# Components for the app*
├── constants            *# Global constants*
├── helpers              *# Reused logic across the app*
├── hooks                *# State logic for components*
├── HOCs                 *# Wrapped logic for components*
├── pages                *# Next JS pages*
└── styles               *# Global CSS files*
```

### Redux Architecture

This architecture for the redux management is inspired in [this proposal](https://github.com/alexnm/re-ducks) by [Alex Moldovan](https://github.com/alexnm), where he revisits the [original ducks modular approach proposal](https://github.com/erikras/ducks-modular-redux).

Basically, the initial single-duck-file approach might become hard to maintain and read when building medium-large scale codebases. To solve this issues, we use duck folders, instead of duck files.

Here's how a **duck** folder would look like:

```bash
duck/
├── actions.js
├── index.js
├── operations.js
├── reducers.js
├── selectors.js
├── tests.js
├── types.js
└── utils.js
```

NOTE: Each concept/module from your app will have a similar folder.

<aside>
⚠️ If you are interested in knowing more about the reasons behind this organization, you may [read this article](https://betterprogramming.pub/scaling-your-redux-app-with-ducks-6115955638be#.4ppptx7oq).

</aside>

### Styles

No custom solution for styling has been included in this boilerplate. The reason is simple: there is wide range of options (SASS, Tailwinds, JSS, Emotion, etc) for styling React apps nowadays, and it is difficult to choose one that fits in every pocket.

**Since everyone has her personal preference, I have decided not to include any option and leave that decision to be taken by the dev.**

### Commands

```bash
- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
```

## Contributing

No one’s perfect. If you’ve found any errors, want to suggest enhancements, or expand on a topic, please feel free to open an Issue or collaborate by PR.

## Code of Conduct

[Contributor Code of Conduct](public/docs/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## License

**@hcorta/next-boilerplate** is open source software licensed as MIT.
