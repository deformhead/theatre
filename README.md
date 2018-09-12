
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

# Theatre

> *Theatre is a lightweight, simple and fast javascript game framework.*

## Overview

Theatre game framework is built in plain javascrit. It helps you create games quickly.

This repository is a Ready-To-Use demo. It helps you understand how to generate, install and start a Theatre game.

## Installation

First, you'll need to use our Yeoman generator (see : [`generator-theatre`](https://github.com/theatrejs/generator-theatre)) to scaffold a new Theatre project.

#### Generate the project's structure

Start a console then run :

```
$ npm install -g yo
$ npm install -g generator-theatre@0.3.0
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

## Usage

We have created a `demo` scene to help you understand Theatre lifecycle.

#### Quick start

Start bundling the game running :

```
$ npm start
```

It creates the [`index.js`](./docs/index.js) file (your game bundled) in development mode.

Take a look at the full demo opening the [`index.html`](./docs/index.html) file in your browser.

## [Change Log](./CHANGELOG.md)

## [License](./LICENSE)
