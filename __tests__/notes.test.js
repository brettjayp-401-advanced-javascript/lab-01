'use strict';

const Input = require('../lib/input.js');
const Notes = require('../lib/notes.js');
const sinon = require('sinon');

describe('High level description of tests contained', () => {
  let spy = sinon.spy(console, 'log');
  new Notes(new Input(['-a', 'this is a note!']));

  it('Calls console.log as verified by sinon spy', () => {
    expect(spy.called).toBeTruthy();
    spy.restore();
  });
});

describe('Testing good values', () => {
  it('Is id a valid number', () => {
    let result = new Notes(new Input(['-a', 'this is a note!']));
    expect(result.validator.isNumber(result.id)).toBe(true);
  });

  it('Is payload a valid string', () => {
    let result = new Notes(new Input(['-a', 'this is a note!']));
    expect(result.validator.isString(result.note)).toBe(true);
  });

  it('Spy tells us we have console.log event', () => {
    let spy = sinon.spy(console, 'log');
    new Notes(new Input(['-a', 'this is a note!']));
    expect(spy.called).toBeTruthy();
    spy.restore();
  })
})