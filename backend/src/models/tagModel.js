import { Schema,model } from "mongoose";


const tagSchema= new Schema({
    tagname:{
        type:String,
        required:true,
        unique:true
    }
})

 const Tag= model("Tag",tagSchema)
 export default Tag