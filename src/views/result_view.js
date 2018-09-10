const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){

};

ResultView.prototype.displayResult = function(boolean){
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `Is a prime number? ${boolean}`;
}

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const resultBoolean = event.detail;
    this.displayResult(resultBoolean);
  });
};

module.exports = ResultView;