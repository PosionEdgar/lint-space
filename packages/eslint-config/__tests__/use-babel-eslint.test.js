const assert = require('assert');
const eslint = require('eslint');
const path = require('path');

describe('test/use-babel-eslint.test.js', () => {
  it('babel-eslint parse run well for react', async () => {
    const configPath = './react.js'
    const filePath = path.join(__dirname, './fixture/use-babel-eslint.jsx')

    const cli = new eslint.ESLint({
      overrideConfigFile: configPath,
      useEslintrc: false,
      ignore: false
    })
    const result = await cli.lintFiles([filePath]);

    const { message, errorCount, fatalErrorCount, warningCount } = result[0];

    assert.equal(fatalErrorCount, 0);
    assert.equal(errorCount, 27);
    assert.equal(warningCount, 7);

    const errorReportedByReactPlugin = message.filter((result) => {
      return result.ruleId && result.ruleId.indexOf('react/') !== -1
    })

    assert.notEqual(errorReportedByReactPlugin.length, 0)
  })
})
