Step 1 - Run the test ;

For run the test you need before install the Webdriver.io;
after this execute the command c://<yourfolder>/goparede/ npm test;
Two test was created one for desktop and the second for mobile; all test run in the google chrome;
the tests is in the folder ./test (login.js)
You need have installed the Webdriver.IO Globally and all additional packages globally ($ ./node_modules/.bin/ wdio- v);

Where do you want to execute your tests? On my local machine
Which framework do you want to use? mocha
Shall I install the framework adapter for you? Yes
Where are your test specs located? ./test/**/*.js
Which reporter do you want to use? spec - https://github.com/webdriverio/wdio-spec-reporter
Shall I install the reporter library for you? Yes
Do you want to add a service to your test setup? selenium-standalone - https://github.com/webdriverio/wdio-selenium-standalone-service
Shall I install the services for you? Yes
Level of logging verbosity silent
In which directory should screenshots gets saved if a command fails? ./errorShots/
What is the base url? https://vegas.williamhill.com

http://webdriver.io/guide.html

Step 2 - Run the Allure :

For to execute the Allure Framework , you need before install the Allure;
after this execute the command c://<yourfolder> go parede / allure server C://<youfolder>/goparede/allure-results
to install Allure run the command : npm install wdio-allure-reporter --save-dev

change the wdio.config 
 reporters: ['dot', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        }
    },

http://webdriver.io/guide/reporters/allure.html