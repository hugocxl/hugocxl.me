---
title: 'Next-Redux Boilerplate'
description: 'Opinionated Next.js+Redux project boilerplate for building super-performant SSR React websites.'
date: '2021'
category: 'Open Source'
link: 'https://github.com/hcorta/next-boilerplate'
bannerImage: '/img/portfolio/next-redux-boilerplate.png'
tags:
  - Next
  - React
  - Redux
---


**Redux** is one of the de facto libraries for managing large single-state React applications.

## Motivation

Setting up Redux for static apps is rather simple: a single Redux store has to be created and provided to all pages. When Next.js static site generator or server side rendering is involved, however, things start to get complicated.

This is where this boilerplate comes in handy, bringing Next.js and Redux together.

The primary aim of this project is to eliminate all preliminary setup with one simple install so you can focus in developing your application.

> ⚠️ Please, note that this template is intended for **building medium-large applications with complex state management**. If that is not your case, you'll probably be OK with some of the [examples provided by the Next.js team](https://github.com/vercel/next.js/tree/canary/examples).

## Features

- 🔥 **SSR** – [Next](https://nextjs.org) for Static Site Generator.
- ⚛️ **State Management** – [Redux](https://react-redux.js.org) for managing and centralizing application state.
- ⌛️ **Async Logic** – [Thunks](https://github.com/reduxjs/redux-thunk) for asynchronous logic that interacts with the Redux store
- 🗳 **Persisting State** – [Redux Persist](https://github.com/rt2zz/redux-persist) for persist and rehydrate the Redux store
- � **Integrated testing** – [Jest](https://jestjs.io/) for creating, running, and structuring tests.
- ⚙️ **Bundle Analyzer** – [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) for anaylizing builds.
- 🎨 **Styles/Components lib** – Unopinionated! Why? 👉 [Read this](#Styles)

***

More info about this project:

- 🐙 [GitHub](https://github.com/hcorta/next-redux-boilerplate)
