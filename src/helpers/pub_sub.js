const PubSub = {
  // pass in a channel and payload
  publish: function(channel, payload){
    // log out the channel and payload have been passed in
    console.log(`published on ${channel} payload ${payload}`);
    // create a new instance of Custom Event, pass in channel and { detail:payload } (which is a convention)
    const event = new CustomEvent( channel, { detail: payload } )
    // pass the Custom Event instance into the dispatchEvent method
    document.dispatchEvent(event);
  },
  // pass in a channel and a function
  subscribe: function(channel, callback){
    // log out the channel that we've subscribed to
    console.log(`subscribed to ${channel}`);
    // add an event listener and pass in the channel and the function from above
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;