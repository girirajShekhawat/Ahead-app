 import Footer from "./components/Footer"
import MainBanner from "./components/MainBanner"
import MiddleContent from "./components/MiddleContent"
import Navbar from "./components/Navbar"
import SideMovingBox from "./components/SideMovingBox"
import TextBox from "./components/TextBox"
 
 
 

function App() {
  

  return (
    <>
      <Navbar/>
      <div className="   container pt-[30px]  flex flex-col w-[800px]">
      <MiddleContent/>
      <Footer/>
      </div>
       
    </>
  )
}

export default App
