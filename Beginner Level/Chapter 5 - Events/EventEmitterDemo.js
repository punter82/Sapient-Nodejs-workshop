var events = require('events');

function Door(colour){
	this.colour = colour;
	events.EventEmitter.call(this); // executes the constructor of the event emitter

	this.open = function(){
		this.emit('open'); // emitting an event of type open
	};
}

Door.prototype._proto_ = events.EventEmitter.prototype; //copies all of the event emitter properties to the door object

var frontdoor = new door('blue');
frontdoor.on('open',function(){
		console.log('ring ring');
});

frontdoor.open();