 import Footer from "./components/Footer"
import MainBanner from "./components/MainBanner"
import MiddleContent from "./components/MiddleContent"
import Navbar from "./components/Navbar"
import SideMovingBox from "./components/SideMovingBox"
import TextBox from "./components/TextBox"
import { BrowserRouter,Routes } from "react-router-dom"
 
 
 

function App({isadmin}) {
  
   

  return (
    <>
  


      <Navbar/>
      <div className="   container pt-[30px]  flex flex-col w-[1000px]">
      <MiddleContent isadmin={isadmin}/>
      <Footer/>
      </div>
       
    </>
  )
}

export default App
