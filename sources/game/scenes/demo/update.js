import {system} from 'modules/world.js';

import {animate} from 'systems/demo/animate.js';
import {input} from 'systems/demo/input.js';
import {reframe} from 'systems/demo/reframe.js';

function update() {

    // console.log('update demo scene');

    system(this.world.entities, ['input'], input.bind(this));
    system(this.world.entities, ['animation'], animate.bind(this));
    system(this.world.entities, ['animation', 'image'], reframe.bind(this));

    this.inputs.length = 0;
}

export {update};
