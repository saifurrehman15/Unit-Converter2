function About() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center text-white p-4" style={{ backgroundColor: "#192d41" }}>
    <h1 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h1>
    <div className="flex flex-wrap gap-6 w-full p-4 justify-center">
      <div className="card2 bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:bg-opacity-20 transform hover:scale-105 transition-transform duration-300 text-center ">
        <img src="../src/assets/client-1.jpeg" alt="client-1" className="rounded-full w-16 h-16 object-cover  mx-auto mb-4" />
        <h2 className="text-lg font-bold mb-2">John Doe</h2>
        <p className="text-sm text-gray-300 italic">"This service made unit conversions so easy and fast! I use it every day."</p>
      </div>
      <div className="card2 bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:bg-opacity-20 transform hover:scale-105 transition-transform duration-300 text-center ">
      <img src="../src/assets/client-2.jpeg" alt="client-1" className="rounded-full w-16 h-16 object-cover  mx-auto mb-4" />
      <h2 className="text-lg font-bold mb-2">Jane Smith</h2>
        <p className="text-sm text-gray-300 italic">"The accuracy and simplicity are top-notch. I highly recommend it!"</p>
      </div>
      <div className="card2 bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:bg-opacity-20 transform hover:scale-105 transition-transform duration-300 text-center">
      <img src="../src/assets/client-3.jpeg" alt="client-1" className="rounded-full w-16 h-16 object-cover  mx-auto mb-4" />
      <h2 className="text-lg font-bold mb-2">Mike Johnson</h2>
        <p className="text-sm text-gray-300 italic">"A lifesaver for quick conversions. It has all the features I need."</p>
      </div>
    </div>
  </div>
  
  
  );
}

export default About;
