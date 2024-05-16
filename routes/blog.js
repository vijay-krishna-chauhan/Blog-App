const express= require('express');
const router= express.Router();
const {postController}=require('../controllers/postController');
const {getPosts}= require("../controllers/getPosts");

router.post("/post/create", postController);
router.get("/posts", getPosts);

module.exports=router;