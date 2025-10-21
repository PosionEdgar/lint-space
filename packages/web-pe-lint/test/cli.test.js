const path = require('path');
const fs = require('fs-extra');
const execa = require('execa');
const packageJson = require('../package.json');

const cli = (args, options) => {
  return execa('node', [path.resolve(__dirname, '../lib/cli.js'), ...args], options);
};

test('--version should output right version', async () => {
  const { stdout } = await cli(['--version']);
  expect(stdout).toBe(packageJson.version);
});

describe(`'fix' command`, () => {
  const dir = path.resolve(__dirname, './fixtures/autofix');
  const outputFilePath = path.resolve(dir, './temp/temp.js');
  const errorFileContent = fs.readFileSync(path.resolve(dir, './semi-error.js'), 'utf8');
  const expectedFileContent = fs.readFileSync(path.resolve(dir, './semi-expected.js'), 'utf8');

  beforeEach(() => {
    // 写入时也做一次规范化，避免不同平台写入造成差异
    fs.outputFileSync(
      outputFilePath,
      normalizeLineEndings(errorFileContent),
      'utf8'
    );
  });

  test('should autofix problematic code', async () => {
    await cli(['fix'], {
      cwd: path.dirname(`${dir}/result`),
    });

    const actual = fs.readFileSync(outputFilePath, 'utf8');
    // 断言前统一规范化
    expect(normalizeLineEndings(actual)).toEqual(normalizeLineEndings(expectedFileContent));
  });

  afterEach(() => {
    fs.removeSync(`${dir}/temp`);
  });

  // helper: 统一 CRLF->LF，去除行尾空白，并把文件末尾多余空行收敛为单个换行
  function normalizeLineEndings(s) {
    if (typeof s !== 'string') return s;
    return s
      .replace(/\r\n/g, '\n')     // CRLF -> LF
      .replace(/[ \t]+$/gm, '')   // 去除每行末尾的空白（但保留行内空格）
      .replace(/\n+$/g, '\n');    // 文件末尾多余换行归并为 1 个换行符
  }
});


describe(`'exec' command`, () => {
  const semverRegex = /(\d+)\.(\d+)\.(\d+)/;

  test(`'exec eslint' should work as expected`, async () => {
    const { stdout } = await cli(['exec', 'eslint', '--version']);
    expect(stdout).toMatch(semverRegex);
  });

  test(`'exec stylelint' should work as expected`, async () => {
    const { stdout } = await cli(['exec', 'stylelint', '--version']);
    expect(stdout).toMatch(semverRegex);
  });

  test(`'exec commitlint' should work as expected`, async () => {
    const { stdout } = await cli(['exec', 'commitlint', '--version']);
    expect(stdout).toMatch(semverRegex);
  });
});
