const tempFormulas = () => {
  const temperatureFormulas = {
    Celcius: {
      Fahrenheit: (value) => (value * 9) / 5 + 32,
      Kelvin: (value) => value + 273.15,
      unit: "°C",
    },
    Fahrenheit: {
      Celcius: (value) => ((value - 32) * 5) / 9,
      Kelvin: (value) => (((value - 32) * 5) / 9 + 273.15).toFixed(3),
      unit: "°F",
    },
    Kelvin: {
      Celcius: (value) => value - 273.15,
      Fahrenheit: (value) => (((value - 273.15) * 9) / 5 + 32).toFixed(3),
      unit: "K",
    },
  };

  return temperatureFormulas;
};

export default tempFormulas;
