/**
 * node -r esm  module_operation.js
 */

import {cube, foo, graph} from './module';

graph.options = {
    color: 'blue',
    thickness: '3px'
};

graph.draw();
console.log(cube(3)); // 27
console.log(foo);    // 4.555806215962888