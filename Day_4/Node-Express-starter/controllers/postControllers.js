import Post from "../models/Post.model.js";

export const getAllPosts = async (req, res) => {
  try {
    const [posts] = await Post.findAll();

    return res.status(200).json({
      success: true,
      message: "Successfully Fetched all posts!",
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong why getting all posts",
    });
  }
};

export const createNewPost = async (req, res) => {
  try {
    const { title, body } = req.body;

    const post = new Post(title, body);

    await post.save();

    console.log(post);
    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating post",
    });
  }
};

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await Post.findById(id);
    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: `Post of id ${id} Fetched successfully`,
      data: rows[0],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while getting post by id",
    });
  }
};
