'use strict';

// console.log ('I have an app!');

// console.log(process.argv);
console.log(process.argv.splice(2));

const Input = require('./lib/input.js');
// const Notes = require('./lib/notes.js');

let parsedInput = new Input(process.argv.slice(2));

// let notes = new Notes(parsedInput);

/*
  - Requires the library files wyou will be writing (input, notes)
  - Instantiates an "Input" parser (??)
  - Sends properly parsed 
*/

