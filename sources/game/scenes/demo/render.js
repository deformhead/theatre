import {system} from 'modules/world.js';

import {framerate} from 'systems/demo/framerate.js';
import {image} from 'systems/demo/image.js';
import {text} from 'systems/demo/text.js';

function render() {

    // console.log('render demo scene');

    this.context.fillStyle = '#a8c0b0';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    system(this.world.entities, ['framerate'], framerate.bind(this));
    system(this.world.entities, ['image', 'position'], image.bind(this));
    system(this.world.entities, ['alphabet', 'position'], text.bind(this));
}

export {render};
