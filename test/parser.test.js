/**
 * 解析测试样例
 */

const should = require('should');
const cookiesParser = require('../');

describe('Cookies Parser', () => {
  it('should get an array and not be empty', () => {
    const cookiesStr = 'BAIDUID=422D;KEY???';
    const obj = cookiesParser(cookiesStr);
    obj.should.be.an.Array().and.not.empty();
  });
  it('should get an empty array', () => {
    const cookiesStr = '';
    const obj = cookiesParser(cookiesStr);
    obj.should.be.an.Array().and.empty();
  });
  it('should throw an error', () => {
    should(() => {
      cookiesParser();
    }).throw('Expected a string');
  });
});
