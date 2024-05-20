const Post=require("../models/Post");
exports.postController= async (req, res)=>{
    try{
        const {title, body} = req.body;
        const post = new Post({title, body });
        const savedPost = await post.save();

        res.json({
            post : savedPost
        })
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500)({
            success: false,
            data: "Internal server error",
            message: err.message
        })
    }
}