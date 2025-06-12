import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import CreateContent from "../components/CreateContent";
import { SideBar } from "../components/SideBar";
import { TopBar } from "../components/TopBar"; 
import postStore from "../store/postStore";
import GetShareLink from "../components/GetShareLink";

const HomePage = () => {
  const [createModel, setModel] = useState(false);
  const [linkSearch, setLinkSearch] = useState(false);
  const { allPost, getAllPost, deletePost,otherPost ,gerateLink,mylink,getMyLink,linkOwner} = postStore();
  let hidden:string=''
let hide:string=""
  useEffect(() => {
    getAllPost();
    getMyLink()  
  }, [getAllPost]);

  const handleDelete = async (id: any) => {
    if (window.confirm("Are you sure you want to delete this link?")) {
      await deletePost(id); 
      getAllPost(); 
    }
  };

  otherPost.length>0?hidden="hidden":hide="hidden"
  

  return (
    <div className="min-h-lvh bg-gray-800 text-white flex  md:flex-row">
      
      {/* Sidebar - takes responsive width */}
      <div className="w-[60%] md:w-[33.333%] lg:w-[25%] bg-gray-900">
        <SideBar link={()=>setLinkSearch(true)}/>
      </div>

      {/* Main Content */}
      <div className="w-full ">
        {/* Create Modal */}
        <CreateContent open={createModel} close={() => setModel(false)} />
        <GetShareLink open={linkSearch} close={()=>setLinkSearch(false)}/>
        {/* TopBar */}
        <div className="bg-gray-800 p-4">
          <TopBar
            add={() =>  setModel(true)}
            share={() => gerateLink()}
          />
        </div>
{mylink && <div className=" text-end pr-6 text-xl">My Code = {mylink.hash}</div>}
        {/* Card Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 ${hidden} `}>
          
          {allPost.length > 0 ? (
            allPost.map((e: any) => (
              <Card
                key={e._id}
                title={e.title}
                link={e.link}
                type={e.linkOf}
                onClick={() => handleDelete(e._id)}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400 text-lg py-10">
              No links found. Add your first link!
            </p>
          )}
        </div>
        {otherPost && <div className="text-center text-5xl font-bold  py-2">
  {linkOwner?.username}
</div>}
      
        <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 "+hide}>
          {otherPost.length > 0 ? (
            otherPost.map((e: any) => (
              <Card
                key={e._id}
                title={e.title}
                link={e.link}
                type={e.linkOf}
                onClick={() => handleDelete(e._id)}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400 text-lg py-10">
              No links found. 
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
