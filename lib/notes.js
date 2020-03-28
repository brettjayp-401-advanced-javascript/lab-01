'use strict';

const Validator = require('./validator.js');
const noteSchema = require('./noteSchema.js')

class Notes {
  constructor(args){
    this.id = Math.floor(Math.random() * 10000);
    this.note = args.command.payload;
    this.validator = new Validator(noteSchema);
    if(args.command.action) this.execute(args.command);
  };

  execute(command){
    if(command.action === 'add') this.add(command.payload);
  };
  
  add(payload){
    console.log('Adding note', this.id + ':', payload);
  };

  valid(){
    // return this.validator.isNumber(this.id);
  };
};

// function Notes(args) {
//   if (args.valid()) this.execute(args.command);
//   else console.error('ERROR! Invalid arguments sent to app');
// }

// Notes.prototype.execute = function(command){
//   switch(command.action){
//   case 'add':
//     this.add(command.payload);
//     break;
//   default:
//     break;
//   }
// };

// Notes.prototype.add = function(payload){
//   let id = Math.floor(Math.random() * 10000);
//   console.log('Adding note', id + ':', payload);
// };

module.exports = Notes;