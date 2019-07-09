import {framerate} from 'systems/demo/framerate.js';
import {image} from 'systems/demo/image.js';
import {text} from 'systems/demo/text.js';

function render() {

    // console.log('render demo scene');

    this.context.fillStyle = '#a8c0b0';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.world.system(['framerate'], framerate);
    this.world.system(['image', 'position'], image);
    this.world.system(['alphabet', 'position'], text);
}

export {render};
