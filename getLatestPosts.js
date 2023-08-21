const fs = require('fs');

// Read the 'archive.json' file
const archiveData = fs.readFileSync('archive.json', 'utf8');
const archive = JSON.parse(archiveData);

// Get the last twenty items from the 'posts' array
const lastTwentyPosts = archive.posts.slice(-20);

// Create a new object with the extracted posts
const postsObject = {
  posts: lastTwentyPosts,
  num: archive.num
};


try {
  fs.writeFileSync('posts.json', JSON.stringify(postsObject, null, 2));
  console.log(fs.readFileSync('posts.json', 'utf8'));
} catch (error) {
  console.error('Error writing to posts.json:', error.message);
}
