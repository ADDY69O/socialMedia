const Post = require('../models/postModel');

const createPost = async (req, res) => {
  try {
    const { message } = req.body;
    const post = new Post({
      createdBy: req.user._id,
      message,
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({ createdBy: req.user._id });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findOneAndRemove({
      _id: req.params.id,
      createdBy: req.user._id,
    });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      {
        _id: req.params.id,
        createdBy: req.user._id,
      },
      { message: req.body.message },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createPost,
  getPosts,
  deletePost,
  updatePost,
};
