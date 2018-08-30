import {datasets} from './datasets/index.js';
import {images} from './images/index.js';
import {sounds} from './sounds/index.js';

function typing(asset, type) {

    asset.type = type

    return asset;
}

const assets = []
.concat(datasets.map((asset) => typing(asset, 'dataset')))
.concat(images.map((asset) => typing(asset, 'image')))
.concat(sounds.map((asset) => typing(asset, 'sound')));

export {assets};
