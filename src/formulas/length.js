const lenghtFormulas = () => {
  const lengthRates = {
    Metre: {
      Centimetre: 100,
      Millimetre: 1000,
      Kilometre: 1 / 1000,
      unit: "m",
    },
    Centimetre: {
      Metre: 1 / 100,
      Kilometre: 100000,
      Millimetre: 10,
      unit: "cm",
    },
    Kilometre: {
      Metre: 1000,
      Centimetre: 100000,
      Millimetre: 1000000,
      unit: "km",
    },
    Millimetre: {
      Metre: 1 / 1000,
      Centimetre: 1 / 10,
      Kilometre: 1 / 1000000,
      unit: "mm",
    },
  };

  return lengthRates;
};

export default lenghtFormulas;
