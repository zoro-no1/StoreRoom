import { BrainIcon } from "../icons/Brainly"
import { ShareIcon } from "../icons/shareIcon"
import { SideItem } from "./SideItem"

export const SideBar = () => {
  return (
   <aside className="w-full ml-3" >
    <div className=" text-2xl mb-9">
    <SideItem text="Brainly Breain" icon={<BrainIcon/>} className=" justify-between w-3/4 mt-2 "/>
    </div>
    

       <SideItem text="tweets" icon={<ShareIcon size="lg"/>} className="text-xl" />
       <SideItem text="youtube"className="text-xl" />
       <SideItem text="instagram"className="text-xl"/>
   
   </aside>  
  )
}
