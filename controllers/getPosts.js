const Post=require("../models/Post");

exports.getPosts= async (req, res)=>{
    try{
        
        const posts=await Post.find({});
        res.status(200).json(
            {
                success: true,
                data:posts,
                message:"Posts fetched successfully"
            }
        );
    }
    catch(err){
        //console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message:"server error"
        });
    }
}