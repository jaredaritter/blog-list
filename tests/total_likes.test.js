const listHelper = require('../utils/list_helper');
const dummyBlogs = require('../utils/dummy_blogs');

describe('Total likes', () => {
  test('When list has no blogs, should equal 0', () => {
    const result = listHelper.totalLikes(dummyBlogs.none);
    expect(result).toBe(0);
  });

  test('When list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(dummyBlogs.one);
    expect(result).toBe(5);
  });

  test('When list has more than one blog, equals the likes of all', () => {
    const result = listHelper.totalLikes(dummyBlogs.many);
    expect(result).toBe(36);
  });
});
