const assert = require('assert')

describe('Toggle Button', () => {
    // As the name suggests, this runs before each test. It is a good place to set
    // up common settings.
    beforeEach(() => {
        // Wait up to 5 seconds for commands to work
        browser.setTimeouts(5000);
    });

    // It is important that we run each test in isolation. The running of a previous test
    // should not affect the next one. Otherwise, it could end up being very difficult to
    // track down what is causing a test to fail.
    afterEach(() => {
        browser.reloadSession()
    });

    it('should hide the text box', () => {
        // All of wdio's commands are synchronous, which means we can write them simply
        // one after another.

        $('#showHideButton').click();
        const textBox = $('#textBox');
        assert.strictEqual(textBox.isDisplayed(), false);
    });

    it('should visible the text box', () => {
        // All of wdio's commands are synchronous, which means we can write them simply
        // one after another.

        $('#showHideButton').click();
        const textBox = $('#textBox');
        assert.strictEqual(textBox.isDisplayed(), false);
        $('#showHideButton').click();
        assert.strictEqual(textBox.isDisplayed(), true);
    });

    // "it" represents one test. It is best not to try to test too much inside one "it",
    // as it can make it difficult to track down the mistake if the test fails.
    it('should show the box by default', async () => {
        // "expect" is the way to tell Jasmine what you are really trying to test.
        // If the expect function fails, your test will fail, and it will tell you why.
        const textBox = await $('#textBox');

        assert.strictEqual(await textBox.isDisplayed(), true);
    });
});