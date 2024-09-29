const frequencyFormulas = () => {
  const freqFormulas = {
    Hertz: {
      Kilohertz: 1 / 1000,
      Megahertz: 1 / 1000000,
      Gigahertz: 1 / 1000000000,
      unit: "Hz",
    },
    Kilohertz: {
      Hertz: 1000,
      Megahertz: 1 / 1000,
      Gigahertz: 1 / 1000000,
      unit: "kHz",
    },
    Megahertz: {
      Kilohertz: 1000,
      Hertz: 1000000,
      Gigahertz: 1 / 1000,
      unit: "MHz",
    },
    Gigahertz: {
      Kilohertz: 1000000,
      Hertz: 1000000000,
      Megahertz: 1000,
      unit: "GHz",
    },
  };

  return freqFormulas;
};

export default frequencyFormulas;
