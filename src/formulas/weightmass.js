const massFormulas = () => {
  const massRates = {
    Gram: {
      Kilogram: 1 / 1000,
      Milligram: 1000,
      Pound: 1 / 453.6,
      unit: "g",
    },
    Kilogram: {
      Gram: 1000,
      Milligram: 1000000,
      Pound: 2.205,
      unit: "kg",
    },
    Milligram: {
      Gram: 1 / 1000,
      Kilogram: 1 / 1000000,
      Pound: 1 / 453_592,
      unit: "mg",
    },
    Pound: {
      Kilogram: 1 / 2.205,
      Milligram: 453600,
      Gram: 453.6,
      unit: "lbs",
    },
  };

  return massRates;
};

export default massFormulas;
