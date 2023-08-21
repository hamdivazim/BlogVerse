const fs = require('fs');

// Read the 'archive.json' file
const archiveData = fs.readFileSync('archive.json', 'utf8');
const archive = JSON.parse(archiveData);

// Get the last twenty items from the 'posts' array
const lastTwentyPosts = archive.posts.slice(-20);

console.log(lastTwentyPosts);

// Create a new object with the extracted posts
const postsObject = {
  posts: lastTwentyPosts,
  num: archive.num
};

// Write the extracted posts to 'posts.json'
fs.writeFileSync('posts.json', JSON.stringify(postsObject, null, 2));
