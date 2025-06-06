import { ShareIcon } from "../icons/shareIcon";

interface props{
    title:string,
    link:string,
    tag?:[],
    type:string
}

export const Card = (props:props) => {
  return (
    <div className=" w-80 border border-gray-400 rounded-md bg-slate-200 text-black min-h-60 ">
      <div className="flex justify-between p-2 ">
        <div>{props.title}</div>
        <div className="flex justify-between w-[20%] ">
          <ShareIcon size="md" />
          <ShareIcon size="md" />   
        </div>
      </div>
      <div className="pt-3  ">
        {props.type==="yt" && <iframe
          className="w-[90%]  rounded-md m-auto"
          src={props.link.replace("watch","embed").replace("?v=","/")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>}{props.type==="x" &&<blockquote className="twitter-tweet ">
  <a href={props.link.replace("x.com","twitter.com")}></a> 
</blockquote>}

      </div>
    </div>
  );
};
