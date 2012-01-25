#Object.js

Base javascript object

A starting framework for a clean object oriented piece of functionality. Minor dependancy on jQuery for initialization on DOM ready and selection of DOM elements.

--------------------------

A new object instance is initialized per targeted DOM element

	var objectCollection = [];

	$('.example').each(function(i){ // element selector ex. .player or .slider etc.
		objectCollection[i] = new TheObject({ // new object instance per element
			element : $(this), // specific element 
			identifier : i // unique identifier in collection
		});
	});

--------------------------

Example use of object utility function

	this._.log('My logged message.');

--------------------------

Example use of object settings

	this.wrapper.slideUp(this.settings.speed);

--------------------------

Object methods assign code(this) reference to code(self) to work around namespace issues.