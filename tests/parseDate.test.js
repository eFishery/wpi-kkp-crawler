const parseDate = require('../libs/parseDate');

const objDate = parseDate('2017-01-01');

test('parse date string', () => {
  expect(objDate).toBeDefined();
});

test('convert to string', () => {
  expect(objDate.toString()).toBe('2017-01-01');
});

test('convert to unix', () => {
  expect(objDate.toUnix()).toBe(1483228800000);
});
