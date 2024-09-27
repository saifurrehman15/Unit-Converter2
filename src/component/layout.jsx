import { Outlet } from "react-router-dom";
import MainHeader from "./header";
import HeroSection from "./herosection";
import Services from "./service";
import About from "./about";
import Footer from "./footer";

function LayoutFunc() {
  return (
    <div>
      <div>
        <MainHeader />
      </div>
      <div className="mt-20">
        <HeroSection />
      </div>

      <div id="services" className="mt-5">
        <Services />
      </div>

      <div id="tools" className="mt-5">
        <Outlet />
      </div>
      <div id="about" className="mt-5">
        <About />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default LayoutFunc;
