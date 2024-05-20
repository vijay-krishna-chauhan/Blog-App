const express= require('express');
const router= express.Router();
const {postController}=require('../controllers/postController');
const {getPosts}= require("../controllers/getPosts");
const {createComment}=require("../controllers/commentController");
const {likePost, unlikePost}=require("../controllers/likeController");


router.post("/post/create", postController);
router.get("/posts", getPosts);
router.post("/comment/create", createComment);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
module.exports=router;