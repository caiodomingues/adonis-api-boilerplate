# AdonisJS API Boilerplate

<div align="center">
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&style=flat-square&color=5e17eb&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/github/license/caiodomingues/adonis-api-boilerplate?style=flat-square&color=5e17eb&labelColor=000000">
</div>

<div align="center">
  <sub>Created by <a href="https://twitter.com/caiodomingues">Caio Domingues</a></sub>
</div>

## Features

- ⚡️ AdonisJS 5.4
- 📥 Lucid ORM
- 🔐 Adonis Auth (Sessions, Basic Auth, API Tokens)
- ⛑ TypeScript
- 📏 ESLint — Find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- ⚙️ CORS Production-only
- ⚙️ EditorConfig - Maintain consistent coding styles across editors and IDEs\
- ⚙️ Resource Command - Create a resource file for your model and customize endpoint responses

## Quick Start

The best way to start with this template is using cloning the repo:

```bash
git clone https://github.com/caiodomingues/adonis-api-boilerplate.git
```

Since this boilerplate is a quickstart, you will need to configure Lucid ORM and Auth. Please make sure to do it in that order:

```bash
# select your options and follow the instructions for each database driver.
node ace configure @adonisjs/lucid
```

Make sure to edit your `.env` file with your database connection information.

```bash
# select your options and follow the instructions
node ace configure @adonisjs/auth

node ace migration:run
```

### Development

After installing dependencies with your favorite package manager, start the project locally by running:

```bash
yarn dev
# or
npm run dev
# or even
node ace serve --watch
```

Open `http://localhost:3333` with your browser to see the result. If you want to use a different port, just change the `PORT` variable in `.env` file.

#### Having troubles with CORS?

This boilerplate defines CORS active state by a function that returns `true` when the application is running in production.

Check `config/cors.ts` file and change the function to return false or uncomment the line up above to disable CORS.

## Documentation

### Requirements

- Node.js >= 14.0.0
- Your favorite package manager (i.e: npm, yarn)

### Scripts

- `yarn dev` — Starts the application in development mode at `http://localhost:3333`.
- `yarn build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
- `yarn lint` — Runs ESLint.
- `yarn format` — Runs Prettier.

### Switch to npm

By default, this starter uses Yarn, but this choice is yours. If you'd like to switch to npm, delete the `yarn.lock` file, install the dependencies with `npm install`.

### Removing unwanted dependencies

You don't need to use Lucid? Or maybe you don't need to use Auth? Feel free to remove it! This boilerplate is right before the configuration commands, so any unnecessary code trails won't be left behind.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.
