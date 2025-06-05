import {Link} from "../models/link.js";
import rendomString from "../utils/rendomString.js"
import { Post } from "../models/PostModel.js";

export const createLink = async (req,res)=>{
    try {
        const user=req.user._id
        if(!user) return res.status(404).json({message:"invalide Token"})

        let createlink= await Link.findOne({owner:user})
        console.log(createlink);
        
        if(!createlink){
            createlink= await Link.create({
                owner:user,
                hash:rendomString()
            })
            console.log(createlink);
        }
        console.log(createlink);
        
        res.status(201).json({
            message:createlink
        })
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message:"Backend Problen"
        })
    }
}

export const showLink =async (req,res)=>{
    try {
        const {id:link}=req.params
        if(!link)  return res.status(404).json({message:"invalide Link"})
    
            const findLink=await Link.findOne({hash:link})
            if(!findLink) return res.status(404).json({message:"invalide Link"})
    
            const linkContant=await Post.find({owner:findLink.owner})
            if(!linkContant)return res.status(404).json({message:"invalide Link"})
            
            res.status(202).json({
                message:linkContant
            })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Backend Problen"
        })
        
    }
}
export const deleteLink=async (req,res)=>{
   try {
     const user=req.user._id
     if(!user) return res.status(404).json({message:"invalide Token"})
 
     const deletelink =await Link.findOneAndDelete({owner:user})
     if(!deletelink){
         return res.status(400).json({
             message:"something went wrong "
         })
     }
     res.status(201).json({
         message:deletelink
     })
   } catch (error) {
    console.log(error);
        res.status(500).json({
            message:"Backend Problen"
        })
   }
}