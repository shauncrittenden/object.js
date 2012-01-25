function TheObject(a){
	// DOM elements
	this.wrapper = a.element;
	
	// data
	this.identifier = a.identifier;
	
	// settings
	this.settings = {
	    prefix : '',
	    suffix : '!'
	};
	
	this._init();
}


TheObject.prototype._init = function(){
    var self = this;
    
	this._events();
	this._.log('Object ' + self.identifier + ' initialized');
};


TheObject.prototype._events = function(){
	var self = this;
	
	// events
};


// additional object methods


// utility functions
TheObject.prototype._ = {
    log : function(msg){ // logging
        if (typeof window.console.log === 'function'){
            console.log(msg);
        } else {
            alert(msg);
        }
    }
};

$(function(){
	var objectCollection = [];
	
	$('.example').each(function(i){
		objectCollection[i] = new TheObject({
			element : $(this),
			identifier : i
		});
	});
});