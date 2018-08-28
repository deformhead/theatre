import {Canvas} from 'core/canvas.js';
import {Loop} from 'core/loop.js';
import {preload} from 'core/preload.js';

import {assets} from 'assets/index.js';

import * as scenes from 'scenes/index.js';

function Theatre(config) {

    const {container, loading, opening, size} = config;

    const debug = config.debug || false;
    const framerate = config.framerate || 60;
    const sharp = config.sharp || false;

    let next = null;

    function initialize() {

        const canvas = new Canvas('2d', 'theatre', size.width, size.height);

        if (sharp === true) {

            canvas.sharp();
        }

        container.appendChild(canvas.element);

        this.container = container;
        this.context = canvas.context;
        this.element = canvas.element;

        this.assets = {};
        this.scene = this.scenes[loading];
        this.scene.setup.call(this);
        this.scene.start.call(this);

        const loop = new Loop(framerate);

        loop.update((timeframe) => {

            this.scene.update.call(this, timeframe);

            if (next !== null) {

                this.scene.destroy.call(this);
                this.scene = this.scenes[next];
                this.scene.setup.call(this);
                this.scene.start.call(this);

                next = null;
            }
        });

        loop.render(() => this.scene.render.call(this));

        preload(assets, (assets) => {

            assets.forEach((asset) => {

                if (typeof this.assets[asset.type + 's'] === 'undefined') {

                    this.assets[asset.type + 's'] = [];
                }

                this.assets[asset.type + 's'][asset.name] = asset.content;
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
    this.scenes = scenes;
    this.size = size;

    this.load = load;
    this.restart = restart;

    initialize.call(this, config);

    if (debug === true) {

        window.theatre = this;
    }
}

// exports current module as an object
export {Theatre};
