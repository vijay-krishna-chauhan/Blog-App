const Post=require("../models/Post");
exports.postController= async (req, res)=>{
    try{
        const {title, body}=req.body;
        const response=await Post.create({title, body});
        res.status(200).json(
            {
                success: true,
                data:response,
                message: "Post is successful"
            }
        );
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