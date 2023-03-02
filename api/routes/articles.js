// נגדיר אובייקט מסוג ראוטר
const router=require('express').Router();

const {GetallArticles,GetArticleById,CreateArticle,updateArticle,DeleteArticle}=require('../controllers/articles');

// הגדרנו ניתוב - נקודת קצה שביטת גט לנתיב של מצר
router.get("/",GetallArticles);

router.get("/:articleId",GetArticleById);

router.post("/",CreateArticle);
 
router.patch("/:articleId",updateArticle);
 
router.delete("/:articleId",DeleteArticle);


module.exports=router;