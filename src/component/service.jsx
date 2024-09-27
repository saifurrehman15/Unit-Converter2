function Services() {
    return (
      <div className="flex flex-col gap-10 justify-center items-center text-white p-4">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg text-center max-w-xl">
          We offer a range of services to help you with your unit conversion needs. 
          Our user-friendly platform allows you to convert various units quickly and 
          efficiently, ensuring accurate results every time.
        </p>
        <div className="flex flex-wrap gap-4 w-full p-4 justify-center">
          <div className="card bg-blue-600 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Time Conversion</h2>
            <p>Convert between hours, days, minutes, and more!</p>
          </div>
          <div className="card bg-blue-600 p-4 rounded-lg shadow-md ">
            <h2 className="text-xl font-semibold">Weight Conversion</h2>
            <p>Convert between grams, kilograms, pounds, and other weight units!</p>
          </div>
          <div className="card bg-blue-600 p-4 rounded-lg shadow-md ">
            <h2 className="text-xl font-semibold">Temperature Conversion</h2>
            <p>Convert between Celsius, Ferenheit and Kelvin.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;
  