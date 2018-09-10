const PubSub = require('../helpers/pub_sub.js');

const NumberInputView = function(){

};

NumberInputView.prototype.bindEvents = function(){
  console.log("form view bind events called");
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    console.log('pressed');
    event.preventDefault();
    const numberEntered = event.target.number.value;
    // subscribed to by PrimeChecker
    PubSub.publish('NumberInputView:number-submitted', numberEntered);
  });
};

module.exports = NumberInputView;
