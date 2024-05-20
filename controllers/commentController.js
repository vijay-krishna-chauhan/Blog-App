// // import models
// const Post=require("../models/Post");
// const Comment=require("../models/commentModel");

// // busasiness logic
// exports.createComment=async (req, res)=>{
// try{
//     //fetch data from req body
//     const {post, user, body}=req.body;

//     // create comment object
//     const comment = new Comment({
//         post, body,user
//     })

//     //sve the new comment object into db
//     const savedComment=await comment.save();

//     //find the post by Id and new comment to its comment array

//     const updatedPost= await Post.findByIdAndUpdate(
//         post,
//         {$push :{ comments:savedComment.id}},
//         {new: true})
//         .populate("comments")
//         .exec();
//     res.json({
//         post: updatedPost,
//     })

// }
// catch(err){
//     return res.status(500).json({
//         error: "Error while creating comment",
//     })
// }
// }

// import models
const Post = require("../models/Post");
const Comment = require("../models/commentModel");

// business logic
exports.createComment = async (req, res) => {
  try {
    // fetch data from req body
    const { post, user, body } = req.body;

    // create comment object
    const comment = new Comment({
      post,
      body,
      user,
    });

    // save the new comment object into db
    const savedComment = await comment.save();

    // find the post by Id and add new comment to its comment array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    console.error("Error while creating comment:", err);
    return res.status(500).json({
      error: "Error while creating comment",
    });
  }
};
