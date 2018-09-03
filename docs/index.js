/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return World; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return System; });
function Entity(name, components) {

    function add(components) {

        components.forEach((component) => {

            this.components[component.name] = component;
        });
    }

    function get(component) {

        return this.components[component];
    }

    function has(components) {

        for (let iterator = 0, length = components.length; iterator < length; iterator += 1) {

            const component = components[iterator];

            if (this.components.hasOwnProperty(component) === false) {

                return false;
            }
        }

        return true;
    }

    function remove(components) {

        for (let iterator = 0, length = components.length; iterator < length; iterator += 1) {

            const component = components[iterator];

            if (this.components.hasOwnProperty(component) === true) {

                delete this.components[component];
            }
        }
    }

    this.components = {};
    this.name = name;

    this.add = add;
    this.get = get;
    this.has = has;
    this.remove = remove;

    this.add(components)
}

function System(components, handler) {

    function update(entities) {

        entities.forEach((entity) => {

            if (entity.has(components) === true) {

                handler(entity);
            }
        });
    }

    this.update = update;
}

function World() {

    function add(entity) {

        this.entities.push(entity);
    }

    function get(entity) {

        for (let iterator = 0, length = this.entities.length; iterator < length; iterator += 1) {

            const current = this.entities[iterator];

            if (current.name === entity) {

                return current;
            }
        }
    }

    function remove(entity) {

        this.entities.splice(this.entities.indexOf(entity), 1);
    }

    this.entities = [];

    this.add = add;
    this.get = get;
    this.remove = remove;
}




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animation; });
function Animation(frames, framerate) {

    this.name = 'animation';

    this.framerate = framerate || 8;
    this.frames = frames;

    this.frame = 0;
    this.current = this.frames[this.frame];
    this.elapsed = 0;
}




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
function Image(image, size, frame) {

    this.name = 'image';

    this.image = image;
    this.size = size;
    this.frame = frame;
}




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Direction; });
function Direction(direction) {

    this.name = 'direction';

    this.direction = direction;
}




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spritesheet; });
function Spritesheet(spritesheet) {

    this.name = 'spritesheet';

    this.spritesheet = spritesheet;
}




/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_theatre_js__ = __webpack_require__(6);


new __WEBPACK_IMPORTED_MODULE_0_core_theatre_js__["a" /* Theatre */]({

    'container': document.body,
    'expose': true,
    'framerate': 60,
    'loading': 'loading',
    'opening': 'demo',
    'sharp': true,
    'size': {

        'width': 320,
        'height': 288
    }
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Theatre; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_canvas_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_loop_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_preload_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assets_index_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scenes_index_js__ = __webpack_require__(18);








function Theatre(config) {

    const {container, loading, opening, size} = config;

    const expose = config.expose || false;
    const framerate = config.framerate || 60;
    const sharp = config.sharp || false;

    let next = null;

    function initialize() {

        const canvas = new __WEBPACK_IMPORTED_MODULE_0_core_canvas_js__["a" /* Canvas */]('2d', 'theatre', size.width, size.height);

        if (sharp === true) {

            canvas.sharp();
        }

        container.appendChild(canvas.element);

        this.container = container;
        this.context = canvas.context;
        this.element = canvas.element;

        this.assets = {};
        this.delta = {};
        this.delta.render = 0;
        this.delta.update = 0;

        this.scene = this.scenes[loading];
        this.scene.setup.call(this);
        this.scene.start.call(this);

        const loop = new __WEBPACK_IMPORTED_MODULE_1_core_loop_js__["a" /* Loop */](framerate);

        loop.update((timeframe) => {

            this.delta.update = timeframe;
            this.scene.update.call(this);

            if (next !== null) {

                this.scene.destroy.call(this);
                this.scene = this.scenes[next];
                this.scene.setup.call(this);
                this.scene.start.call(this);

                next = null;
            }
        });

        loop.render((timeframe) => {

            this.delta.render = timeframe;
            this.scene.render.call(this);
        });

        Object(__WEBPACK_IMPORTED_MODULE_2_core_preload_js__["a" /* preload */])(__WEBPACK_IMPORTED_MODULE_3_assets_index_js__["a" /* assets */], (assets) => {

            assets.forEach((asset) => {

                if (typeof this.assets[asset.type + 's'] === 'undefined') {

                    this.assets[asset.type + 's'] = {};
                }

                if (typeof this.assets[asset.type + 's'][asset.scope] === 'undefined') {

                    this.assets[asset.type + 's'][asset.scope] = {};
                }

                this.assets[asset.type + 's'][asset.scope][asset.name] = asset.content;
            });

            this.scene.destroy.call(this);

            this.preloaded = true;

            this.scene = this.scenes[opening];
            this.scene.setup.call(this);
            this.scene.start.call(this);
        });
    }

    function load(scene) {

        next = scene;
    }

    function restart() {

        this.scene.start.call(this);
    }

    this.preloaded = false;
    this.scenes = __WEBPACK_IMPORTED_MODULE_4_scenes_index_js__;
    this.size = size;

    this.load = load;
    this.restart = restart;

    initialize.call(this, config);

    if (expose === true) {

        window.theatre = this;
    }
}

// exports current module as an object



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Canvas; });
function Canvas(type, identifier, width, height) {

    const element = document.createElement('canvas');
    const context = element.getContext(type);

    function sharp() {

        this.element.style.imageRendering = '-moz-crisp-edges';
        this.element.style.imageRendering = '-webkit-crisp-edges';
        this.element.style.imageRendering = 'crisp-edges';
        this.element.style.imageRendering = 'pixelated';
        this.context.imageSmoothingEnabled = false;
    }

    element.setAttribute('id', identifier);
    element.setAttribute('height', height);
    element.setAttribute('width', width);

    this.context = context;
    this.element = element;
    this.sharp = sharp;
}

// exports current module as an object



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loop; });
function Loop(framerate) {

    const timeframe = 1000 / framerate;

    let elapsedTime = 0;
    let framed = false;
    let lastRender = null;
    let lastUpdate = null;

    function render(handler) {

        const currentRender = Date.now();

        if (framed !== false) {

            handler(currentRender - lastRender);
        }

        // call user's render handler on each available frame
        requestAnimationFrame(this.render.bind(this, handler));

        framed = true;
        lastRender = currentRender;
    }

    function update(handler) {

        const currentUpdate = Date.now();

        if (lastUpdate !== null) {

            // define elapsed time since last update
            elapsedTime += currentUpdate - lastUpdate;
        }

        // call user's update handler matching timeframe and fixing browser time handling
        while (elapsedTime >= timeframe) {

            // define elapsed time since last user's update handler matching timeframe
            elapsedTime -= timeframe;

            handler(timeframe);
        }

        // call user's update handler matching timeframe
        setTimeout(this.update.bind(this, handler), timeframe);

        lastUpdate = currentUpdate;
    }

    this.render = render;
    this.update = update;
}

// exports current module as an object



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return preload; });
function preload(assets, handler) {

    let promises = [];

    // preloads each asset
    assets.forEach(function (asset) {

        // creates a promise for current asset preloading
        const promise = new Promise(function (resolve, reject) {

            // if current asset is a dataset then preload it
            if (asset.type === 'dataset') {

                asset.content = asset.source;

                resolve(asset);
            }

            // if current asset is an image then preload it
            if (asset.type === 'image') {

                const image = new Image();

                image.src = asset.source;

                // when current image is loaded then resolve current promise
                image.onload = function () {

                    asset.content = image;

                    resolve(asset);
                };
            }

            // if current asset is a sound then preload it
            else if (asset.type === 'sound') {

                const sound = new Audio(asset.source);

                // when current sound is loaded then resolve current promise
                sound.oncanplaythrough = function () {

                    asset.content = sound;

                    resolve(asset);
                };
            }
        });

        promises.push(promise);
    });

    // call user's success handler when all assets are preloaded
    Promise.all(promises).then(handler);
}

// exports current module as a function



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assets; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datasets_index_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_index_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sounds_index_js__ = __webpack_require__(17);




const assets = [

    ...__WEBPACK_IMPORTED_MODULE_0__datasets_index_js__["a" /* datasets */],
    ...__WEBPACK_IMPORTED_MODULE_1__images_index_js__["a" /* images */],
    ...__WEBPACK_IMPORTED_MODULE_2__sounds_index_js__["a" /* sounds */]
];




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return datasets; });
const datasets = [

    {
        'name': 'font',
        'scope': 'demo',
        'source': __webpack_require__(12),
        'type': 'dataset'
    },
    {
        'name': 'wizard',
        'scope': 'demo',
        'source': __webpack_require__(13),
        'type': 'dataset'
    }
];




/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {"0":[0,8],"1":[1,8],"2":[2,8],"3":[3,8],"4":[4,8],"5":[5,8],"6":[6,8],"7":[7,8],"8":[8,8],"9":[9,8],"f":[5,7],"p":[15,7],"s":[18,7],":":[22,8]}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {"IDLE_UP":[3,0],"IDLE_RIGHT":[3,1],"IDLE_DOWN":[3,2],"IDLE_LEFT":[3,3],"RUN_UP":[[0,0],[1,0],[2,0],[3,0]],"RUN_RIGHT":[[0,1],[1,1],[2,1],[3,1]],"RUN_DOWN":[[0,2],[1,2],[2,2],[3,2]],"RUN_LEFT":[[0,3],[1,3],[2,3],[3,3]]}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return images; });
const images = [

    {
        'name': 'font',
        'scope': 'demo',
        'source': __webpack_require__(15),
        'type': 'image'
    },
    {
        'name': 'wizard',
        'scope': 'demo',
        'source': __webpack_require__(16),
        'type': 'image'
    }
];




/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sounds; });
const sounds = [];




/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_index_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_index_js__ = __webpack_require__(25);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "loading", function() { return __WEBPACK_IMPORTED_MODULE_0__loading_index_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return __WEBPACK_IMPORTED_MODULE_1__demo_index_js__; });







/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return destroy; });
function destroy() {

    console.log('destroy loading scene' + ((this.preloaded === false) ? ' -> assets are loaded' : ''));
    console.log('-------');
}




/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render() {

    // console.log('render loading scene');

    this.context.fillStyle = '#181a1f';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    if (this.preloaded === false) {

        this.context.font = '16px Courier New';
        this.context.textAlign = 'start';
        this.context.textBaseline = 'top';
        this.context.fillStyle = '#6b717d';
        this.context.fillText('/ Theatre', 8, 8);
        this.context.fillStyle = '#d7dae0';
        this.context.fillText('$ loading assets...', 8, 32);
    }
}




/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
function setup() {

    console.log('setup loading scene');
}




/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
function start() {

    console.log('start loading scene' + ((this.preloaded === false) ? ' -> loading assets...' : ''));
}




/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
function update() {

    // console.log('update loading scene');
}




/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__destroy_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_js__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return __WEBPACK_IMPORTED_MODULE_0__destroy_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_1__render_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return __WEBPACK_IMPORTED_MODULE_2__setup_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return __WEBPACK_IMPORTED_MODULE_3__start_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return __WEBPACK_IMPORTED_MODULE_4__update_js__["a"]; });









/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return destroy; });
function destroy() {

    console.log('destroy demo scene');

    this.keyboard.destroy();

    delete this.inputs;
    delete this.world;

    delete this.keyboard;
    delete this.systems;

    console.log('-------');
}




/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
function render() {

    // console.log('render demo scene');

    this.context.fillStyle = '#a8c0b0';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.systems.framerate.update.call(this, this.world.entities);
    this.systems.image.update.call(this, this.world.entities);
    this.systems.text.update.call(this, this.world.entities);
}




/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_systems_common_animate_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_systems_common_image_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_systems_common_reframe_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_systems_demo_framerate_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_systems_demo_input_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_systems_demo_text_js__ = __webpack_require__(38);












function setup() {

    console.log('setup demo scene');

    this.inputs = [];

    this.keyboard = new __WEBPACK_IMPORTED_MODULE_0_modules_keyboard_js__["a" /* Keyboard */]([__WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["d" /* UP */], __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["c" /* RIGHT */], __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["a" /* DOWN */], __WEBPACK_IMPORTED_MODULE_1_modules_keycodes_js__["b" /* LEFT */]], this.inputs);

    this.systems = {

        'framerate': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['framerate'], __WEBPACK_IMPORTED_MODULE_6_systems_demo_framerate_js__["a" /* framerate */].bind(this)),
        'image': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['image', 'position'], __WEBPACK_IMPORTED_MODULE_4_systems_common_image_js__["a" /* image */].bind(this)),
        'text': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['alphabet', 'position'], __WEBPACK_IMPORTED_MODULE_8_systems_demo_text_js__["a" /* text */].bind(this)),

        'animate': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['animation'], __WEBPACK_IMPORTED_MODULE_3_systems_common_animate_js__["a" /* animate */].bind(this)),
        'input': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['input'], __WEBPACK_IMPORTED_MODULE_7_systems_demo_input_js__["a" /* input */].bind(this)),
        'reframe': new __WEBPACK_IMPORTED_MODULE_2_modules_world_js__["b" /* System */](['animation', 'image'], __WEBPACK_IMPORTED_MODULE_5_systems_common_reframe_js__["a" /* reframe */].bind(this))
    };
}




/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keyboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keynames_js__ = __webpack_require__(30);


function Keyboard(codes, inputs) {

    const names = [];
    const states = {};

    function blur() {

        for (let state in states) {

            if (states.hasOwnProperty(state)
            && states[state] === true) {

                states[state] = false;

                inputs.push({

                    'type': 'KEYBOARD',
                    'action': state,
                    'state': 'UP'
                });
            }
        }
    }

    function destroy() {

        removeEventListener('blur', blur);
        removeEventListener('keydown', keydown);
        removeEventListener('keyup', keyup);
    }

    function keydown(event) {

        const code = event.keyCode;
        const index = codes.indexOf(code);

        if (index !== -1
        && states[names[index]] === false) {

            event.preventDefault();

            states[names[index]] = true;

            inputs.push({

                'type': 'KEYBOARD',
                'action': names[index],
                'state': 'DOWN'
            });
        }
    }

    function keyup(event) {

        const code = event.keyCode;
        const index = codes.indexOf(code);

        if (index !== -1
        && states[names[index]] === true) {

            event.preventDefault();

            states[names[index]] = false;

            inputs.push({

                'type': 'KEYBOARD',
                'action': names[index],
                'state': 'UP'
            });
        }
    }

    function setup() {

        addEventListener('blur', blur);
        addEventListener('keydown', keydown);
        addEventListener('keyup', keyup);
    }

    codes.forEach((code) => {

        if (typeof __WEBPACK_IMPORTED_MODULE_0__keynames_js__["a" /* keynames */][code] !== 'undefined') {

            const name = 'KEY_' + __WEBPACK_IMPORTED_MODULE_0__keynames_js__["a" /* keynames */][code];

            codes.push(code);
            names.push(name);

            states[name] = false;
        }
    });

    setup.call(this);

    this.destroy = destroy;
    this.setup = setup;
}

// exports current module as an object



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return keynames; });
const keynames = [];

keynames[9] = 'TAB';
keynames[13] = 'ENTER';
keynames[16] = 'SHIFT';
keynames[17] = 'CTRL';
keynames[18] = 'ALT';
keynames[27] = 'ESC';
keynames[32] = 'SPACE';

keynames[37] = 'LEFT';
keynames[38] = 'UP';
keynames[39] = 'RIGHT';
keynames[40] = 'DOWN';

keynames[48] = 'ZERO';
keynames[49] = 'ONE';
keynames[50] = 'TWO';
keynames[51] = 'THREE';
keynames[52] = 'FOUR';
keynames[53] = 'FIVE';
keynames[54] = 'SIX';
keynames[55] = 'SEVEN';
keynames[56] = 'EIGHT';
keynames[57] = 'NINE';

keynames[65] = 'A';
keynames[66] = 'B';
keynames[67] = 'C';
keynames[68] = 'D';
keynames[69] = 'E';
keynames[70] = 'F';
keynames[71] = 'G';
keynames[72] = 'H';
keynames[73] = 'I';
keynames[74] = 'J';
keynames[75] = 'K';
keynames[76] = 'L';
keynames[77] = 'M';
keynames[78] = 'N';
keynames[79] = 'O';
keynames[80] = 'P';
keynames[81] = 'Q';
keynames[82] = 'R';
keynames[83] = 'S';
keynames[84] = 'T';
keynames[85] = 'U';
keynames[86] = 'V';
keynames[87] = 'W';
keynames[88] = 'X';
keynames[89] = 'Y';
keynames[90] = 'Z';

// exports current module as an array



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TAB */
/* unused harmony export ENTER */
/* unused harmony export SHIFT */
/* unused harmony export CTRL */
/* unused harmony export ALT */
/* unused harmony export ESC */
/* unused harmony export SPACE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOWN; });
/* unused harmony export ZERO */
/* unused harmony export ONE */
/* unused harmony export TWO */
/* unused harmony export THREE */
/* unused harmony export FOUR */
/* unused harmony export FIVE */
/* unused harmony export SIX */
/* unused harmony export SEVEN */
/* unused harmony export EIGHT */
/* unused harmony export NINE */
/* unused harmony export A */
/* unused harmony export B */
/* unused harmony export C */
/* unused harmony export D */
/* unused harmony export E */
/* unused harmony export F */
/* unused harmony export G */
/* unused harmony export H */
/* unused harmony export I */
/* unused harmony export J */
/* unused harmony export K */
/* unused harmony export L */
/* unused harmony export M */
/* unused harmony export N */
/* unused harmony export O */
/* unused harmony export P */
/* unused harmony export Q */
/* unused harmony export R */
/* unused harmony export S */
/* unused harmony export T */
/* unused harmony export U */
/* unused harmony export V */
/* unused harmony export W */
/* unused harmony export X */
/* unused harmony export Y */
/* unused harmony export Z */
const TAB = 9;
const ENTER = 13;
const SHIFT = 16;
const CTRL = 17;
const ALT = 18;
const ESC = 27;
const SPACE = 32;

const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;

const ZERO = 48;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;
const SEVEN = 55;
const EIGHT = 56;
const NINE = 57;

const A = 65;
const B = 66;
const C = 67;
const D = 68;
const E = 69;
const F = 70;
const G = 71;
const H = 72;
const I = 73;
const J = 74;
const K = 75;
const L = 76;
const M = 77;
const N = 78;
const O = 79;
const P = 80;
const Q = 81;
const R = 82;
const S = 83;
const T = 84;
const U = 85;
const V = 86;
const W = 87;
const X = 88;
const Y = 89;
const Z = 90;




/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animate; });
function animate(entity) {

    const animationComponent = entity.get('animation');

    if (animationComponent.frames.length > 1) {

        animationComponent.elapsed += this.delta.update;

        const duration = 1000 / animationComponent.framerate;

        while (animationComponent.elapsed >= duration) {

            animationComponent.elapsed -= duration;
            animationComponent.frame = (animationComponent.frame === animationComponent.frames.length - 1) ? 0 : animationComponent.frame + 1;
            animationComponent.current = animationComponent.frames[animationComponent.frame];
        }
    }
}




/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return image; });
function image(entity) {

    const imageComponent = entity.get('image');
    const positionComponent = entity.get('position');

    this.context.drawImage(

        imageComponent.image,
        imageComponent.frame[0] * imageComponent.size[0], imageComponent.frame[1] * imageComponent.size[1], imageComponent.size[0], imageComponent.size[1],
        positionComponent.x, positionComponent.y, imageComponent.size[0], imageComponent.size[1]
    );
}




/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reframe; });
function reframe(entity) {

    entity.get('image').frame = entity.get('animation').current;
}




/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return framerate; });
function framerate(entity) {

    const framerateComponent = entity.get('framerate');

    framerateComponent.elapsed += this.delta.render;
    framerateComponent.frames += 1;

    if (framerateComponent.elapsed >= 1000) {

        entity.get('text').text = 'fps:' + Math.round(framerateComponent.frames * 1000 / framerateComponent.elapsed);
        framerateComponent.elapsed = 0;
        framerateComponent.frames = 0;
    }
}




/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return input; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_common_animation_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_common_image_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_demo_direction_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_demo_run_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_demo_spritesheet_js__ = __webpack_require__(4);







function input(entity) {

    this.inputs.forEach((input) => {

        const directionComponent = entity.get('direction');
        const imageComponent = entity.get('image');
        const inputComponent = entity.get('input');
        const spritesheetComponent = entity.get('spritesheet');

        if (inputComponent.inputs.indexOf(input.action) !== -1
        && input.state === 'DOWN') {

            switch (input.action) {

                case 'KEY_UP':

                    entity.add([

                        new __WEBPACK_IMPORTED_MODULE_3_components_demo_run_js__["a" /* Run */](),
                        new __WEBPACK_IMPORTED_MODULE_2_components_demo_direction_js__["a" /* Direction */]('UP'),
                        new __WEBPACK_IMPORTED_MODULE_0_components_common_animation_js__["a" /* Animation */](spritesheetComponent.spritesheet['RUN_UP'])
                    ]);

                break;

                case 'KEY_RIGHT':

                    entity.add([

                        new __WEBPACK_IMPORTED_MODULE_3_components_demo_run_js__["a" /* Run */](),
                        new __WEBPACK_IMPORTED_MODULE_2_components_demo_direction_js__["a" /* Direction */]('RIGHT'),
                        new __WEBPACK_IMPORTED_MODULE_0_components_common_animation_js__["a" /* Animation */](spritesheetComponent.spritesheet['RUN_RIGHT'])
                    ]);

                break;

                case 'KEY_DOWN':

                    entity.add([

                        new __WEBPACK_IMPORTED_MODULE_3_components_demo_run_js__["a" /* Run */](),
                        new __WEBPACK_IMPORTED_MODULE_2_components_demo_direction_js__["a" /* Direction */]('DOWN'),
                        new __WEBPACK_IMPORTED_MODULE_0_components_common_animation_js__["a" /* Animation */](spritesheetComponent.spritesheet['RUN_DOWN'])
                    ]);

                break;

                case 'KEY_LEFT':

                    entity.add([

                        new __WEBPACK_IMPORTED_MODULE_3_components_demo_run_js__["a" /* Run */](),
                        new __WEBPACK_IMPORTED_MODULE_2_components_demo_direction_js__["a" /* Direction */]('LEFT'),
                        new __WEBPACK_IMPORTED_MODULE_0_components_common_animation_js__["a" /* Animation */](spritesheetComponent.spritesheet['RUN_LEFT'])
                    ]);

                break;
            }
        }

        else if (entity.has(['run']) === true
        && inputComponent.inputs.indexOf(input.action) !== -1
        && input.state === 'UP') {

            switch (input.action) {

                case 'KEY_UP':

                    if (directionComponent.direction === 'UP') {

                        entity.remove(['animation', 'run']);
                        imageComponent.frame = spritesheetComponent.spritesheet['IDLE_UP'];
                    }

                break;

                case 'KEY_RIGHT':

                    if (directionComponent.direction === 'RIGHT') {

                        entity.remove(['animation', 'run']);
                        imageComponent.frame = spritesheetComponent.spritesheet['IDLE_RIGHT'];
                    }

                break;

                case 'KEY_DOWN':

                    if (directionComponent.direction === 'DOWN') {

                        entity.remove(['animation', 'run']);
                        imageComponent.frame = spritesheetComponent.spritesheet['IDLE_DOWN'];
                    }

                break;

                case 'KEY_LEFT':

                    if (directionComponent.direction === 'LEFT') {

                        entity.remove(['animation', 'run']);
                        imageComponent.frame = spritesheetComponent.spritesheet['IDLE_LEFT'];
                    }

                break;
            }
        }
    });
}




/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Run; });
function Run() {

    this.name = 'run';
}




/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return text; });
function text(entity) {

    const alphabetComponent = entity.get('alphabet');
    const positionComponent = entity.get('position');
    const spritesheetComponent = entity.get('spritesheet');
    const textComponent = entity.get('text');

    textComponent.text.split('').forEach((character, index) => {

        this.context.drawImage(

            alphabetComponent.image,
            spritesheetComponent.spritesheet[character][0] * alphabetComponent.size[0], spritesheetComponent.spritesheet[character][1] * alphabetComponent.size[1], alphabetComponent.size[0], alphabetComponent.size[1],
            positionComponent.x + index * alphabetComponent.size[0], positionComponent.y, alphabetComponent.size[0], alphabetComponent.size[1]
        );
    });
}




/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return start; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_world_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_common_animation_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_common_image_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_common_position_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_demo_alphabet_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_demo_direction_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_demo_framerate_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components_demo_input_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_demo_spritesheet_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_components_demo_text_js__ = __webpack_require__(44);













function start() {

    console.log('start demo scene');

    this.inputs.length = 0;
    this.world = new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["c" /* World */]();

    this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('hero', [

        new __WEBPACK_IMPORTED_MODULE_5_components_demo_direction_js__["a" /* Direction */]('DOWN'),
        new __WEBPACK_IMPORTED_MODULE_2_components_common_image_js__["a" /* Image */](this.assets.images.demo['wizard'], [32, 32], [3, 2]),
        new __WEBPACK_IMPORTED_MODULE_7_components_demo_input_js__["a" /* Input */](['KEY_UP', 'KEY_RIGHT', 'KEY_DOWN', 'KEY_LEFT']),
        new __WEBPACK_IMPORTED_MODULE_3_components_common_position_js__["a" /* Position */](this.size.width / 2 - 16, this.size.height / 2 - 16),
        new __WEBPACK_IMPORTED_MODULE_8_components_demo_spritesheet_js__["a" /* Spritesheet */](this.assets.datasets.demo['wizard'])
    ]));

    this.world.add(new __WEBPACK_IMPORTED_MODULE_0_modules_world_js__["a" /* Entity */]('framerate', [

        new __WEBPACK_IMPORTED_MODULE_3_components_common_position_js__["a" /* Position */](8, 8),
        new __WEBPACK_IMPORTED_MODULE_9_components_demo_text_js__["a" /* Text */]('fps:60'),
        new __WEBPACK_IMPORTED_MODULE_6_components_demo_framerate_js__["a" /* Framerate */](),
        new __WEBPACK_IMPORTED_MODULE_4_components_demo_alphabet_js__["a" /* Alphabet */](this.assets.images.demo['font'], [16, 32]),
        new __WEBPACK_IMPORTED_MODULE_8_components_demo_spritesheet_js__["a" /* Spritesheet */](this.assets.datasets.demo['font'])
    ]));
}




/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });
function Position(x, y) {

    this.name = 'position';

    this.x = x;
    this.y = y;
}




/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alphabet; });
function Alphabet(image, size) {

    this.name = 'alphabet';

    this.image = image;
    this.size = size;
}




/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Framerate; });
function Framerate() {

    this.name = 'framerate';

    this.elapsed = 0;
    this.frames = 0;
}




/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
function Input(inputs) {

    this.name = 'input';

    this.inputs = inputs;
}




/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Text; });
function Text(text) {

    this.name = 'text';

    this.text = text;
}




/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_modules_random_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modules_shuffle_js__ = __webpack_require__(47);



function update() {

    // console.log('update demo scene');

    this.systems.input.update.call(this, this.world.entities);
    this.systems.animate.update.call(this, this.world.entities);
    this.systems.reframe.update.call(this, this.world.entities);

    this.inputs.length = 0;
}




/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export random */
function random(items) {

    if (typeof items === 'number'
    && items % 1 === 0
    && items > 0) {

        return Math.floor(items * Math.random()) + 1;
    }

    if (Array.isArray(items)
    && items.length > 0) {

        return items[Math.floor(items.length * Math.random())];
    }

    return null;
}

// exports current module as a function



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export shuffle */
function shuffle(array) {

    const length = array.length;

    // Fisher-Yates shuffle
    for (let iterator = 0; iterator < length; iterator += 1) {

        // define target randomized index from given array
        const target = Math.floor(Math.random() * (iterator + 1));

        // if target index is different of current iterator then switch values
        if (target !== iterator) {

            const temporary = array[iterator];

            // switch values
            array[iterator] = array[target];
            array[target] = temporary;
        }
    }

    // returns given array with mutation
    return array;
}

// exports current module as a function



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTIyZDBlYzE1YjU4MDg2OWIwZGQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy90aGVhdHJlL21vZHVsZXMvd29ybGQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9nYW1lL2NvbXBvbmVudHMvY29tbW9uL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2dhbWUvY29tcG9uZW50cy9jb21tb24vaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9nYW1lL2NvbXBvbmVudHMvZGVtby9kaXJlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9nYW1lL2NvbXBvbmVudHMvZGVtby9zcHJpdGVzaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdGhlYXRyZS9jb3JlL3RoZWF0cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy90aGVhdHJlL2NvcmUvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdGhlYXRyZS9jb3JlL2xvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy90aGVhdHJlL2NvcmUvcHJlbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2dhbWUvYXNzZXRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvZ2FtZS9hc3NldHMvZGF0YXNldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9nYW1lL2Fzc2V0cy9kYXRhc2V0cy9kZW1vL2ZvbnQuanNvbiIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2dhbWUvYXNzZXRzL2RhdGFzZXRzL2RlbW8vd2l6YXJkLmpzb24iLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9nYW1lL2Fzc2V0cy9pbWFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9nYW1lL2Fzc2V0cy9pbWFnZXMvZGVtby9mb250LTE2eDMyQDJ4LnBuZyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2dhbWUvYXNzZXRzL2ltYWdlcy9kZW1vL3dpemFyZC0xNngxNkAyeC5wbmciLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9nYW1lL2Fzc2V0cy9zb3VuZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9nYW1lL3NjZW5lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2dhbWUvc2NlbmVzL2xvYWRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9nYW1lL3NjZW5lcy9sb2FkaW5nL2Rlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9nYW1lL3NjZW5lcy9sb2FkaW5nL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2dhbWUvc2NlbmVzL2xvYWRpbmcvc2V0dXAuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9nYW1lL3NjZW5lcy9sb2FkaW5nL3N0YXJ0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvZ2FtZS9zY2VuZXMvbG9hZGluZy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9nYW1lL3NjZW5lcy9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvZ2FtZS9zY2VuZXMvZGVtby9kZXN0cm95LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvZ2FtZS9zY2VuZXMvZGVtby9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9nYW1lL3NjZW5lcy9kZW1vL3NldHVwLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdGhlYXRyZS9tb2R1bGVzL2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdGhlYXRyZS9tb2R1bGVzL2tleW5hbWVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdGhlYXRyZS9tb2R1bGVzL2tleWNvZGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvZ2FtZS9zeXN0ZW1zL2NvbW1vbi9hbmltYXRlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvZ2FtZS9zeXN0ZW1zL2NvbW1vbi9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2dhbWUvc3lzdGVtcy9jb21tb24vcmVmcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2dhbWUvc3lzdGVtcy9kZW1vL2ZyYW1lcmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2dhbWUvc3lzdGVtcy9kZW1vL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvZ2FtZS9jb21wb25lbnRzL2RlbW8vcnVuLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvZ2FtZS9zeXN0ZW1zL2RlbW8vdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2dhbWUvc2NlbmVzL2RlbW8vc3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9nYW1lL2NvbXBvbmVudHMvY29tbW9uL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvZ2FtZS9jb21wb25lbnRzL2RlbW8vYWxwaGFiZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9nYW1lL2NvbXBvbmVudHMvZGVtby9mcmFtZXJhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9nYW1lL2NvbXBvbmVudHMvZGVtby9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2dhbWUvY29tcG9uZW50cy9kZW1vL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9nYW1lL3NjZW5lcy9kZW1vL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3RoZWF0cmUvbW9kdWxlcy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy90aGVhdHJlL21vZHVsZXMvc2h1ZmZsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7QUFBQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDBEQUEwRCxtQkFBbUI7O0FBRTdFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDBEQUEwRCxtQkFBbUI7O0FBRTdFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSw2REFBNkQsbUJBQW1COztBQUVoRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQVNBOzs7Ozs7OztBQzdHQTtBQUFBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRVE7Ozs7Ozs7O0FDWlI7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUTs7Ozs7Ozs7QUNUUjtBQUFBOztBQUVBOztBQUVBO0FBQ0E7O0FBRVE7Ozs7Ozs7O0FDUFI7QUFBQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVROzs7Ozs7Ozs7O0FDUFE7O0FBRWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDZmM7QUFDRjtBQUNHOztBQUVEOztBQUVmOztBQUVBOztBQUVBLFdBQVcsa0NBQWtDOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNROzs7Ozs7OztBQ3ZIUjtBQUFBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNROzs7Ozs7OztBQ3hCUjtBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDUTs7Ozs7Ozs7QUN2RFI7QUFBQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNROzs7Ozs7Ozs7Ozs7QUN6RFM7QUFDRjtBQUNBOztBQUVmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVROzs7Ozs7OztBQ1hSO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUTs7Ozs7OztBQ2hCUixrQkFBa0IsK0k7Ozs7OztBQ0FsQixrQkFBa0IsME47Ozs7Ozs7QUNBbEI7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVROzs7Ozs7O0FDaEJSLGlDQUFpQyxnbVA7Ozs7OztBQ0FqQyxpQ0FBaUMsNCtEOzs7Ozs7O0FDQWpDO0FBQUE7O0FBRVE7Ozs7Ozs7Ozs7Ozs7QUNGUjs7QUFFQTs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RnQjtBQUNEO0FBQ0Q7QUFDQTtBQUNDOztBQUVQOzs7Ozs7OztBQ05SO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVROzs7Ozs7OztBQ05SO0FBQUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVE7Ozs7Ozs7O0FDbkJSO0FBQUE7O0FBRUE7QUFDQTs7QUFFUTs7Ozs7Ozs7QUNMUjtBQUFBOztBQUVBO0FBQ0E7O0FBRVE7Ozs7Ozs7O0FDTFI7QUFBQTs7QUFFQTtBQUNBOztBQUVROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFE7QUFDRDtBQUNEO0FBQ0E7QUFDQzs7QUFFUDs7Ozs7Ozs7QUNOUjtBQUFBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVROzs7Ozs7OztBQ2ZSO0FBQUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWlM7QUFDYTtBQUNmOztBQUVDO0FBQ0Y7QUFDRTs7QUFFRTtBQUNKO0FBQ0Q7O0FBRWI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVE7Ozs7Ozs7Ozs7QUNoQ1M7O0FBRWpCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDUTs7Ozs7Ozs7QUN0R1I7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REUjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZUE7Ozs7Ozs7O0FDaEVBO0FBQUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVROzs7Ozs7OztBQ25CUjtBQUFBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUTs7Ozs7Ozs7QUNiUjtBQUFBOztBQUVBO0FBQ0E7O0FBRVE7Ozs7Ozs7O0FDTFI7QUFBQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVE7Ozs7Ozs7Ozs7Ozs7O0FDZlU7QUFDSjs7QUFFSTtBQUNOO0FBQ1E7O0FBRXBCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVROzs7Ozs7OztBQ3JIUjtBQUFBOztBQUVBO0FBQ0E7O0FBRVE7Ozs7Ozs7O0FDTFI7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCYzs7QUFFSjtBQUNKO0FBQ0c7O0FBRUE7QUFDQztBQUNBO0FBQ0o7QUFDTTtBQUNQOztBQUViOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVROzs7Ozs7OztBQ3ZDUjtBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFUTs7Ozs7Ozs7QUNSUjtBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFUTs7Ozs7Ozs7QUNSUjtBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFUTs7Ozs7Ozs7QUNSUjtBQUFBOztBQUVBOztBQUVBO0FBQ0E7O0FBRVE7Ozs7Ozs7O0FDUFI7QUFBQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVROzs7Ozs7Ozs7OztBQ1BPO0FBQ0M7O0FBRWhCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVROzs7Ozs7OztBQ2RSO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDUTs7Ozs7Ozs7QUNuQlI7QUFBQTs7QUFFQTs7QUFFQTtBQUNBLDBCQUEwQixtQkFBbUI7O0FBRTdDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNRIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTIyZDBlYzE1YjU4MDg2OWIwZGQiLCJmdW5jdGlvbiBFbnRpdHkobmFtZSwgY29tcG9uZW50cykge1xuXG4gICAgZnVuY3Rpb24gYWRkKGNvbXBvbmVudHMpIHtcblxuICAgICAgICBjb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50Lm5hbWVdID0gY29tcG9uZW50O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXQoY29tcG9uZW50KSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1tjb21wb25lbnRdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhcyhjb21wb25lbnRzKSB7XG5cbiAgICAgICAgZm9yIChsZXQgaXRlcmF0b3IgPSAwLCBsZW5ndGggPSBjb21wb25lbnRzLmxlbmd0aDsgaXRlcmF0b3IgPCBsZW5ndGg7IGl0ZXJhdG9yICs9IDEpIHtcblxuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c1tpdGVyYXRvcl07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudHMuaGFzT3duUHJvcGVydHkoY29tcG9uZW50KSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZShjb21wb25lbnRzKSB7XG5cbiAgICAgICAgZm9yIChsZXQgaXRlcmF0b3IgPSAwLCBsZW5ndGggPSBjb21wb25lbnRzLmxlbmd0aDsgaXRlcmF0b3IgPCBsZW5ndGg7IGl0ZXJhdG9yICs9IDEpIHtcblxuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c1tpdGVyYXRvcl07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudHMuaGFzT3duUHJvcGVydHkoY29tcG9uZW50KSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29tcG9uZW50c1tjb21wb25lbnRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcblxuICAgIHRoaXMuYWRkID0gYWRkO1xuICAgIHRoaXMuZ2V0ID0gZ2V0O1xuICAgIHRoaXMuaGFzID0gaGFzO1xuICAgIHRoaXMucmVtb3ZlID0gcmVtb3ZlO1xuXG4gICAgdGhpcy5hZGQoY29tcG9uZW50cylcbn1cblxuZnVuY3Rpb24gU3lzdGVtKGNvbXBvbmVudHMsIGhhbmRsZXIpIHtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZShlbnRpdGllcykge1xuXG4gICAgICAgIGVudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoZW50aXR5Lmhhcyhjb21wb25lbnRzKSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgaGFuZGxlcihlbnRpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZSA9IHVwZGF0ZTtcbn1cblxuZnVuY3Rpb24gV29ybGQoKSB7XG5cbiAgICBmdW5jdGlvbiBhZGQoZW50aXR5KSB7XG5cbiAgICAgICAgdGhpcy5lbnRpdGllcy5wdXNoKGVudGl0eSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0KGVudGl0eSkge1xuXG4gICAgICAgIGZvciAobGV0IGl0ZXJhdG9yID0gMCwgbGVuZ3RoID0gdGhpcy5lbnRpdGllcy5sZW5ndGg7IGl0ZXJhdG9yIDwgbGVuZ3RoOyBpdGVyYXRvciArPSAxKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmVudGl0aWVzW2l0ZXJhdG9yXTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnQubmFtZSA9PT0gZW50aXR5KSB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZShlbnRpdHkpIHtcblxuICAgICAgICB0aGlzLmVudGl0aWVzLnNwbGljZSh0aGlzLmVudGl0aWVzLmluZGV4T2YoZW50aXR5KSwgMSk7XG4gICAgfVxuXG4gICAgdGhpcy5lbnRpdGllcyA9IFtdO1xuXG4gICAgdGhpcy5hZGQgPSBhZGQ7XG4gICAgdGhpcy5nZXQgPSBnZXQ7XG4gICAgdGhpcy5yZW1vdmUgPSByZW1vdmU7XG59XG5cbmV4cG9ydCB7XG5cbiAgICAvLyBleHBvcnRzIGN1cnJlbnQgbW9kdWxlIGFzIGFuIG9iamVjdFxuICAgIFdvcmxkLFxuXG4gICAgLy8gZXhwb3J0cyBoZWxwZXJzIGZvciBjdXJyZW50IG1vZHVsZVxuICAgIEVudGl0eSwgU3lzdGVtXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL3RoZWF0cmUvbW9kdWxlcy93b3JsZC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBBbmltYXRpb24oZnJhbWVzLCBmcmFtZXJhdGUpIHtcblxuICAgIHRoaXMubmFtZSA9ICdhbmltYXRpb24nO1xuXG4gICAgdGhpcy5mcmFtZXJhdGUgPSBmcmFtZXJhdGUgfHwgODtcbiAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcblxuICAgIHRoaXMuZnJhbWUgPSAwO1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMuZnJhbWVzW3RoaXMuZnJhbWVdO1xuICAgIHRoaXMuZWxhcHNlZCA9IDA7XG59XG5cbmV4cG9ydCB7QW5pbWF0aW9ufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9nYW1lL2NvbXBvbmVudHMvY29tbW9uL2FuaW1hdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBJbWFnZShpbWFnZSwgc2l6ZSwgZnJhbWUpIHtcblxuICAgIHRoaXMubmFtZSA9ICdpbWFnZSc7XG5cbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG59XG5cbmV4cG9ydCB7SW1hZ2V9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL2dhbWUvY29tcG9uZW50cy9jb21tb24vaW1hZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuXG4gICAgdGhpcy5uYW1lID0gJ2RpcmVjdGlvbic7XG5cbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbn1cblxuZXhwb3J0IHtEaXJlY3Rpb259O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL2dhbWUvY29tcG9uZW50cy9kZW1vL2RpcmVjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBTcHJpdGVzaGVldChzcHJpdGVzaGVldCkge1xuXG4gICAgdGhpcy5uYW1lID0gJ3Nwcml0ZXNoZWV0JztcblxuICAgIHRoaXMuc3ByaXRlc2hlZXQgPSBzcHJpdGVzaGVldDtcbn1cblxuZXhwb3J0IHtTcHJpdGVzaGVldH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvZ2FtZS9jb21wb25lbnRzL2RlbW8vc3ByaXRlc2hlZXQuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtUaGVhdHJlfSBmcm9tICdjb3JlL3RoZWF0cmUuanMnO1xuXG5uZXcgVGhlYXRyZSh7XG5cbiAgICAnY29udGFpbmVyJzogZG9jdW1lbnQuYm9keSxcbiAgICAnZXhwb3NlJzogdHJ1ZSxcbiAgICAnZnJhbWVyYXRlJzogNjAsXG4gICAgJ2xvYWRpbmcnOiAnbG9hZGluZycsXG4gICAgJ29wZW5pbmcnOiAnZGVtbycsXG4gICAgJ3NoYXJwJzogdHJ1ZSxcbiAgICAnc2l6ZSc6IHtcblxuICAgICAgICAnd2lkdGgnOiAzMjAsXG4gICAgICAgICdoZWlnaHQnOiAyODhcbiAgICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0NhbnZhc30gZnJvbSAnY29yZS9jYW52YXMuanMnO1xuaW1wb3J0IHtMb29wfSBmcm9tICdjb3JlL2xvb3AuanMnO1xuaW1wb3J0IHtwcmVsb2FkfSBmcm9tICdjb3JlL3ByZWxvYWQuanMnO1xuXG5pbXBvcnQge2Fzc2V0c30gZnJvbSAnYXNzZXRzL2luZGV4LmpzJztcblxuaW1wb3J0ICogYXMgc2NlbmVzIGZyb20gJ3NjZW5lcy9pbmRleC5qcyc7XG5cbmZ1bmN0aW9uIFRoZWF0cmUoY29uZmlnKSB7XG5cbiAgICBjb25zdCB7Y29udGFpbmVyLCBsb2FkaW5nLCBvcGVuaW5nLCBzaXplfSA9IGNvbmZpZztcblxuICAgIGNvbnN0IGV4cG9zZSA9IGNvbmZpZy5leHBvc2UgfHwgZmFsc2U7XG4gICAgY29uc3QgZnJhbWVyYXRlID0gY29uZmlnLmZyYW1lcmF0ZSB8fCA2MDtcbiAgICBjb25zdCBzaGFycCA9IGNvbmZpZy5zaGFycCB8fCBmYWxzZTtcblxuICAgIGxldCBuZXh0ID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygnMmQnLCAndGhlYXRyZScsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcblxuICAgICAgICBpZiAoc2hhcnAgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgY2FudmFzLnNoYXJwKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzLmVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjYW52YXMuY29udGV4dDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY2FudmFzLmVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5hc3NldHMgPSB7fTtcbiAgICAgICAgdGhpcy5kZWx0YSA9IHt9O1xuICAgICAgICB0aGlzLmRlbHRhLnJlbmRlciA9IDA7XG4gICAgICAgIHRoaXMuZGVsdGEudXBkYXRlID0gMDtcblxuICAgICAgICB0aGlzLnNjZW5lID0gdGhpcy5zY2VuZXNbbG9hZGluZ107XG4gICAgICAgIHRoaXMuc2NlbmUuc2V0dXAuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5zY2VuZS5zdGFydC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IGxvb3AgPSBuZXcgTG9vcChmcmFtZXJhdGUpO1xuXG4gICAgICAgIGxvb3AudXBkYXRlKCh0aW1lZnJhbWUpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5kZWx0YS51cGRhdGUgPSB0aW1lZnJhbWU7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnVwZGF0ZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAobmV4dCAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZSA9IHRoaXMuc2NlbmVzW25leHRdO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuc2V0dXAuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0LmNhbGwodGhpcyk7XG5cbiAgICAgICAgICAgICAgICBuZXh0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG9vcC5yZW5kZXIoKHRpbWVmcmFtZSkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmRlbHRhLnJlbmRlciA9IHRpbWVmcmFtZTtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByZWxvYWQoYXNzZXRzLCAoYXNzZXRzKSA9PiB7XG5cbiAgICAgICAgICAgIGFzc2V0cy5mb3JFYWNoKChhc3NldCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmFzc2V0c1thc3NldC50eXBlICsgJ3MnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2V0c1thc3NldC50eXBlICsgJ3MnXSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5hc3NldHNbYXNzZXQudHlwZSArICdzJ11bYXNzZXQuc2NvcGVdID09PSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRzW2Fzc2V0LnR5cGUgKyAncyddW2Fzc2V0LnNjb3BlXSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRzW2Fzc2V0LnR5cGUgKyAncyddW2Fzc2V0LnNjb3BlXVthc3NldC5uYW1lXSA9IGFzc2V0LmNvbnRlbnQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zY2VuZS5kZXN0cm95LmNhbGwodGhpcyk7XG5cbiAgICAgICAgICAgIHRoaXMucHJlbG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5zY2VuZSA9IHRoaXMuc2NlbmVzW29wZW5pbmddO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5zZXR1cC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkKHNjZW5lKSB7XG5cbiAgICAgICAgbmV4dCA9IHNjZW5lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3RhcnQoKSB7XG5cbiAgICAgICAgdGhpcy5zY2VuZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMucHJlbG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5zY2VuZXMgPSBzY2VuZXM7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcblxuICAgIHRoaXMubG9hZCA9IGxvYWQ7XG4gICAgdGhpcy5yZXN0YXJ0ID0gcmVzdGFydDtcblxuICAgIGluaXRpYWxpemUuY2FsbCh0aGlzLCBjb25maWcpO1xuXG4gICAgaWYgKGV4cG9zZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgIHdpbmRvdy50aGVhdHJlID0gdGhpcztcbiAgICB9XG59XG5cbi8vIGV4cG9ydHMgY3VycmVudCBtb2R1bGUgYXMgYW4gb2JqZWN0XG5leHBvcnQge1RoZWF0cmV9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL3RoZWF0cmUvY29yZS90aGVhdHJlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIENhbnZhcyh0eXBlLCBpZGVudGlmaWVyLCB3aWR0aCwgaGVpZ2h0KSB7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY29uc3QgY29udGV4dCA9IGVsZW1lbnQuZ2V0Q29udGV4dCh0eXBlKTtcblxuICAgIGZ1bmN0aW9uIHNoYXJwKCkge1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5pbWFnZVJlbmRlcmluZyA9ICctbW96LWNyaXNwLWVkZ2VzJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJy13ZWJraXQtY3Jpc3AtZWRnZXMnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAnY3Jpc3AtZWRnZXMnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcbiAgICAgICAgdGhpcy5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkZW50aWZpZXIpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKTtcblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnNoYXJwID0gc2hhcnA7XG59XG5cbi8vIGV4cG9ydHMgY3VycmVudCBtb2R1bGUgYXMgYW4gb2JqZWN0XG5leHBvcnQge0NhbnZhc307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvdGhlYXRyZS9jb3JlL2NhbnZhcy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBMb29wKGZyYW1lcmF0ZSkge1xuXG4gICAgY29uc3QgdGltZWZyYW1lID0gMTAwMCAvIGZyYW1lcmF0ZTtcblxuICAgIGxldCBlbGFwc2VkVGltZSA9IDA7XG4gICAgbGV0IGZyYW1lZCA9IGZhbHNlO1xuICAgIGxldCBsYXN0UmVuZGVyID0gbnVsbDtcbiAgICBsZXQgbGFzdFVwZGF0ZSA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiByZW5kZXIoaGFuZGxlcikge1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSZW5kZXIgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGlmIChmcmFtZWQgIT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIGhhbmRsZXIoY3VycmVudFJlbmRlciAtIGxhc3RSZW5kZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2FsbCB1c2VyJ3MgcmVuZGVyIGhhbmRsZXIgb24gZWFjaCBhdmFpbGFibGUgZnJhbWVcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcywgaGFuZGxlcikpO1xuXG4gICAgICAgIGZyYW1lZCA9IHRydWU7XG4gICAgICAgIGxhc3RSZW5kZXIgPSBjdXJyZW50UmVuZGVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZShoYW5kbGVyKSB7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFVwZGF0ZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgaWYgKGxhc3RVcGRhdGUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgLy8gZGVmaW5lIGVsYXBzZWQgdGltZSBzaW5jZSBsYXN0IHVwZGF0ZVxuICAgICAgICAgICAgZWxhcHNlZFRpbWUgKz0gY3VycmVudFVwZGF0ZSAtIGxhc3RVcGRhdGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxsIHVzZXIncyB1cGRhdGUgaGFuZGxlciBtYXRjaGluZyB0aW1lZnJhbWUgYW5kIGZpeGluZyBicm93c2VyIHRpbWUgaGFuZGxpbmdcbiAgICAgICAgd2hpbGUgKGVsYXBzZWRUaW1lID49IHRpbWVmcmFtZSkge1xuXG4gICAgICAgICAgICAvLyBkZWZpbmUgZWxhcHNlZCB0aW1lIHNpbmNlIGxhc3QgdXNlcidzIHVwZGF0ZSBoYW5kbGVyIG1hdGNoaW5nIHRpbWVmcmFtZVxuICAgICAgICAgICAgZWxhcHNlZFRpbWUgLT0gdGltZWZyYW1lO1xuXG4gICAgICAgICAgICBoYW5kbGVyKHRpbWVmcmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxsIHVzZXIncyB1cGRhdGUgaGFuZGxlciBtYXRjaGluZyB0aW1lZnJhbWVcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMsIGhhbmRsZXIpLCB0aW1lZnJhbWUpO1xuXG4gICAgICAgIGxhc3RVcGRhdGUgPSBjdXJyZW50VXBkYXRlO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyO1xuICAgIHRoaXMudXBkYXRlID0gdXBkYXRlO1xufVxuXG4vLyBleHBvcnRzIGN1cnJlbnQgbW9kdWxlIGFzIGFuIG9iamVjdFxuZXhwb3J0IHtMb29wfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy90aGVhdHJlL2NvcmUvbG9vcC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBwcmVsb2FkKGFzc2V0cywgaGFuZGxlcikge1xuXG4gICAgbGV0IHByb21pc2VzID0gW107XG5cbiAgICAvLyBwcmVsb2FkcyBlYWNoIGFzc2V0XG4gICAgYXNzZXRzLmZvckVhY2goZnVuY3Rpb24gKGFzc2V0KSB7XG5cbiAgICAgICAgLy8gY3JlYXRlcyBhIHByb21pc2UgZm9yIGN1cnJlbnQgYXNzZXQgcHJlbG9hZGluZ1xuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgICAgICAgICAvLyBpZiBjdXJyZW50IGFzc2V0IGlzIGEgZGF0YXNldCB0aGVuIHByZWxvYWQgaXRcbiAgICAgICAgICAgIGlmIChhc3NldC50eXBlID09PSAnZGF0YXNldCcpIHtcblxuICAgICAgICAgICAgICAgIGFzc2V0LmNvbnRlbnQgPSBhc3NldC5zb3VyY2U7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKGFzc2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgY3VycmVudCBhc3NldCBpcyBhbiBpbWFnZSB0aGVuIHByZWxvYWQgaXRcbiAgICAgICAgICAgIGlmIChhc3NldC50eXBlID09PSAnaW1hZ2UnKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gYXNzZXQuc291cmNlO1xuXG4gICAgICAgICAgICAgICAgLy8gd2hlbiBjdXJyZW50IGltYWdlIGlzIGxvYWRlZCB0aGVuIHJlc29sdmUgY3VycmVudCBwcm9taXNlXG4gICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LmNvbnRlbnQgPSBpbWFnZTtcblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFzc2V0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBjdXJyZW50IGFzc2V0IGlzIGEgc291bmQgdGhlbiBwcmVsb2FkIGl0XG4gICAgICAgICAgICBlbHNlIGlmIChhc3NldC50eXBlID09PSAnc291bmQnKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbyhhc3NldC5zb3VyY2UpO1xuXG4gICAgICAgICAgICAgICAgLy8gd2hlbiBjdXJyZW50IHNvdW5kIGlzIGxvYWRlZCB0aGVuIHJlc29sdmUgY3VycmVudCBwcm9taXNlXG4gICAgICAgICAgICAgICAgc291bmQub25jYW5wbGF5dGhyb3VnaCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICBhc3NldC5jb250ZW50ID0gc291bmQ7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhc3NldCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICB9KTtcblxuICAgIC8vIGNhbGwgdXNlcidzIHN1Y2Nlc3MgaGFuZGxlciB3aGVuIGFsbCBhc3NldHMgYXJlIHByZWxvYWRlZFxuICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGhhbmRsZXIpO1xufVxuXG4vLyBleHBvcnRzIGN1cnJlbnQgbW9kdWxlIGFzIGEgZnVuY3Rpb25cbmV4cG9ydCB7cHJlbG9hZH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvdGhlYXRyZS9jb3JlL3ByZWxvYWQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtkYXRhc2V0c30gZnJvbSAnLi9kYXRhc2V0cy9pbmRleC5qcyc7XG5pbXBvcnQge2ltYWdlc30gZnJvbSAnLi9pbWFnZXMvaW5kZXguanMnO1xuaW1wb3J0IHtzb3VuZHN9IGZyb20gJy4vc291bmRzL2luZGV4LmpzJztcblxuY29uc3QgYXNzZXRzID0gW1xuXG4gICAgLi4uZGF0YXNldHMsXG4gICAgLi4uaW1hZ2VzLFxuICAgIC4uLnNvdW5kc1xuXTtcblxuZXhwb3J0IHthc3NldHN9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL2dhbWUvYXNzZXRzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBkYXRhc2V0cyA9IFtcblxuICAgIHtcbiAgICAgICAgJ25hbWUnOiAnZm9udCcsXG4gICAgICAgICdzY29wZSc6ICdkZW1vJyxcbiAgICAgICAgJ3NvdXJjZSc6IHJlcXVpcmUoJy4vZGVtby9mb250Lmpzb24nKSxcbiAgICAgICAgJ3R5cGUnOiAnZGF0YXNldCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ25hbWUnOiAnd2l6YXJkJyxcbiAgICAgICAgJ3Njb3BlJzogJ2RlbW8nLFxuICAgICAgICAnc291cmNlJzogcmVxdWlyZSgnLi9kZW1vL3dpemFyZC5qc29uJyksXG4gICAgICAgICd0eXBlJzogJ2RhdGFzZXQnXG4gICAgfVxuXTtcblxuZXhwb3J0IHtkYXRhc2V0c307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvZ2FtZS9hc3NldHMvZGF0YXNldHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wiMFwiOlswLDhdLFwiMVwiOlsxLDhdLFwiMlwiOlsyLDhdLFwiM1wiOlszLDhdLFwiNFwiOls0LDhdLFwiNVwiOls1LDhdLFwiNlwiOls2LDhdLFwiN1wiOls3LDhdLFwiOFwiOls4LDhdLFwiOVwiOls5LDhdLFwiZlwiOls1LDddLFwicFwiOlsxNSw3XSxcInNcIjpbMTgsN10sXCI6XCI6WzIyLDhdfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9nYW1lL2Fzc2V0cy9kYXRhc2V0cy9kZW1vL2ZvbnQuanNvblxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJJRExFX1VQXCI6WzMsMF0sXCJJRExFX1JJR0hUXCI6WzMsMV0sXCJJRExFX0RPV05cIjpbMywyXSxcIklETEVfTEVGVFwiOlszLDNdLFwiUlVOX1VQXCI6W1swLDBdLFsxLDBdLFsyLDBdLFszLDBdXSxcIlJVTl9SSUdIVFwiOltbMCwxXSxbMSwxXSxbMiwxXSxbMywxXV0sXCJSVU5fRE9XTlwiOltbMCwyXSxbMSwyXSxbMiwyXSxbMywyXV0sXCJSVU5fTEVGVFwiOltbMCwzXSxbMSwzXSxbMiwzXSxbMywzXV19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL2dhbWUvYXNzZXRzL2RhdGFzZXRzL2RlbW8vd2l6YXJkLmpzb25cbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGltYWdlcyA9IFtcblxuICAgIHtcbiAgICAgICAgJ25hbWUnOiAnZm9udCcsXG4gICAgICAgICdzY29wZSc6ICdkZW1vJyxcbiAgICAgICAgJ3NvdXJjZSc6IHJlcXVpcmUoJy4vZGVtby9mb250LTE2eDMyQDJ4LnBuZycpLFxuICAgICAgICAndHlwZSc6ICdpbWFnZSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ25hbWUnOiAnd2l6YXJkJyxcbiAgICAgICAgJ3Njb3BlJzogJ2RlbW8nLFxuICAgICAgICAnc291cmNlJzogcmVxdWlyZSgnLi9kZW1vL3dpemFyZC0xNngxNkAyeC5wbmcnKSxcbiAgICAgICAgJ3R5cGUnOiAnaW1hZ2UnXG4gICAgfVxuXTtcblxuZXhwb3J0IHtpbWFnZXN9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL2dhbWUvYXNzZXRzL2ltYWdlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBZ0FBQUFHQUNBWUFBQURiSU5xL0FBQVdpVWxFUVZSNDJ1M2RTWkxidWhJRjBMOE1MNlAydnhvUFBmUU8vS2QrRlNHanlVdzA1RGtSR2pqS0lDRVN6UlZJVWYvN0h3QUFBUEJDUDc2Ky92enJOVnV1Vlg3My9udkxmOXBPdEh6MGZZeHVQL3Y0UjdkVC9mZlIrbzRldjkzSC8vYitsOTMrVi9jZjVYUEdQd1FBQVVBQUVBQUVBQUZBQUdEWHhLOEQxQnkvM2VWbkIrSlY3ZXFVQVBCOU83TVRrUDZ6cHY5RnQzZjc4V3R0SjlyL1JzZVAwWDZCQUNBQUNBQUNnUDRuQUFnQTNCNEFxcGJnZHRkLzFTV0kyWW1sYWlsMmRRQllYZC9xUzBBbThOcis5OVFBTURxUlIvdkRiSUF3OFFzQUFvQUFJQUFJQUFLQUFDQUEzQjRBVHIySlpuY0hQblVKM3lXQW11TWZuY0RmZWhOYTlnUlFIUWhQWFlMZkhRQ3lidUkwd3dvQUFvQUFJQUFJQUFLQUFNRFRMd0U4dGJ3QVVGdXZwMzROY0hVQXlMb0VGWjNBWnR2ZlV3TEFxcThoVnkvaG0vZ0ZBQUZBQUJBQUJBQUJRQUFRQUFTQW1pWEFwendJS09zOFpBM2cxUU5ZZENESW5rQnZleERNcXZNZmJYOVB2UWt3cS8xbjczOVhBS3Q2Z0pOZ0lBQUlBQUtBQUNBQUNBQUNBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBREFiaisrdnY3OC9YcDcvYjd2cjNyLzJkdlAybDd2ZHFyMmQycDc1SjNqRU9oNEFvQUFJQUFnQU1EWkhhaDNRSjB0bDcyZDA4cmZkdnhQSGJpajdTZ2FIS3JiVFRRNDd1NS9yZU5XL1Q2cSsrM3V2N2ZhNFduMXYzVWNFZ0FFQUFGQUFCQUFCQUFCUUFDd2RMYTdBZDFlLzFzR29Lb2w5TlVUV0hZQWlFNkFiLzE3OUh4bEJlaGJ4NDlQRTM1V29LME80QzdKQ0FBQ2dBQWdBQWdBQW9BQUlBQUlBSGNHZ09xbDUrb2wyRjN2SXhvQWRsOENHQjJBQllDYWdYN1ZKYmpxQUowVmdLc0QvTzVMb0FnQUFvQUFJQUFJQUFLQUFNRHVJREE3QUxvSnNIWWdQSFVDZlZvQXlIcWZwMHdndXdKb2RiOWZkUngzWFlvNGZRbmZUWUFDZ0FBZ0FBZ0FBb0FBSUFBSUFBaFFGUVBoN1FHU005dmQ3dTJqLzRJQUlBQWdBS0QvQWdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUl6NjhmWDE1KzlYOXYvdjNjN3MvcVAxNE81Mk45c090QnZBUUN3QUlBQVE3YmpWSGJpMTM5WjJvdVdqNzZOMy8xWHZZOVgrcTl0UDlrUjBXcithZmIrckovTGJ5ejk5d3F3dXY3ci9SZ05BMWJpWGRSNVdqNThDZ0FBZ0FBZ0FBb0FBSUFBSUFQRVR0bXNwY1hVSHlXcUF1OTVmOWZsdGxUOXRLVHA3QUt3YUNLdVdRQVdBZDA3Z3A3eS9yUCsvK2dOb2F6N0lIaitpNDY4QUlBQUlBQUtBQUNBQUNBQUNRTjRKemxyS1dEVUFSMDlBMWdDK2F3bi8xdnFmZXZ6ZU9pRUlBSGZWdC9vRDEreDR2bXZpcjU2SHNpOEI5TlpmQUJBQUJBQUJRSGtCUUFBUUFPcVhRTE5QeUtsTFdOVVR5T29sb0tyanYycEF2L1VTUVBWTlJHNENmR2JnOExYSHN3UGM2ZzlRMFEvZ0FvQUFJQUFJQUFLQUFJQUFzSDdwWi9YWDZIWk4zRlZMUjd1K1JuZDcvVThaU0hZRnhGT0MxKzZ2RVQ4OThGVDNsN2QvRGJOcUtYOTEveGNBQkFBQlFBQVFBSlFYQUFRQUFMSUQzTElsV2dRUkFBUUFCQUFBVFB3QWdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFRSkdmdjMvOUdYbk5sdnRlZnZmK1o4dG52YXJyMGRwKzlQaEh6K09xNHp0YjMrcDI5dmIrZDJxN09XV2N1YjE4dEg4aUFBZ0FBb0FBSUFBSUFBSUExUlAvajYrdmY3NCtuY2hXdVZiNTNmdnZMZjlwTzlIeTBmZng2ZS9mejNQdjMxdjdiYlduclBwSC85N2Iva2ZQejJqOVd1WGYzdit5Mi8rcS9uTjYrV2o3bmQxL2RCeEJBQkFBQkFBQlFBQVFBQVFBcWdQQTdnSHdsdks5QTllcDVWc2R2SGQ3czRGeXR2NnJBOEQzN2N4T1FQclBtdjRYM2Q3dEUzaHJPOUgrMTd1ZDBYNWhCaFlBQkFBQlFBRFEvd1FBQVlDbkJJQ3FKYmhWSGJpMzRWYVZuNTFZb2t0dzBRbDFkRHZScGVmcUFKQjEvRzlkUXQ2MUJOMTczS1B0OS9RbCtOYS9vd0UrR2lCR0x5VzdDVkFBRUFBRUFBRkFBQkFBQkFBQjROUUFrSDBUVjlZQXRIb0pyL2ZyTWF2S1p4Ly9yQUUwNjd5Y2RoTmdkQUxmZlJQYXJpWDgyU0FYRFhpN0FrRFZFbngxQUlqZUJHemlGd0FFQUFGQUFCQUFCQUFCUUFCd0NjQk5nQ2Q5RFczMGE0Q3pTNGhaOWFyNm1tRFZUWlNyNjE4MUFjL2V2Rmg5RTludUFEQjZFMjMxSmNUc0FKTGQvMmMvQ0NFQUNBQUNnQUFnQUFnQUFnQ25CSUNxbStpZS9pQ2cyVWZSWm5mODBRQ3dlZ213YWdJOTVVRXd1eDRFTlB1STExT08zK3FiQUdlUC8rNmI4RTY1Qk9oQlFBS0FBQ0FBQ0FBQ2dBQWdBQWdBdHdXQTFUOEdNVnFQVzM4TUtPczh6TmEvOWYraSt4OHRIMzNmVC9zeG1GWG5QN3Y5N2U1bjBmRXNxLy90M245Vys1dXR2eDhERWdBRUFBRkFBQkFBQkFBQlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRGU0T2Z2WDMvKzlYcGIvVnI3eTk1Lzl2YXp0dGU3blZYN082VTk4czV4Q0hROEFVQUFFQUFRQU9DdUR0UjYvZmo2K3M5cnRFUE83cmUzL0tmNlZlMy8rLzZxOXA5MS9ML1hvMVhmM3ZiVSs3NUg2OSs3blZiOXE5dGRWZnZmdmYrc1YvYitlOXZSN3ZlOTYvaWMrdjRRQUFRQUFVQUFFQUFFQUFHQVhSTi9hK0w2MUxGbXkyVnY1N1R5MFFHcyt2aFhMYUZISis1b2dCc05BSzNqVmQxdVJvUGphZjJ2ZGR5cTM4ZG91YXoydCtydnJYWjRXdjFIendNQ2dBQWdBQWdBQW9BQUlBQ3dPZ0NjMm9DeWx2NU82UUNuRFVEUkpmU3FTd0NqQVdiMkVrWjBBTHRsQXJtdC8yWUY2T29BV3YzMzBTQ2FGYnl5UHRpTTlsOEVBQUZBQUJBQUJBQUJRQUJBQU5nYkFLSkxxTmszRDFZSGdOa0pOSHJ6WmJUKzJRRmdkQUFXQU9ZRyt1aEVsblV6YWZZU2ZkV2xqOW50VkYrQ3pMNFpHUUZBQUJBQUJBQUJRQUFRQU5oOUUrRG9BUGlXbXdDenZqNjNLK0JrVDZCUEN3Q3Jic0o2NmsyQXN4OUFvamV4VmgzSDJmMUh5MVV0NGJmR24rb0FZd1lXQUFRQUFVQUFFQUFFQUFHQVU0TEE2Z2RBN0g0Z1MxYjU2b0Z3OTNtSUJzanNCNXhrMTMvMWcxaG10eDlkK3M0T29MTkx2TmtQa0ZsOS9LUHRiM1c5b3cvU3F1Ni9DQUFDZ0FBZ0FBZ0FBb0FBQU04SVVOa0Q0YTBCVWtzNXE5M3Qzajc2THdnQUFnQUNBUG92QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU1CS296L3JtdlV6c0xNL0srdm5hTFc3ako5RDEyNEFBN0VBZ0FDZzNXUjMzT3dPSEcwQXF4cFE5djZ6dDdONi85bnRKM3NpT3IxZlpiZWZUOXY3OGZYMW4xZXIzS2YvMzN2OFAyMW5kdit0Y20rYk1GZVhuKzIvV2UydXRaMVA5ZnZVZm1mNzN5bnpaMWsvRUFBRUFBRkFBQkFBQkFBQjRFVUJvRFZnOUE0SVZSMi90ZjlvK2RIak1QcStWNzJQVmZ0dk5jelo0ejg3Z0t3T3ZyTkJaclQ5cko3SVovZDMydjV2bmNDcmpuYzBzRlgzMzZ3QU1Gci8wWG1yOTlWNkg5WGpwd0FnQUFnQUFvQUFJQUFJQUFKQWZ3T09Ea0RSQVd2MndHYVh6MnFBVmZXYlhmS2FQYis5KzRudVAvdDRSSS8vNkVBeTJ3OW1COENxQUhWNytWMEI0UGJqUGRzZlo0TnY3Ly92RGRDakUvbG8vK3V0WDlZSHVON3hWd0FRQUFRQUFVQUFFQUFFQUFFZ3Z3RzMvbDIxQkpTOWxOTjdBcUluWnZjUy9xMzFQL1g0emQ1RU9YdnBhZlM4dlQwQW5ISVRYZFVFdkRvd2pTNUZ0OHFQdHRmZWNibnFKc0xzUzZqUkQwamxOOFVLQUFLQUFDQUFDQUFDZ0FBZ0FBeFBsRmtEWVBXUzcrNEpaTlVTVVBYeFgzV0o0N1pMQU5VM3Y3a0o4T3pBYzJ1QVdQVjF0bE8rUGhlOUNYZlZCNmpaRCtBQ2dBQWdBQWdBQW9BQUlBQUlBT2Q4RGJENmEzUzdKdTVUdnNhWXRZUjZXLzFQK1JyZzZOSm45ZGNBMy9JZ29MZmY5TGpxRXNEVEg4VFVPMjZ0dmdSUWZqNEVBQUZBQUJBQUJBQUJRQUI0WVFEWXRSU1ROUUJuUDhCbGRHbnR0a2NaWjUvL1UrcC95a0N5NmxHczJjZngxaDhEeXU3bjBTWDRYWmNRVmwwQ2VHb0EyUFVvOWUwUEFoSUFCQUFCUUFBUUFBUUFBZURGQVFEZ2JXWXYzV1NWaDR3UDRBQUlBQWdBQU13T3ZLdktBd0FDQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCMytmVHpscTJmdVd5VjYvMlp6RjM3N3kzL2FUdlI4dEgzTWJyOTdPTWYzVTcxMzBmck8zcjhkaC8vMi90ZmR2dGYzWCtVenhuL0VBQUVBQUZBQUJBQUJBQUJnRjBUdnc1UWMveDJsNThkaUZlMXExTUN3UGZ0ekU1QStzK2EvaGZkM3UzSHI3V2RhUDhiSFQ5Ryt3VUNnQUFnQUFnQStwOEFJQUJ3ZXdDb1dvTGJYZjlWbHlCbUo1YXFwZGpWQVdCMWZhc3ZBWm5BYS92ZlV3UEE2RVFlN1ErekFjTEVMd0FJQUFLQUFDQUFDQUFDZ0FCd2V3QTQ5U2FhM1IzNDFDVjhsd0Jxam45MEFuL3JUV2paRTBCMUlEeDFDWDUzQU1pNmlkTU1Ld0FJQUFLQUFDQUFDQUFDQUUrL0JQRFU4Z0pBYmIyZStqWEExUUVnNnhKVWRBS2JiWDlQQ1FDcnZvWmN2WVJ2NGhjQUJBQUJRQUFRQUFRQUFVQUFFQUJxbGdDZjhpQ2dyUE9RTllCWEQyRFJnU0I3QXIzdFFUQ3J6biswL1QzMUpzQ3M5cCs5LzEwQnJPb0JUb0tCQUNBQUNBQUNnQUFnQUFnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDNy9mejk2OC9mcjdmWDcvditxdmVmdmYyczdmVnVwMnAvcDdaSDNqa09nWTRuQUFnQUFnQUNBSnpkZ1hvSDFObHkyZHM1cmZ4dHgvL1VnVHZhanFMQm9icmRSSVBqN3Y3WE9tN1Y3Nk82Mys3K2U2c2RubGIvVzhjaEFVQUFFQUFFQUFGQUFCQUFCQUJMWjdzYjBPMzF2MlVBcWxwQ1h6MkJaUWVBNkFUNDFyOUh6MWRXZ0w1MS9QZzA0V2NGMnVvQTdwS01BQ0FBQ0FBQ2dBQWdBQWdBQW9BQWNHY0FxRjU2cmw2QzNmVStvZ0ZnOXlXQTBRRllBS2daNkZkZGdxc08wRmtCdURyQTc3NEVpZ0FnQUFnQUFvQUFJQUFJQU93T0FyTURvSnNBYXdmQ1V5ZlFwd1dBclBkNXlnU3lLNEJXOS90VngzSFhwWWpUbC9EZEJDZ0FDQUFDZ0FBZ0FBZ0FBb0FBZ0FCVk1SRGVIaUE1czkzdDNqNzZMd2dBQWdBQ0FQb3ZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUF3S2lmdjMvOStmdVYvZjk3dHpPNy8yZzl1THZkemJZRDdRWXdFQXNBQ0FCRU8yNTFCMjd0dDdXZGFQbm8rK2pkZjlYN1dMWC82dmFUUFJHZDFxOW0zKy9xaWZ6MjhrK2ZNS3ZMcis2LzBRQlFOZTVsbllmVjQ2Y0FJQUFJQUFLQUFDQUFDQUFDUVB5RTdWcEtYTjFCc2hyZ3J2ZFhmWDViNVU5YmlzNGVBS3NHd3FvbFVBSGduUlA0S2U4djYvK3YvZ0RhbWcreXg0L28rQ3NBQ0FBQ2dBQWdBQWdBQW9BQWtIZUNzNVl5VmczQTBST1FOWUR2V3NLL3RmNm5IciszVGdnQ3dGMzFyZjdBTlR1ZTc1cjRxK2VoN0VzQXZmVVhBQVFBQVVBQVVGNEFFQUFFZ1BvbDBPd1RjdW9TVnZVRXNub0pxT3I0cnhyUWI3MEVVSDBUa1pzQW54azRmTzN4N0FDMytnTlU5QU80QUNBQUNBQUNnQUFnQUNBQXJGLzZXZjAxdWwwVGQ5WFMwYTZ2MGQxZS8xTUdrbDBCOFpUZ3RmdHJ4RThQUE5YOTVlMWZ3NnhheWwvZC93VUFBVUFBRUFBRUFPVUZBQUVBZ093QXQyeUpGa0VFQUFFQUFRQUFFejhBSUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVVPVEgxOWVma2Rkc3VlL2xkKzkvdG56V3E3b2VyZTFIajMvMFBLNDZ2clAxclc1bmIrOS9wN2FiVThhWjI4dEgreWNDZ0FBZ0FBZ0FBb0FBSUFCUVBmSC8vUDNybjY5UEo3SlZybFYrOS81N3kzL2FUclI4OUgxOCt2djM4OXo3OTlaK1crMHBxLzdSdi9lMi85SHpNMXEvVnZtMzk3L3M5citxLzV4ZVB0cCtaL2NmSFVjUUFBUUFBVUFBRUFBRUFBR0E2Z0N3ZXdDOHBYenZ3SFZxK1ZZSDc5M2ViS0NjcmYvcUFQQjlPN01Ua1A2enB2OUZ0M2Y3Qk43YVRyVC85VzVudEYrWWdRVUFBVUFBRUFEMFB3RkFBT0FwQWFCcUNXNVZCKzV0dUZYbFp5ZVc2QkpjZEVJZDNVNTA2Yms2QUdRZC8xdVhrSGN0UWZjZTkyajdQWDBKdnZYdmFJQ1BCb2pSUzhsdUFoUUFCQUFCUUFBUUFBUUFBVUFBT0RVQVpOL0VsVFVBclY3QzYvMTZ6S3J5MmNjL2F3RE5PaStuM1FRWW5jQjMzNFMyYXdsL05zaEZBOTZ1QUZDMUJGOGRBS0kzQVp2NEJRQUJRQUFRQUFRQUFVQUFFQUJjQW5BVDRFbGZReHY5R3VEc0VtSld2YXErSmxoMUUrWHErbGROd0xNM0wxYmZSTFk3QUl6ZVJGdDlDVEU3Z0dUMy85a1BRZ2dBQW9BQUlBQUlBQUtBQU1BcEFhRHFKcnFuUHdobzlsRzAyUjEvTkFDc1hnS3Nta0JQZVJETXJnY0J6VDdpOVpUanQvb213Tm5qdi9zbXZGTXVBWG9Ra0FBZ0FBZ0FBb0FBSUFBSUFBTEFiUUZnOVk5QmpOYmoxaDhEeWpvUHMvVnYvYi9vL2tmTFI5LzMwMzRNWnRYNXoyNS91L3RaZER6TDZuKzc5NS9WL21icjc4ZUFCQUFCUUFBUUFBUUFBVUFBRUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUlBMytQSDE5ZWRmcjdmVnI3Vy83UDFuYno5cmU3M2JXYlcvVTlvajd4eUhRTWNUQUFRQUFRQUJBTzdxUUszWHo5Ky8vdk1hN1pDeisrMHQvNmwrVmZ2L3ZyK3EvV2NkLysvMWFOVzN0ejMxdnUvUit2ZHVwMVgvNm5aWDFmNTM3ei9ybGIzLzNuYTArMzN2T2o2bnZqOEVBQUZBQUJBQUJBQUJRQUJnMThUZm1yZytkYXpaY3RuYk9hMThkQUNyUHY1VlMralJpVHNhNEVZRFFPdDRWYmViMGVCNFd2OXJIYmZxOXpGYUxxdjlyZnA3cXgyZVZ2L1I4NEFBSUFBSUFBS0FBQ0FBQ0FDc0RnQ25OcUNzcGI5VE9zQnBBMUIwQ2IzcUVzQm9nSm05aEJFZHdHNlpRRzdydjFrQnVqcUFWdjk5TklobUJhK3NEemFqL1JjQlFBQVFBQVFBQVVBQUVBQVFBUFlHZ09nU2F2Yk5nOVVCWUhZQ2pkNThHYTEvZGdBWUhZQUZnTG1CUGpxUlpkMU1tcjFFWDNYcFkzWTcxWmNnczI5R1JnQVFBQVFBQVVBQUVBQUVBSGJmQkRnNkFMN2xKc0NzcjgvdENqalpFK2pUQXNDcW03Q2VlaFBnN0FlUTZFMnNWY2R4ZHYvUmNsVkwrSzN4cHpyQW1JRUZBQUZBQUJBQUJBQUJRQURnbENDdytnRVF1eC9Ja2xXK2VpRGNmUjZpQVRMN0FTZlo5Vi85SUpiWjdVZVh2ck1ENk93U2IvWURaRllmLzJqN1cxM3Y2SU8wcXZzdkFvQUFJQUFJQUFLQUFDQUF3RE1DVlBaQWVHdUExRkxPYW5lN3Q0LytDd0tBQUlBQWdQNExBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBTERTNk0rNlp2ME03T3pQeXZvNVd1MHU0K2ZRdFJ2QVFDd0FJQUJvTjlrZE43c0RSeHZBcWdhVXZmL3M3YXplZjNiN3laNklUdTlYMmUzbjAvWisvdjcxbjFlcjNLZi8zM3Y4UDIxbmR2K3RjbStiTUZlWG4rMi9XZTJ1dFoxUDlmdlVmbWY3M3lueloxay9FQUFFQUFGQUFCQUFCQUFCNEVVQm9EVmc5QTRJVlIyL3RmOW8rZEhqTVBxK1Y3MlBWZnR2TmN6WjR6ODdnS3dPdnJOQlpyVDlySjdJWi9kMzJ2NXZuY0Nyam5jMHNGWDMzNndBTUZyLzBYbXI5OVY2SDlYanB3QWdBQWdBQW9BQUlBQUlBQUpBZndPT0RrRFJBV3Yyd0dhWHoycUFWZldiWGZLYVBiKzkrNG51UC90NFJJLy82RUF5Mnc5bUI4Q3FBSFY3K1YwQjRQYmpQZHNmWjROdjcvL3ZEZENqRS9sby8rdXRYOVlIdU43eFZ3QVFBQVFBQVVBQUVBQUVBQUVndndHMy9sMjFCSlM5bE5ON0FxSW5admNTL3EzMVAvWDR6ZDVFT1h2cGFmUzh2VDBBbkhJVFhkVUV2RG93alM1RnQ4cVB0dGZlY2JucUpzTHNTNmpSRDBqbE44VUtBQUtBQUNBQUNBQUNnQUFnQUF4UGxGa0RZUFdTNys0SlpOVVNVUFh4WDNXSjQ3WkxBTlUzdjdrSjhPekFjMnVBV1BWMXRsTytQaGU5Q1hmVkI2alpEK0FDZ0FBZ0FBZ0FBb0FBSUFBSUFPZDhEYkQ2YTNTN0p1NVR2c2FZdFlSNlcvMVArUnJnNk5KbjlkY0EzL0lnb0xmZjlManFFc0RUSDhUVU8yNnR2Z1JRZmo0RUFBRkFBQkFBQkFBQlFBQjRZUURZdFJTVE5RQm5QOEJsZEdudHRrY1paNS8vVStwL3lrQ3k2bEdzMmNmeDFoOER5dTduMFNYNFhaY1FWbDBDZUdvQTJQVW85ZTBQQWhJQUJBQUJRQUFRQUFRQUFlREZBUURnYldZdjNXU1ZoNHdQNEFBSUFBZ0FBTXdPdkt2S0F3QUNBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCZjdQL2JwMzhwM2VIL1ZBQUFBQUVsRlRrU3VRbUNDXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvZ2FtZS9hc3NldHMvaW1hZ2VzL2RlbW8vZm9udC0xNngzMkAyeC5wbmdcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1BQUFBQ0FDQVlBQUFCZGhHWnJBQUFGc0VsRVFWUjQydTJkM1kwVk1ReEdieG1Vc2FWUUJpVlFFbytVUUNrODNrYzZBR21sSzZRc3hwNUovSlA0UkpxSDNaVkk3SHlIU1NhTy9YaHMyajY5dmYzKzEvTTR2SFcxbTRZUUFJQUorTnYvejEvUDkrZmJqKy92eit2bnFQRkUrNkdLM1FBQUFBRFFXZmd2aDQ4VEVTMjhVUUJSNDVENjl4Wml0dDBBQUFBQUFBQWZYOEhSd3Z2ODljdjdNNDVIK3J1M0VMMlhJbFhzQmdBQUFBQ0UvL0dWbXlVOGFSUHFCYVJrcDdRMFdkVi90dDBBQUFBQUFBRHk4eEtFdC9DMFY3NjJSRmd0UkFtRVZaOUZxOWdOQUFBQUFDeDlubWJoZXd2UHVoUllCYVJrbHdiQ3JCK3k3UVlBQUFBQUFMQy84cjBuUU90UEVrZzBnS3VYaEZsMkF3QUFBQUN0emdSb20wM3Y0TFJzQUxQc0JnQUFBQUNFZi8vWmZSeFovVmZ4UHdBQUFBQjBGTDUyNEtLRlFzeUdSbVNQSTZ2L0t2NlhtclQwR3g4dmZicjNEd0FBQUFBWEptRDgvYXJQb2RvNHRHY1ZBSkk5Vm4rc0JzRGI3bG5oZVlFUTFqOEFBRUJyQUtSTm1OWHhxOEtDcldIQTJuTVhSQzBNM09xUFdmQ2k3UVlBQUFBQUFLajdHVko3NWM4S3NMdmQ3VGZCQ0FFQUFPRENaakE2TVpRMGpxaHc0T2hnd0NwMnR6OFlBd0FBYUExQWxaU0kxVUlCcW9hQ29Gd0FBQUJhSHhCUG4zaUVEd0FBQUFCMWx4cmVtODR4Q2EyVWxEWTcvSGwzK3dFQUFBQUFBT1JDREZFVFlMMkNPRDZyUWhHNjJnOEFBQUFBTlBrQUprdUFraUMweEZTendYQmQ3UWNBQUFBQW1uNzB2M29Dck1sNHBmNDA0V0EvRFFGZ1ArMnVFS29JY094SHV6U08vVFFFZ1AyMDNTWkFTam9iVmFxcHUvMEFBQUFBQUFENUFyUmVFdmNxME5IVmZnQUFBQUFBZ0h3QlppZm43V28vQUFBQUFMRHBsUTlrb2o2L1pmZGJwVUJIdFAwQUFBQUEwQkdBcXlrQnN4SkVSWDMydEFwd1ZXcklMUHUxMWlZOU9nQUFRR3NBdEhCZnEvQzl5NFI2OWZjU3NEVk51VlkwYnhmN1o0VjNUSDBBQUFBQUFEQ1VBYzBHd090U3ZCVGlZQVZnVi9zQkFBQUFBQURzai9kbUxMcEF0ZlhDeStrRnV0dHZnZ0VBQUFEZ1B3NjF2cEs5RDRLaVBvUGUvWTlpTi9zNUNBTUFBS0N0V3lydDJoLzIweEFBOXROMlhhTGhCeG9Uang5b3AweUFsaVk4dXlSU3ROK3ovUUFBQUFBQW5ZVS9mdmFNS2s4YTNXK1YvcXVOQXdBQUFBQTZDbDlLQVJnVkNxR2xLUFFHY0F4K2kxcUNWUEVEQUFBQUFMRFoxYThHUm9HWEpjQ3N5L25aZmdBQUFBQUFsajVQdFRUUTZpWEgxZkJzNzJBMEtRalFPelZqdGg4QUFBQUFvSlB3clk1ZkhaNXJuZGpvd2hoWC9YR0tId0FBQUFDQXphL3VlTzhMS3VNU3cvdFMrRjI3dlF0blIvc0JBQUFBQUFBaFQ0RFphY0h4QXdBQUFINWdDWlNWRUV0YlluZ2R5T0VIQUFBQS9NRG56NmlER0szL3E3K2ZMVkE5YS9mdWZoaGJtOFJZQUFBQXJRSFFDbU5vQmFObko5N2F2L1Q3MlFzaTByOHZKUUJiUFk0cWZyZ3F2T095UXdNQUFBQ0F3Y0dyZ3VLMFVrUFdNcVdyQzFSb2FkQzlBY2oyQXdBQUFBQjBBQ0Q3ODU5V0NramI1SG1YS09ycWh6YWJZQ1llUHdEQXhLdlk2eUJPbXREb1FoRlJTNDdxZm1oM01BWUFBRUJJUkVLd1ZmVWdzR3JwMFJFK0FBQUFBUFFGOHZTSlIvZ0FBQUFBVUg4Q3ZNT0NwZlRnV1NrS3U5Z1BBQUFBQUFoZm40RFpzcWxTbUxIMUlDVHFVbm9YK3dFQUFBQ2dzK0N2VG9CM0VOZzRIdW5BS0V1QXU5c1BBQUFBQUoyRlB6c0JzMEZnMGppMDhjeHVRcnZiRHdBQUFBQUFNRDhCWHA4YnRhdUpWUVM0cS8wQUFBQUFRS3N6QWRvcjNxdFFSM2Y3QVFBQUFJQ1dQd0ZhOGxscFBLY0lNTnQrQUFBQUFBQ0FmQUZtWFFqcGJqOEFBQUFBQUVEK0JFUVY1NXZ0TnlvY09zcCtBQUFBQUdEcDh4U1AvSzhLWWZXbVZPdmZDM3l0ZjY5Z3RDajdwZFl1TXh3QUFFQnJBS1FPdEFsNC9ieEtBTnFtYy9WRmtLc0ZNYlJ3NmQzc3Z5dTg0NUxqQWdBQXRBWkFPL0RSQVBBU3dMZzB5d0pBODlPdTlnTUFBQUJBWndCbUJlRU5RUFJsOE5uUG43dmIzMjRUREFBQUFBQ1ArNm40c2orRGVwK0hhR0NmWWo4SFlnQUFBQUN3VHpyeXJMVGtYZWNEQUFBQUFEWnVmd0FpS3EwakRZMzcxZ0FBQUFCSlJVNUVya0pnZ2c9PVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL2dhbWUvYXNzZXRzL2ltYWdlcy9kZW1vL3dpemFyZC0xNngxNkAyeC5wbmdcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHNvdW5kcyA9IFtdO1xuXG5leHBvcnQge3NvdW5kc307XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvZ2FtZS9hc3NldHMvc291bmRzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBsb2FkaW5nIGZyb20gJy4vbG9hZGluZy9pbmRleC5qcyc7XG5cbmltcG9ydCAqIGFzIGRlbW8gZnJvbSAnLi9kZW1vL2luZGV4LmpzJztcblxuZXhwb3J0IHtcblxuICAgIGxvYWRpbmcsXG5cbiAgICBkZW1vXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL2dhbWUvc2NlbmVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2Rlc3Ryb3l9IGZyb20gJy4vZGVzdHJveS5qcyc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAnLi9yZW5kZXIuanMnO1xuaW1wb3J0IHtzZXR1cH0gZnJvbSAnLi9zZXR1cC5qcyc7XG5pbXBvcnQge3N0YXJ0fSBmcm9tICcuL3N0YXJ0LmpzJztcbmltcG9ydCB7dXBkYXRlfSBmcm9tICcuL3VwZGF0ZS5qcyc7XG5cbmV4cG9ydCB7ZGVzdHJveSwgcmVuZGVyLCBzZXR1cCwgc3RhcnQsIHVwZGF0ZX07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvZ2FtZS9zY2VuZXMvbG9hZGluZy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gZGVzdHJveSgpIHtcblxuICAgIGNvbnNvbGUubG9nKCdkZXN0cm95IGxvYWRpbmcgc2NlbmUnICsgKCh0aGlzLnByZWxvYWRlZCA9PT0gZmFsc2UpID8gJyAtPiBhc3NldHMgYXJlIGxvYWRlZCcgOiAnJykpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tJyk7XG59XG5cbmV4cG9ydCB7ZGVzdHJveX07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvZ2FtZS9zY2VuZXMvbG9hZGluZy9kZXN0cm95LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiByZW5kZXIoKSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZygncmVuZGVyIGxvYWRpbmcgc2NlbmUnKTtcblxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnIzE4MWExZic7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCk7XG5cbiAgICBpZiAodGhpcy5wcmVsb2FkZWQgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSAnMTZweCBDb3VyaWVyIE5ldyc7XG4gICAgICAgIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSAnc3RhcnQnO1xuICAgICAgICB0aGlzLmNvbnRleHQudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnIzZiNzE3ZCc7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dCgnLyBUaGVhdHJlJywgOCwgOCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnI2Q3ZGFlMCc7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dCgnJCBsb2FkaW5nIGFzc2V0cy4uLicsIDgsIDMyKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7cmVuZGVyfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9nYW1lL3NjZW5lcy9sb2FkaW5nL3JlbmRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gc2V0dXAoKSB7XG5cbiAgICBjb25zb2xlLmxvZygnc2V0dXAgbG9hZGluZyBzY2VuZScpO1xufVxuXG5leHBvcnQge3NldHVwfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9nYW1lL3NjZW5lcy9sb2FkaW5nL3NldHVwLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBzdGFydCgpIHtcblxuICAgIGNvbnNvbGUubG9nKCdzdGFydCBsb2FkaW5nIHNjZW5lJyArICgodGhpcy5wcmVsb2FkZWQgPT09IGZhbHNlKSA/ICcgLT4gbG9hZGluZyBhc3NldHMuLi4nIDogJycpKTtcbn1cblxuZXhwb3J0IHtzdGFydH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvZ2FtZS9zY2VuZXMvbG9hZGluZy9zdGFydC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gdXBkYXRlKCkge1xuXG4gICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZSBsb2FkaW5nIHNjZW5lJyk7XG59XG5cbmV4cG9ydCB7dXBkYXRlfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9nYW1lL3NjZW5lcy9sb2FkaW5nL3VwZGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtkZXN0cm95fSBmcm9tICcuL2Rlc3Ryb3kuanMnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJy4vcmVuZGVyLmpzJztcbmltcG9ydCB7c2V0dXB9IGZyb20gJy4vc2V0dXAuanMnO1xuaW1wb3J0IHtzdGFydH0gZnJvbSAnLi9zdGFydC5qcyc7XG5pbXBvcnQge3VwZGF0ZX0gZnJvbSAnLi91cGRhdGUuanMnO1xuXG5leHBvcnQge2Rlc3Ryb3ksIHJlbmRlciwgc2V0dXAsIHN0YXJ0LCB1cGRhdGV9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL2dhbWUvc2NlbmVzL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cbiAgICBjb25zb2xlLmxvZygnZGVzdHJveSBkZW1vIHNjZW5lJyk7XG5cbiAgICB0aGlzLmtleWJvYXJkLmRlc3Ryb3koKTtcblxuICAgIGRlbGV0ZSB0aGlzLmlucHV0cztcbiAgICBkZWxldGUgdGhpcy53b3JsZDtcblxuICAgIGRlbGV0ZSB0aGlzLmtleWJvYXJkO1xuICAgIGRlbGV0ZSB0aGlzLnN5c3RlbXM7XG5cbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLScpO1xufVxuXG5leHBvcnQge2Rlc3Ryb3l9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL2dhbWUvc2NlbmVzL2RlbW8vZGVzdHJveS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gcmVuZGVyKCkge1xuXG4gICAgLy8gY29uc29sZS5sb2coJ3JlbmRlciBkZW1vIHNjZW5lJyk7XG5cbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJyNhOGMwYjAnO1xuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLnNpemUud2lkdGgsIHRoaXMuc2l6ZS5oZWlnaHQpO1xuXG4gICAgdGhpcy5zeXN0ZW1zLmZyYW1lcmF0ZS51cGRhdGUuY2FsbCh0aGlzLCB0aGlzLndvcmxkLmVudGl0aWVzKTtcbiAgICB0aGlzLnN5c3RlbXMuaW1hZ2UudXBkYXRlLmNhbGwodGhpcywgdGhpcy53b3JsZC5lbnRpdGllcyk7XG4gICAgdGhpcy5zeXN0ZW1zLnRleHQudXBkYXRlLmNhbGwodGhpcywgdGhpcy53b3JsZC5lbnRpdGllcyk7XG59XG5cbmV4cG9ydCB7cmVuZGVyfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9nYW1lL3NjZW5lcy9kZW1vL3JlbmRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtLZXlib2FyZH0gZnJvbSAnbW9kdWxlcy9rZXlib2FyZC5qcyc7XG5pbXBvcnQge0RPV04sIExFRlQsIFJJR0hULCBVUH0gZnJvbSAnbW9kdWxlcy9rZXljb2Rlcy5qcyc7XG5pbXBvcnQge1N5c3RlbX0gZnJvbSAnbW9kdWxlcy93b3JsZC5qcyc7XG5cbmltcG9ydCB7YW5pbWF0ZX0gZnJvbSAnc3lzdGVtcy9jb21tb24vYW5pbWF0ZS5qcyc7XG5pbXBvcnQge2ltYWdlfSBmcm9tICdzeXN0ZW1zL2NvbW1vbi9pbWFnZS5qcyc7XG5pbXBvcnQge3JlZnJhbWV9IGZyb20gJ3N5c3RlbXMvY29tbW9uL3JlZnJhbWUuanMnO1xuXG5pbXBvcnQge2ZyYW1lcmF0ZX0gZnJvbSAnc3lzdGVtcy9kZW1vL2ZyYW1lcmF0ZS5qcyc7XG5pbXBvcnQge2lucHV0fSBmcm9tICdzeXN0ZW1zL2RlbW8vaW5wdXQuanMnO1xuaW1wb3J0IHt0ZXh0fSBmcm9tICdzeXN0ZW1zL2RlbW8vdGV4dC5qcyc7XG5cbmZ1bmN0aW9uIHNldHVwKCkge1xuXG4gICAgY29uc29sZS5sb2coJ3NldHVwIGRlbW8gc2NlbmUnKTtcblxuICAgIHRoaXMuaW5wdXRzID0gW107XG5cbiAgICB0aGlzLmtleWJvYXJkID0gbmV3IEtleWJvYXJkKFtVUCwgUklHSFQsIERPV04sIExFRlRdLCB0aGlzLmlucHV0cyk7XG5cbiAgICB0aGlzLnN5c3RlbXMgPSB7XG5cbiAgICAgICAgJ2ZyYW1lcmF0ZSc6IG5ldyBTeXN0ZW0oWydmcmFtZXJhdGUnXSwgZnJhbWVyYXRlLmJpbmQodGhpcykpLFxuICAgICAgICAnaW1hZ2UnOiBuZXcgU3lzdGVtKFsnaW1hZ2UnLCAncG9zaXRpb24nXSwgaW1hZ2UuYmluZCh0aGlzKSksXG4gICAgICAgICd0ZXh0JzogbmV3IFN5c3RlbShbJ2FscGhhYmV0JywgJ3Bvc2l0aW9uJ10sIHRleHQuYmluZCh0aGlzKSksXG5cbiAgICAgICAgJ2FuaW1hdGUnOiBuZXcgU3lzdGVtKFsnYW5pbWF0aW9uJ10sIGFuaW1hdGUuYmluZCh0aGlzKSksXG4gICAgICAgICdpbnB1dCc6IG5ldyBTeXN0ZW0oWydpbnB1dCddLCBpbnB1dC5iaW5kKHRoaXMpKSxcbiAgICAgICAgJ3JlZnJhbWUnOiBuZXcgU3lzdGVtKFsnYW5pbWF0aW9uJywgJ2ltYWdlJ10sIHJlZnJhbWUuYmluZCh0aGlzKSlcbiAgICB9O1xufVxuXG5leHBvcnQge3NldHVwfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9nYW1lL3NjZW5lcy9kZW1vL3NldHVwLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2tleW5hbWVzfSBmcm9tICcuL2tleW5hbWVzLmpzJztcblxuZnVuY3Rpb24gS2V5Ym9hcmQoY29kZXMsIGlucHV0cykge1xuXG4gICAgY29uc3QgbmFtZXMgPSBbXTtcbiAgICBjb25zdCBzdGF0ZXMgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGJsdXIoKSB7XG5cbiAgICAgICAgZm9yIChsZXQgc3RhdGUgaW4gc3RhdGVzKSB7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZXMuaGFzT3duUHJvcGVydHkoc3RhdGUpXG4gICAgICAgICAgICAmJiBzdGF0ZXNbc3RhdGVdID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBzdGF0ZXNbc3RhdGVdID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpbnB1dHMucHVzaCh7XG5cbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnS0VZQk9BUkQnLFxuICAgICAgICAgICAgICAgICAgICAnYWN0aW9uJzogc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6ICdVUCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGJsdXIpO1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bik7XG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5dXApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGtleWRvd24oZXZlbnQpIHtcblxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBjb2Rlcy5pbmRleE9mKGNvZGUpO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTFcbiAgICAgICAgJiYgc3RhdGVzW25hbWVzW2luZGV4XV0gPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHN0YXRlc1tuYW1lc1tpbmRleF1dID0gdHJ1ZTtcblxuICAgICAgICAgICAgaW5wdXRzLnB1c2goe1xuXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnS0VZQk9BUkQnLFxuICAgICAgICAgICAgICAgICdhY3Rpb24nOiBuYW1lc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgJ3N0YXRlJzogJ0RPV04nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGtleXVwKGV2ZW50KSB7XG5cbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gY29kZXMuaW5kZXhPZihjb2RlKTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xXG4gICAgICAgICYmIHN0YXRlc1tuYW1lc1tpbmRleF1dID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHN0YXRlc1tuYW1lc1tpbmRleF1dID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlucHV0cy5wdXNoKHtcblxuICAgICAgICAgICAgICAgICd0eXBlJzogJ0tFWUJPQVJEJyxcbiAgICAgICAgICAgICAgICAnYWN0aW9uJzogbmFtZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICdzdGF0ZSc6ICdVUCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXAoKSB7XG5cbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGJsdXIpO1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bik7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5dXApO1xuICAgIH1cblxuICAgIGNvZGVzLmZvckVhY2goKGNvZGUpID0+IHtcblxuICAgICAgICBpZiAodHlwZW9mIGtleW5hbWVzW2NvZGVdICE9PSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gJ0tFWV8nICsga2V5bmFtZXNbY29kZV07XG5cbiAgICAgICAgICAgIGNvZGVzLnB1c2goY29kZSk7XG4gICAgICAgICAgICBuYW1lcy5wdXNoKG5hbWUpO1xuXG4gICAgICAgICAgICBzdGF0ZXNbbmFtZV0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2V0dXAuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuZGVzdHJveSA9IGRlc3Ryb3k7XG4gICAgdGhpcy5zZXR1cCA9IHNldHVwO1xufVxuXG4vLyBleHBvcnRzIGN1cnJlbnQgbW9kdWxlIGFzIGFuIG9iamVjdFxuZXhwb3J0IHtLZXlib2FyZH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvdGhlYXRyZS9tb2R1bGVzL2tleWJvYXJkLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBrZXluYW1lcyA9IFtdO1xuXG5rZXluYW1lc1s5XSA9ICdUQUInO1xua2V5bmFtZXNbMTNdID0gJ0VOVEVSJztcbmtleW5hbWVzWzE2XSA9ICdTSElGVCc7XG5rZXluYW1lc1sxN10gPSAnQ1RSTCc7XG5rZXluYW1lc1sxOF0gPSAnQUxUJztcbmtleW5hbWVzWzI3XSA9ICdFU0MnO1xua2V5bmFtZXNbMzJdID0gJ1NQQUNFJztcblxua2V5bmFtZXNbMzddID0gJ0xFRlQnO1xua2V5bmFtZXNbMzhdID0gJ1VQJztcbmtleW5hbWVzWzM5XSA9ICdSSUdIVCc7XG5rZXluYW1lc1s0MF0gPSAnRE9XTic7XG5cbmtleW5hbWVzWzQ4XSA9ICdaRVJPJztcbmtleW5hbWVzWzQ5XSA9ICdPTkUnO1xua2V5bmFtZXNbNTBdID0gJ1RXTyc7XG5rZXluYW1lc1s1MV0gPSAnVEhSRUUnO1xua2V5bmFtZXNbNTJdID0gJ0ZPVVInO1xua2V5bmFtZXNbNTNdID0gJ0ZJVkUnO1xua2V5bmFtZXNbNTRdID0gJ1NJWCc7XG5rZXluYW1lc1s1NV0gPSAnU0VWRU4nO1xua2V5bmFtZXNbNTZdID0gJ0VJR0hUJztcbmtleW5hbWVzWzU3XSA9ICdOSU5FJztcblxua2V5bmFtZXNbNjVdID0gJ0EnO1xua2V5bmFtZXNbNjZdID0gJ0InO1xua2V5bmFtZXNbNjddID0gJ0MnO1xua2V5bmFtZXNbNjhdID0gJ0QnO1xua2V5bmFtZXNbNjldID0gJ0UnO1xua2V5bmFtZXNbNzBdID0gJ0YnO1xua2V5bmFtZXNbNzFdID0gJ0cnO1xua2V5bmFtZXNbNzJdID0gJ0gnO1xua2V5bmFtZXNbNzNdID0gJ0knO1xua2V5bmFtZXNbNzRdID0gJ0onO1xua2V5bmFtZXNbNzVdID0gJ0snO1xua2V5bmFtZXNbNzZdID0gJ0wnO1xua2V5bmFtZXNbNzddID0gJ00nO1xua2V5bmFtZXNbNzhdID0gJ04nO1xua2V5bmFtZXNbNzldID0gJ08nO1xua2V5bmFtZXNbODBdID0gJ1AnO1xua2V5bmFtZXNbODFdID0gJ1EnO1xua2V5bmFtZXNbODJdID0gJ1InO1xua2V5bmFtZXNbODNdID0gJ1MnO1xua2V5bmFtZXNbODRdID0gJ1QnO1xua2V5bmFtZXNbODVdID0gJ1UnO1xua2V5bmFtZXNbODZdID0gJ1YnO1xua2V5bmFtZXNbODddID0gJ1cnO1xua2V5bmFtZXNbODhdID0gJ1gnO1xua2V5bmFtZXNbODldID0gJ1knO1xua2V5bmFtZXNbOTBdID0gJ1onO1xuXG4vLyBleHBvcnRzIGN1cnJlbnQgbW9kdWxlIGFzIGFuIGFycmF5XG5leHBvcnQge2tleW5hbWVzfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy90aGVhdHJlL21vZHVsZXMva2V5bmFtZXMuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFRBQiA9IDk7XG5jb25zdCBFTlRFUiA9IDEzO1xuY29uc3QgU0hJRlQgPSAxNjtcbmNvbnN0IENUUkwgPSAxNztcbmNvbnN0IEFMVCA9IDE4O1xuY29uc3QgRVNDID0gMjc7XG5jb25zdCBTUEFDRSA9IDMyO1xuXG5jb25zdCBMRUZUID0gMzc7XG5jb25zdCBVUCA9IDM4O1xuY29uc3QgUklHSFQgPSAzOTtcbmNvbnN0IERPV04gPSA0MDtcblxuY29uc3QgWkVSTyA9IDQ4O1xuY29uc3QgT05FID0gNDk7XG5jb25zdCBUV08gPSA1MDtcbmNvbnN0IFRIUkVFID0gNTE7XG5jb25zdCBGT1VSID0gNTI7XG5jb25zdCBGSVZFID0gNTM7XG5jb25zdCBTSVggPSA1NDtcbmNvbnN0IFNFVkVOID0gNTU7XG5jb25zdCBFSUdIVCA9IDU2O1xuY29uc3QgTklORSA9IDU3O1xuXG5jb25zdCBBID0gNjU7XG5jb25zdCBCID0gNjY7XG5jb25zdCBDID0gNjc7XG5jb25zdCBEID0gNjg7XG5jb25zdCBFID0gNjk7XG5jb25zdCBGID0gNzA7XG5jb25zdCBHID0gNzE7XG5jb25zdCBIID0gNzI7XG5jb25zdCBJID0gNzM7XG5jb25zdCBKID0gNzQ7XG5jb25zdCBLID0gNzU7XG5jb25zdCBMID0gNzY7XG5jb25zdCBNID0gNzc7XG5jb25zdCBOID0gNzg7XG5jb25zdCBPID0gNzk7XG5jb25zdCBQID0gODA7XG5jb25zdCBRID0gODE7XG5jb25zdCBSID0gODI7XG5jb25zdCBTID0gODM7XG5jb25zdCBUID0gODQ7XG5jb25zdCBVID0gODU7XG5jb25zdCBWID0gODY7XG5jb25zdCBXID0gODc7XG5jb25zdCBYID0gODg7XG5jb25zdCBZID0gODk7XG5jb25zdCBaID0gOTA7XG5cbmV4cG9ydCB7XG5cbiAgICAvLyBleHBvcnRzIGNvbnRyb2wga2V5c1xuICAgIFRBQiwgRU5URVIsIFNISUZULCBDVFJMLCBBTFQsIEVTQywgU1BBQ0UsXG5cbiAgICAvLyBleHBvcnRzIGFycm93IGtleXNcbiAgICBMRUZULCBVUCwgUklHSFQsIERPV04sXG5cbiAgICAvLyBleHBvcnRzIG51bWVyaWMga2V5c1xuICAgIFpFUk8sIE9ORSwgVFdPLCBUSFJFRSwgRk9VUiwgRklWRSwgU0lYLCBTRVZFTiwgRUlHSFQsIE5JTkUsXG5cbiAgICAvLyBleHBvcnRzIGFsaGFiZXRpYyBrZXlzXG4gICAgQSwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgSiwgSywgTCwgTSwgTiwgTywgUCwgUSwgUiwgUywgVCwgVSwgViwgVywgWCwgWSwgWlxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy90aGVhdHJlL21vZHVsZXMva2V5Y29kZXMuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGFuaW1hdGUoZW50aXR5KSB7XG5cbiAgICBjb25zdCBhbmltYXRpb25Db21wb25lbnQgPSBlbnRpdHkuZ2V0KCdhbmltYXRpb24nKTtcblxuICAgIGlmIChhbmltYXRpb25Db21wb25lbnQuZnJhbWVzLmxlbmd0aCA+IDEpIHtcblxuICAgICAgICBhbmltYXRpb25Db21wb25lbnQuZWxhcHNlZCArPSB0aGlzLmRlbHRhLnVwZGF0ZTtcblxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IDEwMDAgLyBhbmltYXRpb25Db21wb25lbnQuZnJhbWVyYXRlO1xuXG4gICAgICAgIHdoaWxlIChhbmltYXRpb25Db21wb25lbnQuZWxhcHNlZCA+PSBkdXJhdGlvbikge1xuXG4gICAgICAgICAgICBhbmltYXRpb25Db21wb25lbnQuZWxhcHNlZCAtPSBkdXJhdGlvbjtcbiAgICAgICAgICAgIGFuaW1hdGlvbkNvbXBvbmVudC5mcmFtZSA9IChhbmltYXRpb25Db21wb25lbnQuZnJhbWUgPT09IGFuaW1hdGlvbkNvbXBvbmVudC5mcmFtZXMubGVuZ3RoIC0gMSkgPyAwIDogYW5pbWF0aW9uQ29tcG9uZW50LmZyYW1lICsgMTtcbiAgICAgICAgICAgIGFuaW1hdGlvbkNvbXBvbmVudC5jdXJyZW50ID0gYW5pbWF0aW9uQ29tcG9uZW50LmZyYW1lc1thbmltYXRpb25Db21wb25lbnQuZnJhbWVdO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge2FuaW1hdGV9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL2dhbWUvc3lzdGVtcy9jb21tb24vYW5pbWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gaW1hZ2UoZW50aXR5KSB7XG5cbiAgICBjb25zdCBpbWFnZUNvbXBvbmVudCA9IGVudGl0eS5nZXQoJ2ltYWdlJyk7XG4gICAgY29uc3QgcG9zaXRpb25Db21wb25lbnQgPSBlbnRpdHkuZ2V0KCdwb3NpdGlvbicpO1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShcblxuICAgICAgICBpbWFnZUNvbXBvbmVudC5pbWFnZSxcbiAgICAgICAgaW1hZ2VDb21wb25lbnQuZnJhbWVbMF0gKiBpbWFnZUNvbXBvbmVudC5zaXplWzBdLCBpbWFnZUNvbXBvbmVudC5mcmFtZVsxXSAqIGltYWdlQ29tcG9uZW50LnNpemVbMV0sIGltYWdlQ29tcG9uZW50LnNpemVbMF0sIGltYWdlQ29tcG9uZW50LnNpemVbMV0sXG4gICAgICAgIHBvc2l0aW9uQ29tcG9uZW50LngsIHBvc2l0aW9uQ29tcG9uZW50LnksIGltYWdlQ29tcG9uZW50LnNpemVbMF0sIGltYWdlQ29tcG9uZW50LnNpemVbMV1cbiAgICApO1xufVxuXG5leHBvcnQge2ltYWdlfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9nYW1lL3N5c3RlbXMvY29tbW9uL2ltYWdlLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiByZWZyYW1lKGVudGl0eSkge1xuXG4gICAgZW50aXR5LmdldCgnaW1hZ2UnKS5mcmFtZSA9IGVudGl0eS5nZXQoJ2FuaW1hdGlvbicpLmN1cnJlbnQ7XG59XG5cbmV4cG9ydCB7cmVmcmFtZX07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvZ2FtZS9zeXN0ZW1zL2NvbW1vbi9yZWZyYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBmcmFtZXJhdGUoZW50aXR5KSB7XG5cbiAgICBjb25zdCBmcmFtZXJhdGVDb21wb25lbnQgPSBlbnRpdHkuZ2V0KCdmcmFtZXJhdGUnKTtcblxuICAgIGZyYW1lcmF0ZUNvbXBvbmVudC5lbGFwc2VkICs9IHRoaXMuZGVsdGEucmVuZGVyO1xuICAgIGZyYW1lcmF0ZUNvbXBvbmVudC5mcmFtZXMgKz0gMTtcblxuICAgIGlmIChmcmFtZXJhdGVDb21wb25lbnQuZWxhcHNlZCA+PSAxMDAwKSB7XG5cbiAgICAgICAgZW50aXR5LmdldCgndGV4dCcpLnRleHQgPSAnZnBzOicgKyBNYXRoLnJvdW5kKGZyYW1lcmF0ZUNvbXBvbmVudC5mcmFtZXMgKiAxMDAwIC8gZnJhbWVyYXRlQ29tcG9uZW50LmVsYXBzZWQpO1xuICAgICAgICBmcmFtZXJhdGVDb21wb25lbnQuZWxhcHNlZCA9IDA7XG4gICAgICAgIGZyYW1lcmF0ZUNvbXBvbmVudC5mcmFtZXMgPSAwO1xuICAgIH1cbn1cblxuZXhwb3J0IHtmcmFtZXJhdGV9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL2dhbWUvc3lzdGVtcy9kZW1vL2ZyYW1lcmF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtBbmltYXRpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2FuaW1hdGlvbi5qcyc7XG5pbXBvcnQge0ltYWdlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pbWFnZS5qcyc7XG5cbmltcG9ydCB7RGlyZWN0aW9ufSBmcm9tICdjb21wb25lbnRzL2RlbW8vZGlyZWN0aW9uLmpzJztcbmltcG9ydCB7UnVufSBmcm9tICdjb21wb25lbnRzL2RlbW8vcnVuLmpzJztcbmltcG9ydCB7U3ByaXRlc2hlZXR9IGZyb20gJ2NvbXBvbmVudHMvZGVtby9zcHJpdGVzaGVldC5qcyc7XG5cbmZ1bmN0aW9uIGlucHV0KGVudGl0eSkge1xuXG4gICAgdGhpcy5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcblxuICAgICAgICBjb25zdCBkaXJlY3Rpb25Db21wb25lbnQgPSBlbnRpdHkuZ2V0KCdkaXJlY3Rpb24nKTtcbiAgICAgICAgY29uc3QgaW1hZ2VDb21wb25lbnQgPSBlbnRpdHkuZ2V0KCdpbWFnZScpO1xuICAgICAgICBjb25zdCBpbnB1dENvbXBvbmVudCA9IGVudGl0eS5nZXQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHNwcml0ZXNoZWV0Q29tcG9uZW50ID0gZW50aXR5LmdldCgnc3ByaXRlc2hlZXQnKTtcblxuICAgICAgICBpZiAoaW5wdXRDb21wb25lbnQuaW5wdXRzLmluZGV4T2YoaW5wdXQuYWN0aW9uKSAhPT0gLTFcbiAgICAgICAgJiYgaW5wdXQuc3RhdGUgPT09ICdET1dOJykge1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGlucHV0LmFjdGlvbikge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnS0VZX1VQJzpcblxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuYWRkKFtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFJ1bigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERpcmVjdGlvbignVVAnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBbmltYXRpb24oc3ByaXRlc2hlZXRDb21wb25lbnQuc3ByaXRlc2hlZXRbJ1JVTl9VUCddKVxuICAgICAgICAgICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnS0VZX1JJR0hUJzpcblxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuYWRkKFtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFJ1bigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERpcmVjdGlvbignUklHSFQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBbmltYXRpb24oc3ByaXRlc2hlZXRDb21wb25lbnQuc3ByaXRlc2hlZXRbJ1JVTl9SSUdIVCddKVxuICAgICAgICAgICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnS0VZX0RPV04nOlxuXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5hZGQoW1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUnVuKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGlyZWN0aW9uKCdET1dOJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQW5pbWF0aW9uKHNwcml0ZXNoZWV0Q29tcG9uZW50LnNwcml0ZXNoZWV0WydSVU5fRE9XTiddKVxuICAgICAgICAgICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnS0VZX0xFRlQnOlxuXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5hZGQoW1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUnVuKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGlyZWN0aW9uKCdMRUZUJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQW5pbWF0aW9uKHNwcml0ZXNoZWV0Q29tcG9uZW50LnNwcml0ZXNoZWV0WydSVU5fTEVGVCddKVxuICAgICAgICAgICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAoZW50aXR5LmhhcyhbJ3J1biddKSA9PT0gdHJ1ZVxuICAgICAgICAmJiBpbnB1dENvbXBvbmVudC5pbnB1dHMuaW5kZXhPZihpbnB1dC5hY3Rpb24pICE9PSAtMVxuICAgICAgICAmJiBpbnB1dC5zdGF0ZSA9PT0gJ1VQJykge1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGlucHV0LmFjdGlvbikge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnS0VZX1VQJzpcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQ29tcG9uZW50LmRpcmVjdGlvbiA9PT0gJ1VQJykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkucmVtb3ZlKFsnYW5pbWF0aW9uJywgJ3J1biddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlQ29tcG9uZW50LmZyYW1lID0gc3ByaXRlc2hlZXRDb21wb25lbnQuc3ByaXRlc2hlZXRbJ0lETEVfVVAnXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdLRVlfUklHSFQnOlxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25Db21wb25lbnQuZGlyZWN0aW9uID09PSAnUklHSFQnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5yZW1vdmUoWydhbmltYXRpb24nLCAncnVuJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VDb21wb25lbnQuZnJhbWUgPSBzcHJpdGVzaGVldENvbXBvbmVudC5zcHJpdGVzaGVldFsnSURMRV9SSUdIVCddO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ0tFWV9ET1dOJzpcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uQ29tcG9uZW50LmRpcmVjdGlvbiA9PT0gJ0RPV04nKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5yZW1vdmUoWydhbmltYXRpb24nLCAncnVuJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VDb21wb25lbnQuZnJhbWUgPSBzcHJpdGVzaGVldENvbXBvbmVudC5zcHJpdGVzaGVldFsnSURMRV9ET1dOJ107XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnS0VZX0xFRlQnOlxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb25Db21wb25lbnQuZGlyZWN0aW9uID09PSAnTEVGVCcpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LnJlbW92ZShbJ2FuaW1hdGlvbicsICdydW4nXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUNvbXBvbmVudC5mcmFtZSA9IHNwcml0ZXNoZWV0Q29tcG9uZW50LnNwcml0ZXNoZWV0WydJRExFX0xFRlQnXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IHtpbnB1dH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvZ2FtZS9zeXN0ZW1zL2RlbW8vaW5wdXQuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIFJ1bigpIHtcblxuICAgIHRoaXMubmFtZSA9ICdydW4nO1xufVxuXG5leHBvcnQge1J1bn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvZ2FtZS9jb21wb25lbnRzL2RlbW8vcnVuLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiB0ZXh0KGVudGl0eSkge1xuXG4gICAgY29uc3QgYWxwaGFiZXRDb21wb25lbnQgPSBlbnRpdHkuZ2V0KCdhbHBoYWJldCcpO1xuICAgIGNvbnN0IHBvc2l0aW9uQ29tcG9uZW50ID0gZW50aXR5LmdldCgncG9zaXRpb24nKTtcbiAgICBjb25zdCBzcHJpdGVzaGVldENvbXBvbmVudCA9IGVudGl0eS5nZXQoJ3Nwcml0ZXNoZWV0Jyk7XG4gICAgY29uc3QgdGV4dENvbXBvbmVudCA9IGVudGl0eS5nZXQoJ3RleHQnKTtcblxuICAgIHRleHRDb21wb25lbnQudGV4dC5zcGxpdCgnJykuZm9yRWFjaCgoY2hhcmFjdGVyLCBpbmRleCkgPT4ge1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoXG5cbiAgICAgICAgICAgIGFscGhhYmV0Q29tcG9uZW50LmltYWdlLFxuICAgICAgICAgICAgc3ByaXRlc2hlZXRDb21wb25lbnQuc3ByaXRlc2hlZXRbY2hhcmFjdGVyXVswXSAqIGFscGhhYmV0Q29tcG9uZW50LnNpemVbMF0sIHNwcml0ZXNoZWV0Q29tcG9uZW50LnNwcml0ZXNoZWV0W2NoYXJhY3Rlcl1bMV0gKiBhbHBoYWJldENvbXBvbmVudC5zaXplWzFdLCBhbHBoYWJldENvbXBvbmVudC5zaXplWzBdLCBhbHBoYWJldENvbXBvbmVudC5zaXplWzFdLFxuICAgICAgICAgICAgcG9zaXRpb25Db21wb25lbnQueCArIGluZGV4ICogYWxwaGFiZXRDb21wb25lbnQuc2l6ZVswXSwgcG9zaXRpb25Db21wb25lbnQueSwgYWxwaGFiZXRDb21wb25lbnQuc2l6ZVswXSwgYWxwaGFiZXRDb21wb25lbnQuc2l6ZVsxXVxuICAgICAgICApO1xuICAgIH0pO1xufVxuXG5leHBvcnQge3RleHR9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL2dhbWUvc3lzdGVtcy9kZW1vL3RleHQuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7RW50aXR5LCBXb3JsZH0gZnJvbSAnbW9kdWxlcy93b3JsZC5qcyc7XG5cbmltcG9ydCB7QW5pbWF0aW9ufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24uanMnO1xuaW1wb3J0IHtJbWFnZX0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaW1hZ2UuanMnO1xuaW1wb3J0IHtQb3NpdGlvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vcG9zaXRpb24uanMnO1xuXG5pbXBvcnQge0FscGhhYmV0fSBmcm9tICdjb21wb25lbnRzL2RlbW8vYWxwaGFiZXQuanMnO1xuaW1wb3J0IHtEaXJlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvZGVtby9kaXJlY3Rpb24uanMnO1xuaW1wb3J0IHtGcmFtZXJhdGV9IGZyb20gJ2NvbXBvbmVudHMvZGVtby9mcmFtZXJhdGUuanMnO1xuaW1wb3J0IHtJbnB1dH0gZnJvbSAnY29tcG9uZW50cy9kZW1vL2lucHV0LmpzJztcbmltcG9ydCB7U3ByaXRlc2hlZXR9IGZyb20gJ2NvbXBvbmVudHMvZGVtby9zcHJpdGVzaGVldC5qcyc7XG5pbXBvcnQge1RleHR9IGZyb20gJ2NvbXBvbmVudHMvZGVtby90ZXh0LmpzJztcblxuZnVuY3Rpb24gc3RhcnQoKSB7XG5cbiAgICBjb25zb2xlLmxvZygnc3RhcnQgZGVtbyBzY2VuZScpO1xuXG4gICAgdGhpcy5pbnB1dHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLndvcmxkID0gbmV3IFdvcmxkKCk7XG5cbiAgICB0aGlzLndvcmxkLmFkZChuZXcgRW50aXR5KCdoZXJvJywgW1xuXG4gICAgICAgIG5ldyBEaXJlY3Rpb24oJ0RPV04nKSxcbiAgICAgICAgbmV3IEltYWdlKHRoaXMuYXNzZXRzLmltYWdlcy5kZW1vWyd3aXphcmQnXSwgWzMyLCAzMl0sIFszLCAyXSksXG4gICAgICAgIG5ldyBJbnB1dChbJ0tFWV9VUCcsICdLRVlfUklHSFQnLCAnS0VZX0RPV04nLCAnS0VZX0xFRlQnXSksXG4gICAgICAgIG5ldyBQb3NpdGlvbih0aGlzLnNpemUud2lkdGggLyAyIC0gMTYsIHRoaXMuc2l6ZS5oZWlnaHQgLyAyIC0gMTYpLFxuICAgICAgICBuZXcgU3ByaXRlc2hlZXQodGhpcy5hc3NldHMuZGF0YXNldHMuZGVtb1snd2l6YXJkJ10pXG4gICAgXSkpO1xuXG4gICAgdGhpcy53b3JsZC5hZGQobmV3IEVudGl0eSgnZnJhbWVyYXRlJywgW1xuXG4gICAgICAgIG5ldyBQb3NpdGlvbig4LCA4KSxcbiAgICAgICAgbmV3IFRleHQoJ2Zwczo2MCcpLFxuICAgICAgICBuZXcgRnJhbWVyYXRlKCksXG4gICAgICAgIG5ldyBBbHBoYWJldCh0aGlzLmFzc2V0cy5pbWFnZXMuZGVtb1snZm9udCddLCBbMTYsIDMyXSksXG4gICAgICAgIG5ldyBTcHJpdGVzaGVldCh0aGlzLmFzc2V0cy5kYXRhc2V0cy5kZW1vWydmb250J10pXG4gICAgXSkpO1xufVxuXG5leHBvcnQge3N0YXJ0fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9nYW1lL3NjZW5lcy9kZW1vL3N0YXJ0LmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBQb3NpdGlvbih4LCB5KSB7XG5cbiAgICB0aGlzLm5hbWUgPSAncG9zaXRpb24nO1xuXG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xufVxuXG5leHBvcnQge1Bvc2l0aW9ufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9nYW1lL2NvbXBvbmVudHMvY29tbW9uL3Bvc2l0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBBbHBoYWJldChpbWFnZSwgc2l6ZSkge1xuXG4gICAgdGhpcy5uYW1lID0gJ2FscGhhYmV0JztcblxuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xufVxuXG5leHBvcnQge0FscGhhYmV0fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9nYW1lL2NvbXBvbmVudHMvZGVtby9hbHBoYWJldC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gRnJhbWVyYXRlKCkge1xuXG4gICAgdGhpcy5uYW1lID0gJ2ZyYW1lcmF0ZSc7XG5cbiAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgIHRoaXMuZnJhbWVzID0gMDtcbn1cblxuZXhwb3J0IHtGcmFtZXJhdGV9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL2dhbWUvY29tcG9uZW50cy9kZW1vL2ZyYW1lcmF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gSW5wdXQoaW5wdXRzKSB7XG5cbiAgICB0aGlzLm5hbWUgPSAnaW5wdXQnO1xuXG4gICAgdGhpcy5pbnB1dHMgPSBpbnB1dHM7XG59XG5cbmV4cG9ydCB7SW5wdXR9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL2dhbWUvY29tcG9uZW50cy9kZW1vL2lucHV0LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBUZXh0KHRleHQpIHtcblxuICAgIHRoaXMubmFtZSA9ICd0ZXh0JztcblxuICAgIHRoaXMudGV4dCA9IHRleHQ7XG59XG5cbmV4cG9ydCB7VGV4dH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvZ2FtZS9jb21wb25lbnRzL2RlbW8vdGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtyYW5kb219IGZyb20gJ21vZHVsZXMvcmFuZG9tLmpzJztcbmltcG9ydCB7c2h1ZmZsZX0gZnJvbSAnbW9kdWxlcy9zaHVmZmxlLmpzJztcblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuXG4gICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZSBkZW1vIHNjZW5lJyk7XG5cbiAgICB0aGlzLnN5c3RlbXMuaW5wdXQudXBkYXRlLmNhbGwodGhpcywgdGhpcy53b3JsZC5lbnRpdGllcyk7XG4gICAgdGhpcy5zeXN0ZW1zLmFuaW1hdGUudXBkYXRlLmNhbGwodGhpcywgdGhpcy53b3JsZC5lbnRpdGllcyk7XG4gICAgdGhpcy5zeXN0ZW1zLnJlZnJhbWUudXBkYXRlLmNhbGwodGhpcywgdGhpcy53b3JsZC5lbnRpdGllcyk7XG5cbiAgICB0aGlzLmlucHV0cy5sZW5ndGggPSAwO1xufVxuXG5leHBvcnQge3VwZGF0ZX07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvZ2FtZS9zY2VuZXMvZGVtby91cGRhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHJhbmRvbShpdGVtcykge1xuXG4gICAgaWYgKHR5cGVvZiBpdGVtcyA9PT0gJ251bWJlcidcbiAgICAmJiBpdGVtcyAlIDEgPT09IDBcbiAgICAmJiBpdGVtcyA+IDApIHtcblxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpdGVtcyAqIE1hdGgucmFuZG9tKCkpICsgMTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtcylcbiAgICAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zW01hdGguZmxvb3IoaXRlbXMubGVuZ3RoICogTWF0aC5yYW5kb20oKSldO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG4vLyBleHBvcnRzIGN1cnJlbnQgbW9kdWxlIGFzIGEgZnVuY3Rpb25cbmV4cG9ydCB7cmFuZG9tfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy90aGVhdHJlL21vZHVsZXMvcmFuZG9tLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBzaHVmZmxlKGFycmF5KSB7XG5cbiAgICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgICAvLyBGaXNoZXItWWF0ZXMgc2h1ZmZsZVxuICAgIGZvciAobGV0IGl0ZXJhdG9yID0gMDsgaXRlcmF0b3IgPCBsZW5ndGg7IGl0ZXJhdG9yICs9IDEpIHtcblxuICAgICAgICAvLyBkZWZpbmUgdGFyZ2V0IHJhbmRvbWl6ZWQgaW5kZXggZnJvbSBnaXZlbiBhcnJheVxuICAgICAgICBjb25zdCB0YXJnZXQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaXRlcmF0b3IgKyAxKSk7XG5cbiAgICAgICAgLy8gaWYgdGFyZ2V0IGluZGV4IGlzIGRpZmZlcmVudCBvZiBjdXJyZW50IGl0ZXJhdG9yIHRoZW4gc3dpdGNoIHZhbHVlc1xuICAgICAgICBpZiAodGFyZ2V0ICE9PSBpdGVyYXRvcikge1xuXG4gICAgICAgICAgICBjb25zdCB0ZW1wb3JhcnkgPSBhcnJheVtpdGVyYXRvcl07XG5cbiAgICAgICAgICAgIC8vIHN3aXRjaCB2YWx1ZXNcbiAgICAgICAgICAgIGFycmF5W2l0ZXJhdG9yXSA9IGFycmF5W3RhcmdldF07XG4gICAgICAgICAgICBhcnJheVt0YXJnZXRdID0gdGVtcG9yYXJ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBnaXZlbiBhcnJheSB3aXRoIG11dGF0aW9uXG4gICAgcmV0dXJuIGFycmF5O1xufVxuXG4vLyBleHBvcnRzIGN1cnJlbnQgbW9kdWxlIGFzIGEgZnVuY3Rpb25cbmV4cG9ydCB7c2h1ZmZsZX07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvdGhlYXRyZS9tb2R1bGVzL3NodWZmbGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=