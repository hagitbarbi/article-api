// נגדיר אובייקט מסוג ראוטר
const router=require('express').Router();

const {signup,login}=require('../controllers/users');

// הגדרנו ניתוב - נקודת קצה שביטת גט לנתיב של מצר
router.post("/signup",signup);

router.post("/login",login);
 


module.exports=router;