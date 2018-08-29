import {Entity, World} from 'modules/world.js';

import {Animation} from 'components/common/animation.js';
import {Image} from 'components/common/image.js';
import {Position} from 'components/common/position.js';

import {Alphabet} from 'components/demo/alphabet.js';
import {Data} from 'components/demo/data.js';
import {Direction} from 'components/demo/direction.js';
import {Input} from 'components/demo/input.js';
import {Spritesheet} from 'components/demo/spritesheet.js';
import {Text} from 'components/demo/text.js';

function start() {

    console.log('start demo scene');

    this.delta = 0;
    this.inputs.length = 0;
    this.world = new World();

    this.world.add(new Entity('hero', [

        new Direction('DOWN'),
        new Image(this.assets.images['wizard'], [32, 32], [3, 2]),
        new Input(['KEY_UP', 'KEY_RIGHT', 'KEY_DOWN', 'KEY_LEFT']),
        new Position(this.size.width / 2 - 16, this.size.height / 2 - 16),
        new Spritesheet({

            'IDLE_UP': [3, 0],
            'IDLE_RIGHT': [3, 1],
            'IDLE_DOWN': [3, 2],
            'IDLE_LEFT': [3, 3],

            'RUN_UP': [[0, 0], [1, 0], [2, 0], [3, 0]],
            'RUN_RIGHT': [[0, 1], [1, 1], [2, 1], [3, 1]],
            'RUN_DOWN': [[0, 2], [1, 2], [2, 2], [3, 2]],
            'RUN_LEFT': [[0, 3], [1, 3], [2, 3], [3, 3]]
        })
    ]));

    this.world.add(new Entity('framerate', [

        new Position(8, 8),
        new Text('fps:60'),
        new Data({

            'elapsed': 0,
            'frames': 0
        }),
        new Alphabet(

            this.assets.images['font'],
            {
                'f': {'x': 5 * 16, 'y': 32 + 96 * 2, 'width': 16, 'height': 32},
                'p': {'x': 15 * 16, 'y': 32 + 96 * 2, 'width': 16, 'height': 32},
                's': {'x': 18 * 16, 'y': 32 + 96 * 2, 'width': 16, 'height': 32},
                ':': {'x': 22 * 16, 'y': 64 + 96 * 2, 'width': 16, 'height': 32},
                '0': {'x': 0 * 16, 'y': 64 + 96 * 2, 'width': 16, 'height': 32},
                '1': {'x': 1 * 16, 'y': 64 + 96 * 2, 'width': 16, 'height': 32},
                '2': {'x': 2 * 16, 'y': 64 + 96 * 2, 'width': 16, 'height': 32},
                '3': {'x': 3 * 16, 'y': 64 + 96 * 2, 'width': 16, 'height': 32},
                '4': {'x': 4 * 16, 'y': 64 + 96 * 2, 'width': 16, 'height': 32},
                '5': {'x': 5 * 16, 'y': 64 + 96 * 2, 'width': 16, 'height': 32},
                '6': {'x': 6 * 16, 'y': 64 + 96 * 2, 'width': 16, 'height': 32},
                '7': {'x': 7 * 16, 'y': 64 + 96 * 2, 'width': 16, 'height': 32},
                '8': {'x': 8 * 16, 'y': 64 + 96 * 2, 'width': 16, 'height': 32},
                '9': {'x': 9 * 16, 'y': 64 + 96 * 2, 'width': 16, 'height': 32}
            }
        )
    ]));
}

export {start};
