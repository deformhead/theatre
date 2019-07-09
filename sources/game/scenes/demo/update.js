import {animate} from 'systems/demo/animate.js';
import {input} from 'systems/demo/input.js';
import {reframe} from 'systems/demo/reframe.js';

function update() {

    // console.log('update demo scene');

    this.world.system(['input'], input);
    this.world.system(['animation'], animate);
    this.world.system(['animation', 'image'], reframe);

    this.inputs.length = 0;
}

export {update};
