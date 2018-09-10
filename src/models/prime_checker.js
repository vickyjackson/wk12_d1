const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function() {

};

PrimeChecker.prototype.bindEvents = function () {
  // published by NumberInputView
  PubSub.subscribe('NumberInputView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    const result = this.numberIsPrime(inputtedNumber);
    // subcribed to by ResultView
    PubSub.publish('PrimeChecker:result-calculated', result);
  });
};

PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true
};

module.exports = PrimeChecker;
