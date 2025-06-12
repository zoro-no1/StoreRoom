import { useRef } from "react";
import CrossIcon from "../icons/CrossIcon"
import { Button } from "./ButtonUi"
import InputBox from "./InputBox"
import postStore from "../store/postStore";

interface porps{
    open:boolean;
    close:()=>void
}

 const GetShareLink = ({open,close}:porps) => {
        const modalRef = useRef<HTMLDivElement>(null)
    const linkRef=useRef<HTMLInputElement>(null)
        const {getOtherBrain}=postStore()

 const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      close();
    }

  };
    const handleGetBrain=async()=>{
    
           try {
                await getOtherBrain(linkRef.current.value)
                close()
           } catch (error) {
               console.log(error);
               
           }
     
    }



  return (<div onClick={handleOverlayClick}>
   {open && <div className="fixed inset-0 z-50 flex items-center justify-center" >
    
    <div className="absolute inset-0 bg-gray-800 opacity-60"></div>
    <div className="relative bg-gray-700 p-6 rounded-md z-10  max-w-md shadow-lg" 
    ref={modalRef}
     onClick={(e) => e.stopPropagation()}
    >
    <div className="flex justify-end mb-4">
                  <button onClick={close}>
                    <CrossIcon/>
                  </button>
                </div>
                <div>
                    <InputBox ref={linkRef} placeholder="Link" />
                </div>
                <div className=" flex justify-center" >
                    <Button onClick={handleGetBrain} size="sm" variant="primary" text="GET" className="w-3/4 justify-center mt-2" />
                </div>
    </div>
    </div>}</div>
  )
}
export default GetShareLink