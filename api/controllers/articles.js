const mongoose=require('mongoose');
const article = require('../models/article');
const Article=require('../models/article');
//const category=require('../models/category');


module.exports={
  GetallArticles:(req,res)=>{
    Article.find().then((articals)=>{
        res.status(200).json({
            articals
           })
    });
   
},
  CreateArticle:(req,res)=>{
      const{title,description,content,categoryId}=req.body;

      const article=new Article({
        _id:new mongoose.Types.ObjectId(),
        title,
        description,
        content,
        categoryId
    });

    article.save().then(()=>{
        res.status(200).json({
            massage: "you have created an article"
           })
    });

  
 },
 GetArticleById:(req,res)=>{
    const articleId=req.params.articleId
Article.findById(articleId).then((article)=>{
    res.status(200).json({
        article
    })
});
 },

  updateArticle:(req,res)=>{
    const articleId=req.params.articleId

   // Article.updateMany({_id: articleId},req.body).then(()=>{
   //     req.status(200).json({
   //         massage:"article updated"
    //    })
    //})

   res.status(200).json({
    massage: `update an article- ${articleId}`
   })
},
  DeleteArticle:(req,res)=>{
    const articleId=req.params.articleId

    Article.deleteOne({_id:articleId}).then(()=>{
        res.status(200).json({
            massage: `delete an article- ${articleId}`
           })
    })
  
},

}