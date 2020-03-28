'use strict';

const Input = require('../lib/input.js');
const Notes = require('../lib/notes.js');
const sinon = require('sinon');

describe('High level description of tests contained', () => {
  let spy = sinon.spy(console, 'log');
  new Notes(new Input(['-a', 'this is a note!']));

  it('Calls console.log as verified by sinon spy', () => {
    expect(spy.called).toBeTruthy();
  });
});