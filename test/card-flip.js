const Selenium = require('selenium-webdriver'),
	AxeBuilder = require('axe-webdriverjs');
const assert = require('assert');

const TestUtils = require('./utils.js');

var port = process.env.npm_package_config_port || 3006;

describe('Card flip demo page', function() {
	this.timeout(10000);

	let driver;

	beforeEach(function(done) {
		driver = new Selenium.Builder()
		  .forBrowser('chrome')
			.build();
		
		driver
			.get(`http://localhost:${port}/card-flip`)
		  .then(function() {
  			done();
		  })
	});

	afterEach(function(done) {
		driver.quit().then(function() {
			done();
		});
	});

	it('should work with the keyboard', function(done) {
		async function test() {
			const toggle = await driver.findElement(Selenium.By.css('.toggle-button'))

			await toggle.sendKeys(Selenium.Key.ENTER)

			const closeTxt = await driver.findElement(Selenium.By.css('.team-close-button')).getText()

			const activeElementTxt = await driver.switchTo().activeElement().getText()
			assert.equal(activeElementTxt, closeTxt)
			
			done()
		}
		test()
	});

	it('should find no violations', function(done) {
		driver
			.findElement(Selenium.By.css('.App'))
		  .then(function() {
		    new AxeBuilder(driver)
		      .analyze(function(results) {
		      	console.log(TestUtils.printViolations(results.violations));
		        assert.equal(results.violations.length, 0);
		        done();
		      });
		  });
	});
});
