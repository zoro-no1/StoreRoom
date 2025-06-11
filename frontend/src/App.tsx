import { Navigate, Route,Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Auth from "./pages/AuthPage";
import { useEffect } from "react";
import { authStore } from "./store/authStore";
import WelcomePage from "./pages/WelcomePage";
function App() {
 const {authUser,checkAuth}=authStore()

useEffect(()=>{
  
  if(!authUser){
    checkAuth()
  }
    
},[checkAuth])
  


 return(
 <Routes>
  <Route path="/" element={<WelcomePage/>}/>
  <Route path="/home" element={authUser?<HomePage/>:<Navigate to={"/"}/>}/>
  <Route path="/auth" element={!authUser?<Auth/>:<Navigate to={"/home"}/> }/>
 </Routes>
 )

}

export default App;
