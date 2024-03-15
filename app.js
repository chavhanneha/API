const express=require('express');
const app=express();
const cors=require('cors')
const port=3200;
app.use(cors);
const FoodNutrition = require('./models/foodinfo');
require('./db/conn');
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('<h1>Welcome To API Creation</h1>')
})

app.get('/getfooddata',async(req,res)=>{
    try{
        const getfood=await FoodNutrition.find({});
        res.status(201).send(getfood)
    }
    catch(e){
        console.log(e);

    }

})

app.post('/foodnutrition',async (req,res)=>{
    try{
        console.log('req.body',req.body);
        const addingfoodRecord=new FoodNutrition(req.body);
        console.log('addingfoodRecord',addingfoodRecord);
        const insertData=await addingfoodRecord.save();
        console.log(insertData);
        res.status(201).send(insertData)
  
    }
    catch(e){

        console.log(e);
    }
})

app.listen(port,()=>{
    console.log('Server is listening at port number ${port}');
})

