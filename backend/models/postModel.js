const mongoose= require('mongoose')

const postSchema = new mongoose.Schema({
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
        createdAt:{
        type:Date,

        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    },
    message:{
        type:String,
        require:true
    },
    comments:[
        {sentBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            require:true
        },
        sentAt:{
            type:Date,
            default:Date.now

        },
        linked:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }]
    }
    ]   
})

const Post = mongoose.model('Post',postSchema);

module.exports=Post;