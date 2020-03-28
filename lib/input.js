'use strict';

/*

  -  Exports a constructor function
  -  Uses minimist (or any other CLI library) to read command line arguments
  -  Evaluates and Validates the input (is the command (i.e. ‘-a’) a valid one and is there data)
  -  Returns an instance containing the action to perform and the payload for the action
        for example:
          {
            action: "add";
            payload: "This is a really cool thing that I wanted to remember for later"
          }
*/

const minimist = require('minimist');

function Input(args) {
  let formatted = minimist(args);

  console.log('formatted', formatted);
  
  let objectKeyArray = Object.keys(formatted);
  console.log('Object.keys(formatted)', objectKeyArray);

  for(let i = 0; i < objectKeyArray.length; i++) {
    let key = objectKeyArray[i];
    let val = formatted[key];

    console.log('key', key, 'val', val);

    switch(key) {
      case 'a':
      case 'add':
        this.command = {action: 'add', payload: val};
        return;
      default:
        break;
    }

  }

  this.command = {}

  // return {
  //   command: {},
  //   valid: () => {} // anonymous function (function without a name variable assigned to it)
  // }
}

Input.prototype.valid = function () {
  if (!this.command || !this.command.action) return false;
  switch(this.command.action){
    case 'add':
      return typeof this.command.payload === 'string';
    default:
      break;
  }
};

module.exports = Input;
