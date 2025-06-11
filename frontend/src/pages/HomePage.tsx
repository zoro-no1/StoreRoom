import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import CreateContent from "../components/CreateContent";
import { SideBar } from "../components/SideBar";
import { TopBar } from "../components/TopBar"; 
import postStore from "../store/postStore";

const HomePage = () => {
  const [createModel, setModel] = useState(false);
  const { allPost, getAllPost, deletePost } = postStore();

  useEffect(() => {
    getAllPost();
  }, [getAllPost]);

  const handleDelete = async (id: any) => {
    if (window.confirm("Are you sure you want to delete this link?")) {
      await deletePost(id); 
      getAllPost(); 
    }
  };

  return (
    <div className="min-h-lvh bg-gray-800 text-white flex  md:flex-row">
      
      {/* Sidebar - takes responsive width */}
      <div className="w-[60%] md:w-[33.333%] lg:w-[25%] bg-gray-900">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="w-full ">
        {/* Create Modal */}
        <CreateContent open={createModel} close={() => setModel(false)} />

        {/* TopBar */}
        <div className="bg-gray-800 p-4">
          <TopBar
            add={() => setModel(true)}
            share={() => console.log("Share Brain clicked")}
          />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
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
      </div>
    </div>
  );
};

export default HomePage;
