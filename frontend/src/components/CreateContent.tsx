
import { useRef, useState } from "react";
import CrossIcon from "../icons/CrossIcon"
import { Button } from "./ButtonUi"
import postStore from "../store/postStore";
import InputBox from "./InputBox";



export default function CreateContent({open,close}:{open:boolean,close:()=>void}){

  const {createPost}=postStore()

  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  
const modalRef = useRef<HTMLDivElement>(null);

const [language,setLanguage]=useState("yt")


  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      close();
    }

  };
  
    const handleCreatePost=async(e:any)=>{
    
        try {
          await createPost({
            title:titleRef.current?.value,
            link:linkRef.current?.value ,
            linkOf:language
          })
          close()

        } catch (error) {
          console.log(error);
          
        }
    }
    return <div  onClick={handleOverlayClick}>
        {open &&  <div className="fixed inset-0 z-50 flex items-center justify-center" >
      {/* Dimmed background */}
      <div className="absolute inset-0 bg-gray-800 opacity-60"></div>

      {/* Modal Content */}
      <div className="relative bg-gray-700 p-6 rounded-md z-10  max-w-md shadow-lg" 
       ref={modalRef}  
       onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <div className="flex justify-end mb-4">
          <button onClick={close}>
            <CrossIcon />
          </button>
        </div>

        {/* Input fields */}
        <div className="flex flex-col gap-3">
          <InputBox placeholder="Title" ref={titleRef} />
          <InputBox placeholder="Link"  ref={linkRef}/>
           <select
          
            value={language}
            onChange={(e) =>setLanguage(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white border border-gray-600"
          >
            <option value="yt">Youtube</option>
            <option value="x">X</option>
            <option value="fb">FaceBook</option>
            <option value="insta">Instagram</option>
            <option value="git">GitHub</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit button */}
        <div className="mt-4 flex justify-center">
          <Button text="Submit" variant="primary" size="sm" onClick={(e:any)=>handleCreatePost(e)} />
        </div>
      </div>
    </div>}
         </div>
}

