import { ShareIcon } from "../icons/shareIcon"
import { Button } from "./ButtonUi"

export const TopBar=()=>{
    return <div className="flex justify-between md:mx-4 w-[95%] mt-3 ">
        <div className="md:text-5xl text-3xl">All Notes</div>
        <div className="flex  justify-between w-1/3 items-center">
            <Button text="Share Brain" variant="secondary"  size="md" startIcon={<ShareIcon size="md" />} className="h-9 md:h-auto"/>
            <Button text="Add Content" variant="primary"  size="md" startIcon={<ShareIcon size="md" />}/>
        </div>
    </div>
}