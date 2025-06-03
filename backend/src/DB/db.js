import mongoose from "mongoose"

export default  async function db(){
    const uri=process.env.MD_URI
 try {
    await mongoose.connect(uri)
    console.log("db connect");
    
 } catch (error) {
    console.log(error);
    
 }
}