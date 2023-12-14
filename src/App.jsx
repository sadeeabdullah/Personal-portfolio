import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Freequote from "./components/FreeQuote/Freequote"
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
      <Freequote></Freequote>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
