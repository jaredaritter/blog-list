const listHelper = require('../utils/list_helper');
const dummyBlogs = require('../utils/dummy_blogs');

describe('Favorite blog', () => {
  test('Returns notification string if no blogs', () => {
    const result = listHelper.favoriteBlog(dummyBlogs.none);
    expect(result).toEqual('no blogs');
  });

  test('If one blog returns only blog object', () => {
    const result = listHelper.favoriteBlog(dummyBlogs.one);
    expect(result).toEqual({
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      likes: 5,
    });
  });

  test('Returns blog with most likes if multiple blogs', () => {
    const result = listHelper.favoriteBlog(dummyBlogs.many);
    expect(result).toEqual({
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12,
    });
  });
});
