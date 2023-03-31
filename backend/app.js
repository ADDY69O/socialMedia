const express = require('express');
const dotenv = require('dotenv');
const app = express();

app.use(express.json())


dotenv.config({path:"./config.env"})


require('./db/conn')


app.use('/api/v1/post',require('./routes/postRoutes'))
app.use('/api/v1/user', require('./routes/userRoutes'));

const PORT = process.env.PORT;

app.listen(PORT,(req,res)=>{
   
    console.log(`app is listening on ${PORT}`)
})
