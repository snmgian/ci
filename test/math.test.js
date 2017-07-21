const math = require('../src/math');

const { expect } = require('chai');

describe('add', function () {
  it('adds two numbers', function () {
    const result = math.add(1, 2);

    expect(result).to.equal(3);
  });
});

