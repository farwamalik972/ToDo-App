import express from 'express';
import todoList from '../schema/ToDoschema.js'
const route= express.Router();

route.get('/' , async(req ,res)=>{
    try {
        await todoList.find({}).then((result)=>{
            res.status(200).json(result)
        })
    } catch (error) {
        res.status(400).json(error.massage)
    }
})
route.post('/create' , (req,res)=>{
    console.log(req.body)
    const{ text }=req.body;

    const myData= new todoList({
        text: text,
    });
    myData.save()
    .then((result)=>{
        res.status(201).json(result)
    }).catch((error)=>{
        res.status(500).json(error.massage)
    })
});
route.put('/update', async(req,res)=>{
    try{
        console.log(req.body)
        const { _id, text } = req.body;
        await todoList.findByIdAndUpdate(_id, { text } ).then((result)=>{
            res.status(200).json(result)
        })
    }catch(error){
      res.status(400).json(error.message)
    }
  })
  route.delete('/delete/:id', async(req, res)=>{
    try{
     await todoList.findByIdAndDelete(req.params.id).then((result)=>{
      res.status(201).json(result)
  })
    }catch(error){
        res.status(500).json(error.message)
    }
  })
export default route;