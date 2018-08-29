import {Keyboard} from 'modules/keyboard.js';
import {DOWN, LEFT, RIGHT, UP} from 'modules/keycodes.js';
import {System} from 'modules/world.js';

import {animate} from 'systems/common/animate.js';
import {render} from 'systems/common/render.js';

import {input} from 'systems/demo/input.js';
import {text} from 'systems/demo/text.js';

function setup() {

    console.log('setup demo scene');

    this.inputs = [];

    this.keyboard = new Keyboard([UP, RIGHT, DOWN, LEFT], this.inputs);

    this.systems = {

        'animate': new System(['animation', 'image'], animate.bind(this)),
        'input': new System(['input'], input.bind(this)),
        'render': new System(['image', 'position'], render.bind(this)),
        'text': new System(['alphabet', 'position'], text.bind(this))
    };
}

export {setup};
