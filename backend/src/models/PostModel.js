import mongoose, { Schema ,model} from "mongoose";

const postSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    tag:[{
        type:mongoose.Types.ObjectId,
        ref:"Tag"
    }],
    owner:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})

export const Post=model("Post",postSchema)