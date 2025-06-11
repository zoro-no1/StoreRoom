import { create } from "zustand";
import { axiosIn } from "../utils/axios";

type PostStore = {
  allPost: any[];
  getAllPost: () => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  createPost: (data: object) => Promise<void>;
};

const postStore = create<PostStore>((set, get) => ({
  allPost: [],

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
      console.log(id);
      
      const res = await axiosIn.get("/post/deletePost/" + id);
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  },
  createPost: async (data) => {
      
      try {
        console.log(data);
        
      const res = await axiosIn.post("/post/createPost", data);
      console.log(res.data);
       get().getAllPost();
    } catch (error) {
      console.log(error);
      
    }
  },
}));

export default postStore;