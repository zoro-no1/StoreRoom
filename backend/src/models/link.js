
import mongoose, { Schema }  from "mongoose";


const linkSchema = new Schema({
  owner:{
    type:mongoose.Types.ObjectId,
    ref:'User',
    required:true
  },
  hash:{
    type:String,
    required:true,
    unique:true
  }
})

export const Link=mongoose.model("Link",linkSchema)