# Test runner for cordova-plugin-appinfo

Install the platforms you would like to test on:

	cordova platform add android
	cordova platform add wp8

Add the test framework:

	cordova plugin add cordova-plugin-test-framework

Add the cordova-plugin-appinfo either from GitHub:

	cordova plugin add https://github.com/danmichaelo/cordova-plugin-appinfo.git

or from a local repo:

    cordova plugin add file:///path/to/cordova-plugin-appinfo

Then run tests on the desired platforms:

	cordova run android
	cordova run wp8
