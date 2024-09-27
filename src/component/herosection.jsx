import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#001529] to-[#192d41] h-[420px] text-white p-6 text-center">
      {/* Hero Content */}
      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">Online Unit Converter</h1>
      <p className="text-lg mb-6 max-w-md">
        Effortlessly convert units with our user-friendly tool. Select your
        units and get instant results!
      </p>
      {/* Call-to-Action Button */}
      <a href="#tools">
        <button className="px-8 py-3 bg-blue-700 hover:bg-blue-800 transition-all duration-300 text-white font-semibold rounded-lg shadow-md transform hover:scale-105">
          Get Started
        </button>
      </a>
    </div>
  );
}

export default HeroSection;
