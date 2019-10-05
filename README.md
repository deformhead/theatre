[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

# Theatre

> *Theatre is a lightweight, simple and fast javascript game framework.*

## Overview

Theatre game framework is built in plain javascrit. It helps you create games quickly.

> This repository is a **demo on top of a generated Theatre game project**.

> You could simply clone and install this demo to take a look at the lifecycle and how things works, but **we strongly recommand to generate and install your own new Theatre game project**.

## Table of contents

- [Installation](#installation)
    - [Generate the project's structure](#generate-the-projects-structure)
    - [Install the project](#install-the-project)
- [Usage](#usage)
    - [Quick start](#quick-start)
    - [Distribution](#distribution)
    - [Electron preview](#electron-preview)
    - [Production build](#production-build)
- [Tree structure](#tree-structure)
- [Asset structure](#asset-structure)
- [Scene structure](#scene-structure)
- [Context](#context)
- [Lifecycle](#lifecycle)
- [API](#api)

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

It opens a new browser tab serving your game from the [`dist/`](./dist/) folder (*[`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/) doesn't write any output files after compiling. Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path.*).

#### Distribution

To build your game in any possible way, you'll need to create a distribution of your game. Start a console then run :

```
$ npm run dist
```

It creates a prebuild of your game in the [`dist/`](./dist/) folder which will be used by the [Electron preview](#electron-preview) and/or by the [Production build](#production-build).

#### Electron preview

To see the preview of the desktop application build of your game (made with [Electron](https://electronjs.org/)), start a console then run :

```
$ npm run electron
```

It opens a new browser tab serving your game from the [`dist/`](./dist/) folder.

> **WARNING** : Don't forget to create/update the [distribution](#distribution) of your game before each [Electron](https://electronjs.org/) preview.

#### Production build

To build your game for production, start a console then run :

```
$ npm run build
```

It creates the production builds (executables) of your game in the [`build/`](./build/) folder.

> **INFO** : Feel free to check the [`package.json`](./package.json) file if you just want to generate executables on specific platforms.

> **WARNING** : Don't forget to create/update the [distribution](#distribution) of your game before each production build.

## Tree structure

In the root folder, you'll find this main tree structure :

```
docs/
|-- index.css
|-- index.html
'-- index.js
documentation/
'-- SGDD.md
sources/
|-- game/
|   |-- assets/
|   |-- components/
|   |-- scenes/
|   '-- systems/
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
|   |-- components/
|   |-- scenes/
|   '-- systems/
|-- theatre/
|   |-- core/
|   '-- modules/
'-- index.js
```

[`sources/theatre/`](./sources/theatre/) - The framework (the [`core`](./sources/theatre/core/) and useful [`modules`](./sources/theatre/modules/)).

[`sources/game/`](./sources/game/) - All your source files (all [`assets`](./sources/game/assets/), [`components`](./sources/game/components/), [`scenes`](./sources/game/scenes/) and [`systems`](./sources/game/systems/)).

[`sources/index.js`](./sources/index.js) - The entry point of your game with your presets.

#### Dist folder

The [`dist/`](./dist/) folder contains the prebuild of your game :

```
dist/
|-- electron.js
|-- index.css
|-- index.html
|-- index.js
|-- index.js.map
'-- package.json
```

[`dist/electron.js`](./dist/electron.js) - The entry point for the [Electron](https://electronjs.org/) build.

[`dist/index.js`](./dist/index.js) - The build ([production build](#production-build)) of your game.

[`dist/index.js.map`](./dist/index.js.map) - The sourcemaps of your game.

[`dist/index.html`](./dist/index.html) - The default HTML5 preview for your game.

[`dist/index.css`](./dist/index.css) - The default style of the preview of your game.

[`dist/package.json`](./dist/package.json) - The entry point for the [Electron](https://electronjs.org/) build.

#### Docs folder

The [`docs/`](./docs/) folder contains your game preview :

```
docs/
|-- index.css
|-- index.html
|-- index.js
'-- index.js.map
```

[`docs/index.js`](./docs/index.js) - The build ([production build](#production-build)) of your game.

[`docs/index.js.map`](./docs/index.js.map) - The sourcemaps of your game.

[`docs/index.html`](./docs/index.html) - The default HTML5 preview for your game.

[`docs/index.css`](./docs/index.css) - The default style of the preview of your game.

#### Documentation folder

The [`documentation/`](./documentation/) folder contains the documentation for your game :

```
documentation/
'-- SGDD.md
```

[`documentation/SGDD.md`](./documentation/SGDD.md) - The template of the Short Game Design Document for your game (this is a short version of the usual Game Design Document).

## Asset structure

For instance, an asset is defined with the following format :

```javascript
const asset = {

    'name': 'hero',
    'scope': 'common',
    'source': require('./<path-to-image>/hero.png'),
    'type': 'image'
};
```

###### Details :

| key      | type                                      | description          |
| -------- | ----------------------------------------- | -------------------- |
| `name`   | `string`                                  | name of your asset   |
| `scope`  | `string`                                  | scope of your asset  |
| `source` | `mixed`                                   | source of your asset |
| `type`   | `string of ['dataset', 'image', 'sound']` | source of your asset |

###### Usage :

Theatre will expose a getter function for your asset in `this.assets.<type>s.<scope>.<name>`.

An example for a sound :

```javascript
const blastGetter = this.assets.sounds.common.blast;

// plays simultaneously the same sound as many times as you want
blastGetter().play();
blastGetter().play();
```

> **WARNING** : It's better for a sound to be played **each time** from a **fresh call** of its `getter()` function because of the `Web Audio API` which is not able to play **more than once at a time** the same song.

## Scene structure

> *Scenes are the place where you'll work most of the time.*

A scene is a group of the following methods :

`setup` *(called when the scene boots)* - Put there everything (event listeners, variable declarations, states...) you'll need to access during the entire scene lifecycle (especially when the scene restarts).

`start` *(called when the scene starts or restarts)* - Initialize there the data of the scene.

`update` *(called each update tick)* - Update there the data of the scene (update the logic of your game when time passes).

`render` *(called each render tick)* - Draw and redraw there (using data created in the `start` method then updated in the `update` method) each entity you'll need to render in the scene (update the display of your game when time passes).

`destroy` *(called just before the next scene boots)* - Destroy there everything created in the `setup` method to prevent spaming the next scene.

## Context

> Theatre binds its context on each of your methods of your scenes.

Everywhere in your scenes, if you call `this`, you'll refer to current instance of Theatre. This is very convenient to simplify your workflow and to keep access to Theatre's data and methods at all time.

## Lifecycle

> *Theatre's lifecycle is really simple.*

#### Running the first scene: `loading` scene
> All assets are loading (async) during `loading` scene's lifecycle. When all assets are loaded, Theatre sets its [`preloading`](#preloading) property to `true`.

- Theatre boots `loading` scene (its `setup` then `start` methods are called).
- Theatre's game loop starts running (async) `update` and `render` methods of  `loading` scene.

```
THEATRE                   LOADING SCENE
,--------------------,    ,-----------,
| setup scene <------|----|-- setup   |
| start scene <------|----|-- start   |
| ,----------------, |    |           |
| | update loop <--|-|----|-- update  |
| '----------------' |    |           |
| ,----------------, |    |           |
| | render loop <--|-|----|-- render  |
| '----------------' |    |   destroy |
'--------------------'    '-----------'
```

#### Switch to the next scene

> To switch from current scene to the next you'll have to call Theatre's [`load()`](#load) method in current scene's `update` method with the next scene as parameter.

- Once current scene's `update` method ends (from current update tick), current scene is destroyed (its `destroy` method is called).
- The new scene is now defined as the current scene.
- This new scene boots (its `setup` then `start` methods are called).
- Theatre's game loop continue as before (but now running the new scene's `update` and `render` methods).

#### Restart current scene

> To restart current scene you'll have to call Theatre's [`restart()`](#restart) method in current scene's `update` method.

- Once current scene's `update` method ends (from current update tick), current scene is restarted (its `start` method is called).

## API

| method                          | description                               |
| ------------------------------- | ----------------------------------------- |
| [`constructor()`](#constructor) | creates an instance of the Theatre module |
| [`load()`](#load)               | switches to another scene of your game    |
| [`restart()`](#restart)         | restarts current scene of your game       |

| property                    | description                                                                   |
| --------------------------- | ----------------------------------------------------------------------------- |
| [`assets`](#assets)         | gives you access to the contents of your game assets once loaded              |
| [`container`](#container)   | gives you access to the DOM container of your game                            |
| [`context`](#context)       | gives you access to the `canvas` context of your game                         |
| [`delta`](#delta)           | gives you access to the elapsed time between each tick of Theatre's game loop |
| [`element`](#element)       | gives you access to the DOM element of the `canvas`                           |
| [`loop`](#loop)             | gives you access to the game loop                                             |
| [`preloading`](#preloading) | lets you know when assets are preloaded                                       |
| [`scene`](#scene)           | gives you access to current scene module                                      |
| [`scenes`](#scenes)         | gives you access to your game scenes modules                                  |
| [`size`](#size)             | gives you access to your game `canvas` size                                   |
| [`state`](#state)           | gives you access to an object you can use through scenes in your game         |
| [`version`](#version)       | gives you access to the Theatre version of your game                          |

---

#### `constructor()`

Creates an instance of the Theatre module ([`sources/theatre/core/theatre.js`](./sources/theatre/core/theatre.js)).

###### Usage :

```javascript
new Theatre({

    'assets': assets,
    'container': document.body,
    'expose': true,
    'framerate': 60,
    'scenes': scenes,
    'sharp': true,
    'size': {

        'width': 320,
        'height': 288
    },
    'speed': 1
});
```

###### Properties :

| property  | name     | type     | description                     |
| --------- | -------- | -------- | ------------------------------- |
| parameter | `config` | `object` | the configuration for your game |

###### Details :

The `config` object allows you to set the defaults of your Theatre game. You can find below the full documentation of this `config` object.

| key         | type               | mandatory | default | description                                                                      |
| ----------- | ------------------ | --------- | ------- | -------------------------------------------------------------------------------- |
| `assets`    | `array`            | yes       |         | definition of your game assets                                                   |
| `container` | `DOM object`       | yes       |         | DOM container for the canvas to append                                           |
| `expose`    | `boolean`          | no        | false   | should the Theatre context be exposed in the browser (useful when debugging)     |
| `framerate` | `positive integer` | no        | 60      | number of updates per second of the logic of your game                           |
| `scenes`    | `object`           | yes       |         | your game scenes                                                                 |
| `sharp`     | `boolean`          | no        | false   | should the game have a sharp rendering (great for pixel art)                     |
| `size`      | `object`           | yes       |         | define there the `size.width` and `size.height` (positive integers) of your game |
| `speed`     | `positive number`  | no        | 1       | define here the speed factor of the logic of your game                           |

---

#### `load()`

Switches to another scene of your game.

###### Usage :

During the lifecycle of your game, in the `update` method, call Theatre's `load()` method :

```javascript
this.load(scene);
```

> Once current scene's `update` method ends (from current update tick), and not before, Theatre switches to the next scene.

###### Properties :

| property  | name    | type     | description          |
| --------- | ------- | -------- | -------------------- |
| parameter | `scene` | `string` | a scene of your game |

---

#### `restart()`

Restarts current scene of your game.

###### Usage :

During the lifecycle of your game, in the `update` method, call Theatre's `restart()` method :

```javascript
this.restart();
```

> Once current scene's `update` method ends (from current update tick), and not before, Theatre restarts current scene.

---

#### `assets`

Gives you access to the contents of your game assets once loaded (based from their definition).

###### Usage :

For instance, an asset is defined with the following format (then passed into your array of assets in the Theatre constructor in `config.assets`) :

```javascript
const asset = {

    'name': 'hero',
    'scope': 'common',
    'source': require('./<path-to-image>/hero.png'),
    'type': 'image'
};
```

Theatre will expose your asset's loaded content in `this.assets.<type>s.<scope>.<name>` :

```javascript
// gets the hero image
const hero = this.assets.images.common.hero;
```

> Note that an `s` is concatenated to the `type` string in `this.assets.<type>s.<scope>.<name>`.

---

#### `container`

Gives you access to the DOM container of your game.

###### Usage :

```javascript
// gets your game DOM container
const container = this.container;
```

---

#### `context`

Gives you access to the `canvas` context of your game.

###### Usage :

```javascript
// gets the canvas context of your game
const context = this.context;
```

---

#### `delta`

Gives you access to the elapsed time between each (render and update) tick of Theatre's game loop.

###### Usage :

```javascript
// gets an object with elapsed time between each (render and update) tick
const delta = this.delta;
```

###### Details :

The `delta` object allows you to perform animations in your game using its values.

| key      | type              | description                                                 |
| -------- | ----------------- | ----------------------------------------------------------- |
| `render` | `positive number` | elapsed time (ms) since the last `render` method was called |
| `update` | `positive number` | elapsed time (ms) since the last `update` method was called |

---

#### `element`

Gives you access to the DOM element of the `canvas`.

###### Usage :

```javascript
// gets the DOM element of the canvas
const element = this.element;
```

---

#### `loop`

Gives you access to the game loop of your game.

###### Usage :

```javascript
// speed up your game logic
this.loop.speed *= 2;

// change your game logic framerate
this.loop.framerate = 30;
```

> This is convenient for debugging purpose.

---

#### `preloading`

Lets you know when assets are preloaded.

> You'll want to use it to switch from the loading scene to a scene requiring assets.

###### Usage :

```javascript
// if assets are preloaded...
if (this.preloaded === true) {

    // ...then boot to the main scene
    this.load('main');
}
```

---

#### `scene`

Gives you access to current scene module.

###### Usage :

```javascript
// gets current scene module
const scene = this.scene;
```

---

#### `scenes`

Gives you access to your game scenes modules.

###### Usage :

```javascript
// gets Theatre default scene module
const loading = this.scenes.loading;

// gets one of your <custom> scene module
const <custom> = this.scenes.<custom>;
```

---

#### `size`

Gives you access to your game `canvas` size.

###### Usage :

```javascript
// gets your game width
const width = this.size.width;

// gets your game height
const height = this.size.height;
```

> You'll want to use the `size` object to render your entities centered to the screen, for instance.

###### Details :

The `size` object allows you to use a dynamic size.

| key      | type               | description                             |
| -------- | ------------------ | --------------------------------------- |
| `height` | `positive integer` | the height of the `canvas` of your game |
| `width`  | `positive integer` | the width of the `canvas` of your game  |

---

#### `state`

Gives you access to an object you can use through scenes in your game.

###### Usage :

```javascript
// sets a property of your game
this.state.score = 0;
```

---

#### `version`

Gives you access to the Theatre version of your game.

> This is convenient for debugging purpose.

###### Usage :

```javascript
// gets the current Theatre version of your game (like '1.0.0')
const version = this.version;
```

## [Change Log](./CHANGELOG.md)

## [License](./LICENSE)
