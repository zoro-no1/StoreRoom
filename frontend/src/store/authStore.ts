import { create } from "zustand";
import { axiosIn } from "../utils/axios";

type authStore={
    authUser:any;
     isCheckauth:boolean;
     checkAuth:()=>Promise<void>;
     logout:()=>Promise<void>

}

export const authStore=create<authStore>((set,get)=>({
    authUser:null,
    isCheckauth:true,
    checkAuth:async ()=>{
        try {
            const res=await axiosIn.post("/auth/check");
            set({authUser:res.data})
            localStorage.setItem("user",res.data)
        } catch (error) {
            set({authUser:null})
        }finally{
            set({isCheckauth:false})
        }
    },
    logout:async()=>{
        try {
             await axiosIn.post("/auth/logout")
            set({authUser:null})
        } catch (error) {
            console.log(error);
            
        }
    }
}))