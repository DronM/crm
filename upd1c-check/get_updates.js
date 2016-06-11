var system = require("system");

var url = system.args[1];

var jquery = './jquery.min.js';

var page = require('webpage').create();
page.viewportSize = {width: 1280, height: 1024};

page.onInitialized = function () {
	page.injectJs(jquery) || (console.log("Unable to inject jQuery") && phantom.exit());
}

function waitFor(testFx, onReady, timeOutMillis) {
    var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 3000, //< Default Max Timout is 3s
        start = new Date().getTime(),
        condition = false,
        interval = setInterval(function() {
            if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
                // If not time-out yet and condition not yet fulfilled
                condition = (typeof(testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
            } else {
                if(!condition) {
                    // If condition still not fulfilled (timeout but condition is 'false')
                    console.log("'waitFor()' timeout");
                    phantom.exit(1);
                } else {
                    // Condition fulfilled (timeout and/or condition is 'true')
                    //console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
                    typeof(onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
                    clearInterval(interval); //< Stop this interval
                }
            }
        }, 250); //< repeat check every 250ms
};


page.open(url, function(status) {
	if(status !== "success") {
		console.log("Error reading page");
	}
	else {
		// Wait for 'signin-dropdown' to be visible
		waitFor(function() {
		    // Check in the page if a specific element is now visible
		    return page.evaluate(function() {
		        return $("table.content").is(":visible");
		    });
		}, function() {
			console.log(page.evaluate(function() {
		        	return $("table.content").html();
		    	}));
			phantom.exit();
		});
	}
}	
);


