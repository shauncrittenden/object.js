#Object.js

Boilerplate javascript object

A starting point for a clean object oriented piece of functionality. Dependency on jQuery for initialization on DOM ready and selection of DOM elements.

--------------------------

A new object instance is initialized per targeted DOM element
	
	$(function(){
		$('.example').map(function(i, e){ // Replace .example with desired selector
			return new TheObject({
				instance : e, // Specific DOM element.
				identifier : i // Unique identifier in collection.
			});
		});
	});

--------------------------

Example use of object utility function

	this._.log('My logged message.');

--------------------------

Example use of object settings

	this.wrapper.slideUp(this.settings.speed);

--------------------------

Object methods assign `this` reference to `self` to work around namespace issues.




Copyright (c) 2012 Shaun Crittenden Licensed under the MIT license