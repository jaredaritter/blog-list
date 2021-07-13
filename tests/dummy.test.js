const listHelper = require('../utils/list_helper');

test('Dummy returns 1', () => {
  const blogs = [];
  const result = listHelper.dummy(blogs);
  expect(result).toBe(1);
});

test('Dummy returns 1', () => {
  const blogs = [{ this: 'blog' }, { that: 'blog' }];
  const result = listHelper.dummy(blogs);
  expect(result).toBe(1);
});
