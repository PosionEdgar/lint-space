const assert = require('assert');
const stylelint = require('stylelint');
const path = require('path');

describe('test/rule-validate.test.js', () => {
    it('Validate default', async () => {
        const filePath = path.resolve(__dirname, './fixtures/index.css');
        const result = await stylelint.lint({
            configFile: path.join(__dirname, '../index.js'),
             files: filePath,
             fix: false
        })
        if (result && result.errored) {
            const filesResult = result.results || [];
            filesResult.forEach((fileResult) => {
                console.log(`====================${filePath}====================`)
                console.log('fileResult ---->', fileResult.warnings);
            });

            assert.ok(filesResult.length !== 0);
        }
    })
})