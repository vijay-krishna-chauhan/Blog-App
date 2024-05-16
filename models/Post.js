const { default: mongoose } = require("mongoose");

const postSchema=new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            maxLength: 40,

        },
        body:{
            type: String,
            required: true,
            maxLength: 100,
        },
    }
)
module.exports=mongoose.model("Post", postSchema);