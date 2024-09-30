import { Outlet } from "react-router-dom";
import MainHeader from "./header";
import HeroSection from "./herosection";
import Services from "./service";
import About from "./about";
import Footer from "./footer";
import { useState } from "react";

function LayoutFunc() {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 2000);
  return (
    <div>
      {loader ? (
        <div className="flex justify-center items-center" style={{ 
          background: 'radial-gradient(circle at top left, #243b55, #192d41)', 
          height: '100vh',
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.3)' }}>
          
          <div className="flex flex-col gap-10 items-center">
            <span className="loader"></span>
            <span className="text-3xl font-bold text-white">Unitify</span>
          </div>
        </div>
        
      ) : (
        <div>
          <div>
            <MainHeader />
          </div>
          <div id="about" className="mt-20">
            <HeroSection />
          </div>

          <div id="services" className="mt-5">
            <Services />
          </div>

          <div id="tools" className="mt-5">
            <Outlet />
          </div>
          <div id="reviews" className="mt-5">
            <About />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default LayoutFunc;
