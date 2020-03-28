'use strict';

const Input = require('../lib/input.js');

// Bad input:
// no command line data (null)
const badInputA = [];
const badArgsA = {};
// command line input wrong (not the format of flag + data)
const badInputB = ['WRONG'];
const badArgsB = {
  payload: 'WRONG'
};
// command line input has wrong flag
const badInputC = ['-b', 'WRONG'];
const badArgsC = {
  flag: '-b',
  payload: 'WRONG'
};
// data is not formatted properly (must be in a string format)
const badInputD = ['-a', false];
const badArgsD = {
  flag: '-a',
  payload: false
};

// Good input:
// commane line input with '-a' followed by a string
const goodInputA = ['-a', 'this is a note!'];
const goodArgsA = {
  flag: '-a',
  payload: 'this is a note!'
};

describe('input module handles bad input gracefully', () => {
  it('handles empty input', () => {
    let result = new Input(badInputA);
    expect(result.valid()).toBeFalsy();
  });
  // it('..handles empty input', () => {
  //   let result = new Input(badArgsA);
  //   expect(result.valid()).toBeFalsy();
  // })
  it('handles wrong input', () => {
    let result = new Input(badInputB);
    expect(result.valid()).toBeFalsy();
  });
  it('handles wrong flag', () => {
    let result = new Input(badInputC);
    expect(result.valid()).toBeFalsy();
  });
  it('handles wrong data type', () => {
    let result = new Input(badInputD);
    expect(result.valid()).toBeFalsy();
  });  
});

describe('the module handles good input gracefully', () => {
  it('handles good input for -a flag', () => {
    let result = new Input(goodInputA);
    expect(result.valid()).toBeTruthy();
  });
});