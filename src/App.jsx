import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import MyEducation from "./components/MyEducation/MyEducation"
import Projects from "./components/Projects/Projects"
import Navbar from "./components/menu/Navbar"



function App() {

  return (
    <div  className='bg-site-bg bg-fixed font-  min-h-screen bg-cover'>
      <Navbar></Navbar>
      <Banner></Banner>
      <About ></About>
      <MyEducation></MyEducation>
      <Projects></Projects>
    </div>
  )
}

export default App
