'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let parsedInput = new Input(process.argv.slice(2));
let notes = new Notes(parsedInput);

// console.log(parsedInput);


/*
  - Requires the library files wyou will be writing (input, notes)
  - Instantiates an "Input" parser (??)
  - Sends properly parsed input to the Notes library for display
*/

