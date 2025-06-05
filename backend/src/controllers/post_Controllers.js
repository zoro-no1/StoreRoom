
import { Post } from "../models/PostModel.js";
import Tag from "../models/tagModel.js";

export const createPost =async(req,res)=>{
    const {title,link,tags}=req.body;
    console.log(tags);
    
    if(!title||!link){
        return res.status(404).json({
            message:"All details Needed"
        })
    }
    try {
        let tagArray= tags.map(async(t)=>{
           let tag= await Tag.findOne({tagname:t});
           if(!tag){
            tag= await Tag.create({
                tagname:t
            })
           }
           return tag
        })
        console.log(tagArray);
        
        const post =await Post.create({
            title,
            link,
            tag:tagArray,
            owner:req.user._id
        })
        if(!post){
            return res.status(401).json({
                message:"somthin went wrong whill creating a post "
            })
        }
        res.status(201).json({
           message: post
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

export const postDelete=async (req,res)=>{
try {
    
        const {id}=req.params;
    console.log(id);
    
        if(!id){
            return res.status(404).json({message:"id not present"})
        }
        const postId=await Post.findByIdAndDelete({_id:id,owner:req.user.id},{new:true})
         if(!postId){
            return res.status(404).json({message:"id not found"})
        }
        res.status(202).json({message:"Post Deleted",post:postId})
} catch (error) {
    console.log(error);
     
    return res.status(500).json({message:"Backend Error"})
    
}
}
export const allContent =async (req,res)=>{
    try {
        const user=req.user._id;
        if(!user){
            return res.status(404).json({
                message:"invalide token"
            })
        }
    
        const contents= await Post.find({owner:user})
        if(!contents){
            res.status(502).json({
                message:"something went wrong "
            })
        }
        res.status(200).json({
                message:contents
            })
    } catch (error) {
        console.log(error);

          res.status(500).json({
                message:"Backend Error"
            })
    }

}