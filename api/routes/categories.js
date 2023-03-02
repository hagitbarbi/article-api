// נגדיר אובייקט מסוג ראוטר
const router=require('express').Router();

const {GetallCategories,GetCategory,CreateCategories,updateCategories,DeleteCategories}=require('../controllers/categories');

// הגדרנו ניתוב - נקודת קצה שביטת גט לנתיב של מצר
router.get("/",GetallCategories);

router.get("/",GetCategory);

router.post("/",CreateCategories);
 
router.patch("/:categoryId",updateCategories);
 
router.delete("/:categoryId",DeleteCategories);


module.exports=router;