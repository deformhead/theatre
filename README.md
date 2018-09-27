[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

# Theatre

> *Theatre is a lightweight, simple and fast javascript game framework.*

## Overview

Theatre game framework is built in plain javascrit. It helps you create games quickly.

> This repository is a **demo on top of a generated Theatre game project**.

> You could simply clone and install this demo to take a look at the lifecycle and how things works, but **we strongly recommand to generate and install your own new Theatre game project**.

## Installation

First, you'll need to use our [Yeoman](http://yeoman.io/) generator (see : [`generator-theatre`](https://github.com/theatrejs/generator-theatre)) to scaffold a new Theatre project.

#### Generate the project's structure

Start a console then run :

```
$ npm install -g yo
$ npm install -g generator-theatre
```

Create the folder for your new project :

```
$ mkdir <your-game>
```

Then, generate your project in this new folder :

```
$ cd <your-game>
$ yo theatre
```

Once you've done scaffolding your project, you'll need to install the project's dependencies.

#### Install the project

Start a console then run :

```
$ npm install
```

A `postinstall` NPM script executes a [production build](#production-build) of your game.

## Usage

We have created a `demo` scene to help you understand Theatre lifecycle.

#### Quick start

To start a development server, start a console then run :

```
$ npm start
```

It opens a new browser tab serving your game from the [`docs/`](./docs/) folder (*[`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/) doesn't write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path.*).

#### Production build

To build your game for production, start a console then run :

```
$ npm run build
```

It creates a production build of your game in the [`docs/`](./docs/) folder (the [`docs/index.js`](./docs/index.js) file).

## Tree structure

In the root folder, you'll find this main tree structure :

```
docs/
|-- index.css
|-- index.html
'-- index.js
sources/
|-- game/
|   |-- assets/
|   '-- scenes/
|-- theatre/
|   |-- core/
|   '-- modules/
'-- index.js
webpack.<config>.js
```

#### Configuration files

You'll find there three [Webpack](https://webpack.js.org/) configuration files (files like `webpack.<config>.js`) :

[`webpack.common.js`](./webpack.common.js) - Webpack configuration for both `development` and `production` environments.

[`webpack.development.js`](./webpack.development.js) - Webpack configuration for `development` environment.

[`webpack.production.js`](./webpack.production.js) - Webpack configuration for `production` environment.

#### Sources folder

The [`sources/`](./sources/) folder contains the code base for your game :

```
sources/
|-- game/
|   |-- assets/
|   '-- scenes/
|-- theatre/
|   |-- core/
|   '-- modules/
'-- index.js
```

[`sources/theatre/`](./sources/theatre/) - The framework (the [`core`](./sources/theatre/core/) and useful [`modules`](./sources/theatre/modules/)).

[`sources/game/`](./sources/game/) - All your source files (all [`assets`](./sources/game/assets/) and [`scenes`](./sources/game/scenes/)).

[`sources/index.js`](./sources/index.js) - The entry point of your game with your presets.

#### Build folder

The [`docs/`](./docs/) folder contains your game preview :

```
docs/
|-- index.css
|-- index.html
'-- index.js
```

[`docs/index.js`](./docs/index.js) - The build ([production build](#production-build)) of your game.

[`docs/index.html`](./docs/index.html) - The default HTML5 preview for your game.

[`docs/index.css`](./docs/index.css) - The default style of the preview of your game.

## [Change Log](./CHANGELOG.md)

## [License](./LICENSE)
