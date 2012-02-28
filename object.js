function TheObject(args){
	// DOM elements
	this.instance = $(args.instance);
	
	// Data
	this.identifier = args.identifier;
	
	// Settings
	this.settings = {
	    message : 'ouch!'
	};
	
	this._init();
}

TheObject.prototype._init = function(){
	this._events();
	this._.log('Object ' + this.identifier + ' initialized'); // Sample use of utility function.
};

TheObject.prototype._events = function(){
	var self = this;
	
	this.instance.click(function(){
	    self._.log(self.settings.message); // Sample use of settings.
	});
};

// Additional methods

TheObject.prototype._ = { // Utility functions
    log : function(msg){
        if (typeof window.console.log === 'function'){
            console.log(msg);
        }
    }
};

$(function(){
	$('.example').map(function(i, e){
		return new TheObject({
			instance : e,
			identifier : i
		});
	});
});