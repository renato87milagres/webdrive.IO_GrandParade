
var LoginPage = require ( '../Model/form.page' ); //import the functions base from the form.page.js
//fris test is desktop 
describe('Login Page', function () {
	it('I want to be able to search for specific game on Vegas Casino and login to the webpage _ Desktop', function () {
		LoginPage.open(); //open URL th system was using the page models; 
		browser.switchTab(); //tab focus 
		browser.windowHandleMaximize(); //maximize the window
		browser.waitForVisible('.promotion-awareness-overlay__content', 20000); //wait for the div.promotion 
		LoginPage.clicked('.promotion-awareness-overlay__close-button'); //click on close the div.promotion 
		LoginPage.clicked('.btn-search-magnifier'); // click on search
		browser.waitForVisible('.search-input__form', 20000); //Wait the input search is visible 
		LoginPage.game(); //set the value in the input you can change this value in the file goparede\Model\form.page.js
		browser.moveToObject('.tile-cover__footer=Mayfair Roulette'); //move the mouse to game 
		browser.waitForVisible('.tile-content__description', 20000); // wait the element over
		LoginPage.clicked('.o-btn.o-btn--more'); // click on the button more 
		browser.waitForVisible('.tile-details__description', 40000); //wait the div.description is visible 
		browser.scroll('.o-btn'); // scroll for the button
		browser.pause(1000); //wait for the html process
		browser.elementActive('.tile-details__buttons'); // active the elements the div.details
		browser.moveToObject('button=Play Now'); //move the cursor to button play now
		LoginPage.clicked('button=Play Now');  //click on button
		browser.waitForVisible('.login-component__wrapper', 20000); //wait for web login visible 
		browser.pause(1000);		
	});
	
	//the second test is mobile test
	it('I want to be able to search for specific game on Vegas Casino and login to the webpage_ mobile', function () {
		LoginPage.open();
		browser.switchTab();
		chromeOptions: { //set options the google chorme for use simulator mobile 
            args: ['use-mobile-user-agent', 'user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3']
        }		
		browser.setViewportSize({ width: 480, height: 760 }); //1366 x 768 set size the google chrome 
		LoginPage.clicked('.btn-search-magnifier'); // click on the input search 
		browser.waitForVisible('.search-input__form', 20000); //Wait the search is visible
		LoginPage.game(); //set the value in the input you can change this value in the file goparede\Model\form.page.js
		browser.moveToObject('//section/div[1]/div[1]/div[1]'); //move to the game 
    	LoginPage.clicked('//section/div[1]/div[1]/div[1]'); // click on the game
		browser.pause(1000); //waint the html process
		browser.waitForVisible('.tile-details__description', 20000); //wait for the div.description
		browser.scroll('.o-btn'); // scroll at the button 
   		browser.elementActive('.tile-details__buttons'); //active the elements the div details 
		browser.moveToObject('button=Play Now'); // move the focus to play now button
		LoginPage.clicked('button=Play Now'); //click on the button
		browser.waitForVisible('.login-component__wrapper', 20000); // wait for the web login is visible
		browser.pause(1000);		
	});
	
	
	
	
	
	
});

