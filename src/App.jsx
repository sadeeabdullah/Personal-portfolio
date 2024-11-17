import { Suspense, lazy } from "react";
import { Triangle } from "react-loader-spinner";
import backgroundImage from "./assets/images/sitebg.webp";

// Lazy load components
const About = lazy(() => import("./components/About/About"));
const Banner = lazy(() => import("./components/Banner/Banner"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Freequote = lazy(() => import("./components/FreeQuote/Freequote"));
const MyEducation = lazy(() => import("./components/MyEducation/MyEducation"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Navbar = lazy(() => import("./components/menu/Navbar"));

function App() {
  return (
    <div
      className="bg-fixed min-h-screen bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Suspense wrapper to display loading state */}
      <Suspense
        fallback={
          <div className="w-screen h-screen items-center flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
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
      >
        <Navbar />
        <Banner />
        <div className="p-4 lg:p-0">
          <About />
          <MyEducation />
          <Projects />
          <Freequote />
          <Contact />
        </div>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
