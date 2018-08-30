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
            [16, 32],
            {
                'f': [5, 7],
                'p': [15, 7],
                's': [18, 7],
                ':': [22, 8],
                '0': [0, 8],
                '1': [1, 8],
                '2': [2, 8],
                '3': [3, 8],
                '4': [4, 8],
                '5': [5, 8],
                '6': [6, 8],
                '7': [7, 8],
                '8': [8, 8],
                '9': [9, 8]
            }
        )
    ]));
}

export {start};
