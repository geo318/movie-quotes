<img src="readme/assets/mq.png" style="width:1500px">

# Movie Quotes
The SPA of movie quotes utilizes nextJS as a frontend framework and Laravel api as a backend.
Using this api Users can upload movies and quotes, share them to others, and communicate with comments and likes.
<br>

The website implements SSR and is optimized to even support SEO and generally a good user experience. 

With this app:
<br>

* You can login with multiple emails and manage user account, upload avatar, change passwords, emails etc. User can also authorize via gmail.
<br> 

* You can add, view, update or delete Movies and favorite quotes.
Infinite scroll is implemented to see other users' quotes and have fun.
<br>

* Movie Quotes also lets users see realtime notifications - comments and likes that other users left. 
<br>

##
## Table of Contents
* [Prerequisites](#prerequisites)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Development](#development)
* [Resources](#resources)
* [Project structure](#project-structure)

##
## Prerequisites
* <img src="readme/assets/nodejs.png" width="30" style="position: relative; top: 7px" /> *Node JS @12.X and up*
* <img src="readme/assets/yarn.png" width="30" style="position: relative; top: 8px" /> *Yarn @1.X and up*
* <img src="readme/assets/npm.png" width="30" style="position: relative; top: 3px" /> *npm @6 and up*
* <img src="readme/assets/ts.png" width="30" style="position: relative; top: 10px" /> *TypeScript@4.X and up*

##
## Tech Stack
* [NextJS@12.x](https://nextjs.org/) - React Framework
* [Tailwind Css@3.x](https://tailwindcss.com/) - CSS framework
* [Zod@3.x](https://zod.dev/) - TypeScript-first schema validation
* [React Hook Form@7.x](https://react-hook-form.com/) - Form validator
* [React Query@3.x](https://tanstack.com/query/latest) - data synchronization for React
* [Redux Toolkit@8.x](https://redux-toolkit.js.org/) - Toolset for efficient Redux development
* [Pusher@8.x](https://pusher.com/) - API for realtime communication with backend
* [Laravel Echo@1.x](https://laravel-livewire.com/docs/2.x/laravel-echo) - Laravel Echo provides real-time functionality to web-pages using WebSockets.

##
## Getting Started
1. Clone Covid repository from github:
```bash
 git clone https://github.com/RedberryInternship/lomidze-epic-movie-quotes-front.git
```
2. Next step requires you to run npm install to download all the dependencies:
```bash
 npm install
```
4. Now we need to set .env file. Go to the root of your project and execute this command.
```bash
cp .env.local.example .env.local
```
##
## Development
You can run development server by executing:
```bash
npm run dev
```
##
## Design Resource
* [Figma design](https://www.figma.com/file/5uMXCg3itJwpzh9cVIK3hA/Movie-Quotes-Bootcamp-assignment?node-id=5134%3A33290&t=g8Re9fGoWibBsQsL-0) - Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.
##
## Project structure

```sh
.github
   |   workflows
   |   |-- deploy.yml
components
   |-- Admin
   |   |-- admin-components
   |   |   |-- component-name.tsx
   |-- Auth
   |-- Home
   |-- icons
   |   |-- index.ts
   |   |-- Icon.tsx
   |-- shared
   |   |-- SharedComponents
   |   |   |-- component-names.tsx
   |   |   |-- component-hooks.ts
   |   |   |-- index.ts
   |   |   |-- types.d.ts
   |   |-- index.ts
   |-- index.ts
helpers
   |-- helper-names.ts
   |-- index.ts
hooks
   |-- hook-names.ts
   |-- index.ts
pages
   |-- Admin
   |   |   movies
   |   |   |   movie
   |   |   |   |-- [id].tsx
   |   |   profile
   |   |   |-- index.tsx
   |   |-- index,tsx
   |-- _app.tsx
   |-- _document.tsx
   |-- 403.tsx
   |-- 404.tsx
   |-- index.tsx
public
   |-- assets
   |   |   fonts
   |   |   images
   |   locales
   |   |   en
   |   |   en
   |-- favicon.ico
schemas
   |-- file-name.ts
   |-- index.ts
services
   |-- axios.ts
   |-- index.ts
   |-- echo.ts
   |-- services.ts
styles
   |-- globals.css
tailwind.config.js
tsconfig.json
types
   |-- index.ts
   |-- module-name.d.ts
next-env.d.ts
next.config.js
next-18next.config.js
package-lock.json
package.json
tailwind.config.js
tsconfing.js
.env.example
.eslintrc.json
.gitignore
.prettierrc.json
```