'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let input = process.argv.slice(2);
let parsedInput = new Input(input);
let notes = new Notes(parsedInput);

console.log('input', input);
console.log('parsedInput', parsedInput);
console.log('notes', notes);

/*
  - Requires the library files wyou will be writing (input, notes)
  - Instantiates an "Input" parser (??)
  - Sends properly parsed input to the Notes library for display
*/