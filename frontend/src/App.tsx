import { Card } from "./components/Card";
import { SideBar } from "./components/SideBar";
import { TopBar } from "./components/TopBar";

function App() {
  return (
    <div className=" bg-gray-800 min-h-svh text-white flex w-svw">
      <div className=" w-1/3 bg-pink-300 h-svh">
        <SideBar />
      </div>
      <div className=" w-full ">

      <div className="w-full h-24 ">
        <TopBar />
        </div>
        <div className="mt-3 mx-3 h-1/3">
      <Card title="first" link="https://www.youtube.com/watch?v=7W1me-WoWXo" type="yt"/>
    
      </div>
      </div>
    </div>
  );
}

export default App;
