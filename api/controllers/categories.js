const mongoose=require('mongoose');
//const category = require('../models/Category');
const Category=require('../models/Category');

module.exports={
  GetallCategories:(req,res)=>{
    Category.find().then((Categories)=>{
      res.status(200).json({
          Categories
         })
  });
 
},
  CreateCategories:(req,res)=>{
    const{title,description}=req.body;

    const category=new Category({
      _id:new mongoose.Types.ObjectId(),
      title,
      description      
  });

  category.save().then(()=>{
      res.status(200).json({
          massage: "you have created an category"
         })
  });

 },
 GetCategory:(req,res)=>{
  const categoryId=req.params.categoryId
Article.findById(categoryId).then((categories)=>{
  res.status(200).json({
    categories
  })

});
 },
  updateCategories:(req,res)=>{
    const categoryId=req.params.categoryId

   res.status(200).json({
    massage: `update an Categorie- ${categoryId}`
   })
},
  DeleteCategories:(req,res)=>{
    const categoryId=req.params.categoryId

    Category.deleteOne({_id:categoryId}).then(()=>{
        res.status(200).json({
            massage: `delete an Category- ${categoryId}`
           })
    })
  
},

}