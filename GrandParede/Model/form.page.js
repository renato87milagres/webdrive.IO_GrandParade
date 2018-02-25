var page = require('./page');
var game = 'Mayfair Roulette'; //variable game
var id ;

var formPage = Object.create(page, {
	 open: { value: function() { //function for the url 
			browser.url('/'); //set the url 
			
		 } },
	 game: { value: function() { //function for search game 
			browser.setValue('.search-input__input-wrapper input',game);
			
		 } },
	  clicked: { value: function(id) { //pass the element html and click
		  browser.click(id); //function click 
			
			
		 } }
});

module.exports = formPage;