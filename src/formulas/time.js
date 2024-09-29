const timeFormulas = () => {
  const timeFormulas = {
    Second: {
      Minute: 1 / 60,
      Hour: 1 / 3600,
      Millisecond: 1000,
      Day: 1 / 86400,
      Week: 1 / 604800,
      unit: "s",
    },
    Minute: {
      Second: 60,
      Hour: 1 / 60,
      Millisecond: 60000,
      Day: 1 / 1440,
      Week: 1 / 10080,
      unit: "min",
    },
    Hour: {
      Second: 3600,
      Minute: 60,
      Millisecond: 3.6,
      Day: 1 / 24,
      Week: 1 / 168,
      unit: "h",
    },
    Millisecond: {
      Second: 1 / 1000,
      Hour: 1 / 3.6,
      Minute: 1 / 60000,
      Day: 1 / 8.64,
      Week: 1 / 6.048,
      unit: "ms",
    },
    Day: {
      Minute: 1440,
      Hour: 24,
      Second: 86400,
      Millisecond: 8.64,
      Week: 1 / 7,
      unit: "d",
    },
    Week: {
      Millisecond: 6.048,
      Day: 7,
      Minute: 10080,
      Second: 604800,
      Hour: 168,
      unit: "wk",
    },
  };

  return timeFormulas;
};

export default timeFormulas;
