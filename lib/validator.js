'use strict';

class Validator {
  constructor(args){
    this.schema = args;
  };

  validate(obj){};

  isRequiredSatisfied(){};

  isString(str){
    return typeof str === 'string';
  };

  isNumber(num){
    return typeof num === 'number';
  //   if(num.typeof === 'number'){
  //     return true;
  //   } else return false;
  };
};

module.exports = Validator;