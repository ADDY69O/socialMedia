const mongoose =require("mongoose");


    mongoose.connect("mongodb+srv://aditya:Adi%4012345@cluster0.2i7nz9s.mongodb.net/taskNode?retryWrites=true&w=majority",{
        useNewUrlParser:true,useUnifiedTopology:true
    }).then(()=>{
    console.log("DB Connected Successfully");
    }).catch((err)=> console.log(err))
