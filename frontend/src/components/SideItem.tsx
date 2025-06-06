import type { ReactElement } from "react"

interface sideItem{
icon?:ReactElement,
text:string,
className?:string
}
export const SideItem = (props:sideItem) => {
  return (
    <div className={`flex w-1/2 mb-8 items-center justify-center ${props?.className}`}>
        <div className="mr-5">{props.icon}</div>
        <div>{props.text}</div>
    </div>
  )
}
