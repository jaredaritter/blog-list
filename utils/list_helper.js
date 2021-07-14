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

const favoriteBlog = (blogs) => {
  // RETURN BLOG WITH MOST LIKES *OR THE FIRST ONE WITH MOST LIKES
  // SHOULD BE ABLE TO USE SORT
  // A-B = ASCENDING, B-A = DESCENDING
  // const descending = blogs.sort((a, b) => b.likes - a.likes);
  // // console.log(descending);
  // const favorite = descending[0];
  // // console.log(favorite);
  // return favorite ? favorite : 'no blogs';

  // SHORTENED VERSION
  const favorite = blogs.sort((a, b) => b.likes - a.likes)[0];
  if (blogs.length === 0) {
    return 'no blogs';
  } else {
    const { title, author, likes } = favorite;
    const condensedFavorite = {
      title,
      author,
      likes,
    };
    return condensedFavorite;
  }
};

module.exports = { dummy, totalLikes, favoriteBlog };
