
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

# Theatre

> *Theatre is a lightweight, simple and fast javascript game framework.*

## Overview

Theatre game framework is built in plain javascrit. It helps you create games quickly.

This repository is a **demo on top of a generated Theatre game project**.

You could simply clone and install this demo to take a look at the lifecycle and how things works, but **we strongly recommand to generate and install your own new Theatre game project**.

## Installation

First, you'll need to use our Yeoman generator (see : [`generator-theatre`](https://github.com/theatrejs/generator-theatre)) to scaffold a new Theatre project.

#### Generate the project's structure

Start a console then run :

```
$ npm install -g yo
$ npm install -g generator-theatre@0.5.0
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

To start a development server, start a console then run :

```
$ npm start
```

It opens a new browser tab serving your game (*`webpack-dev-server` doesn't write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path.*).

## [Change Log](./CHANGELOG.md)

## [License](./LICENSE)
