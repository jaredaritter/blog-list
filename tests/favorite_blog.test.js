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
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0,
    });
  });

  test('Returns blog with most likes if multiple blogs', () => {
    const result = listHelper.favoriteBlog(dummyBlogs.many);
    expect(result).toEqual({
      _id: '5a422b3a1b54a676234d17f9',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12,
      __v: 0,
    });
  });
});
