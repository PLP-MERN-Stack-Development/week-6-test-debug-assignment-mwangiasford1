const mongoose = require('mongoose');
const Post = require('../src/models/Post');
const User = require('../src/models/User');

async function seed() {
  await mongoose.connect('mongodb://localhost:27017/mern-app');

  // Create a user if none exists
  let user = await User.findOne();
  if (!user) {
    user = await User.create({
      username: 'seeduser',
      email: 'seeduser@example.com',
      password: 'password123',
    });
  }

  // Create a post
  await Post.create({
    title: 'Seeded Post',
    content: 'This is a seeded post for testing.',
    author: user._id,
    category: new mongoose.Types.ObjectId(),
    slug: 'seeded-post',
  });

  console.log('Database seeded!');
  await mongoose.disconnect();
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
}); 