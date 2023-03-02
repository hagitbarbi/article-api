const express=require('express');// חיבור לספריית אקספרסס
const app=express();
const morgan=require('morgan');
const mongoose=require('mongoose');

mongoose.connect(`mongodb+srv://hagit123:hagit123@articles-api.5txcmf8.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.connection.on('connected',()=>{
    console.log('MongoDB connected');
});

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept,Authorization"); 
    if (req.method ==="OPTIONS") {
        res.header("Access-Control-Allow-Methods","PUT,POST,PATCH,DELETE,GET");
        return res.status(200).json({});
    }
    next();
});

const articleRoutes=require('./api/routes/articles');
const categorieRoutes=require('./api/routes/categories');
const usersRoutes=require('./api/routes/users');



app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use('/articals',articleRoutes);
app.use('/categories',categorieRoutes);
app.use('/users',usersRoutes);

app.get('/',(req,res)=>{
    res.status(200).json({
        message: 'server up'
    })

});

app.post('/articals',(req,res)=>{
    res.status(200).json({
        message:req.body.message
    });

});

app.use((req,res,next)=>{
    const error =new Error('Not Found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
req.json({
    error: {
            massage:error.massage
    }
})
})

module.exports=app;