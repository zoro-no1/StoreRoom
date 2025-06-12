import { create } from "zustand";
import { axiosIn } from "../utils/axios";

type PostStore = {
  allPost: any[];
  otherPost:any[];
  mylink:any;
  linkOwner:any;
  getAllPost: () => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  createPost: (data: object) => Promise<void>;
   getOtherBrain: (link:string) => Promise<void>;
   gerateLink:() => Promise<void>;
   getMyLink:() => Promise<void>;
};

const postStore = create<PostStore>((set, get) => ({
  allPost: [],
otherPost:[],
mylink:null,
linkOwner:{},
  getAllPost: async () => {
    try {
      const res = await axiosIn.post("/post/contents");
      set({ allPost: res.data.message });
    } catch (error) {
      console.log(error);
    }
  },
  deletePost: async (id:any) => {
    try {
       await axiosIn.get("/post/deletePost/" + id);

    } catch (error) {
      console.log(error);
    }
  },
  createPost: async (data) => {
      
      try {
      await axiosIn.post("/post/createPost", data);
   
       get().getAllPost();
    } catch (error) {
      console.log(error);
      
    }
  },
  getOtherBrain:async(link)=>{
    try {
      const res=await axiosIn.get("/share/link/"+link);
      set({otherPost:res.data.message})
      set({linkOwner:res.data.owner.owner})
      
    } catch (error) {
      console.log(error);
      
    }
  },
  gerateLink:async ()=>{
    try {

      const res=await axiosIn.post("/share/create")
      set({mylink:res.data.message})
      
    } catch (error) {
      console.log(error);
      
    }
  },
  getMyLink: async ()=>{
   try {
     const res= await axiosIn.post("/share/getmylink")
     set({mylink:res.data.message})
   } catch (error) {
    console.log(error);
    
   }
  }
}));

export default postStore;