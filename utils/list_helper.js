const dummy = (blogs) => 1;

const totalLikes = (blogs) => {
  // RETURNING TOTAL NUMBER OF LIKES IN ALL OBJECTS IN ARRAY
  // MAY NEED TO DEAL WITH EDGE CASE OF NO OBJECTS IN BLOG
  return blogs.reduce((a, c) => a + c.likes, 0);
  // ALTERNATE METHOD WITH REDUCER FUNCTION
  // const reducer = (total, current) => {
  //   return total + current.likes;
  // };
  // return blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {};

module.exports = { dummy, totalLikes, favoriteBlog };
