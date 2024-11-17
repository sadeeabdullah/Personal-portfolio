import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Freequote from "./components/FreeQuote/Freequote"
import MyEducation from "./components/MyEducation/MyEducation"
import Projects from "./components/Projects/Projects"
import Navbar from "./components/menu/Navbar"
import backgroundImage from "./assets/images/sitebg.webp"
import { useState } from "react"
import { Triangle } from "react-loader-spinner"



function App() {

  const[loading,setLoading]=useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 3000);
  if (loading) {
    return <div className="w-screen h-screen items-center flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Triangle
  visible={true}
  height="80"
  width="80"
  color="#331959"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  }
  return (
    <div  className='bg-fixed   min-h-screen bg-cover' style={{ backgroundImage: `url(${backgroundImage})` }}>
     
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="p-4 lg:p-0">
      <About ></About>
      <MyEducation></MyEducation>
      <Projects></Projects>
      <Freequote></Freequote>
      <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
