function Services() {
  return (
<div className="flex flex-col gap-10 justify-center items-center text-white p-6 bg-[#192d41]">
  <h1 className="text-5xl font-bold text-center">Our Services</h1>
  <p className="text-lg text-center max-w-2xl">
    We offer a range of services to help you with your unit conversion
    needs. Our user-friendly platform allows you to convert various units
    quickly and efficiently, ensuring accurate results every time.
  </p>
  <div className="flex flex-wrap gap-6 w-full p-4 justify-center">
    <div className="card bg-blue-600 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl fade-in-up">
      <h2 className="text-2xl font-semibold mb-2">Time Conversion</h2>
      <p className="text-gray-200">Convert between hours, days, minutes, and more!</p>
    </div>
    <div className="card bg-blue-600 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl fade-in-up">
      <h2 className="text-2xl font-semibold mb-2">Weight Conversion</h2>
      <p className="text-gray-200">Convert between grams, kilograms, pounds, and other weight units!</p>
    </div>
    <div className="card bg-blue-600 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl fade-in-up">
      <h2 className="text-2xl font-semibold mb-2">Temperature Conversion</h2>
      <p className="text-gray-200">Convert between Celsius, Fahrenheit, and Kelvin.</p>
    </div>
    <div className="card bg-blue-600 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl fade-in-up">
      <h2 className="text-2xl font-semibold mb-2">Frequency Conversion</h2>
      <p className="text-gray-200">Convert between Hertz, Kilohertz, and many more.</p>
    </div>
  </div>
</div>
  );
}

export default Services;
