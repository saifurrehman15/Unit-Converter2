import tempFormulas from "../formulas/temperature";

const temperatureRates = tempFormulas();

const converterFunc2 = (
  selectFirst,
  selectFirst2,
  inpCheck,
  value1,
  value2,
  setValue1,
  setValue2
) => {
  if (inpCheck === "inp1" || inpCheck === "random") {
    if (
      temperatureRates[selectFirst] &&
      temperatureRates[selectFirst][selectFirst2]
    ) {
      const valueSecond = temperatureRates[selectFirst][selectFirst2](value1);
      setValue2(
        valueSecond.toString().split(".")[1]?.length > 8
          ? valueSecond.toFixed(3)
          : valueSecond
      );
    }
  } else if (inpCheck === "inp2") {
    if (
      temperatureRates[selectFirst2] &&
      temperatureRates[selectFirst2][selectFirst]
    ) {
      const valueSecond = temperatureRates[selectFirst2][selectFirst](value2);
      setValue1(
        valueSecond.toString().split(".")[1]?.length > 8
          ? valueSecond.toFixed(3)
          : valueSecond
      );
    }
  }
};

export default converterFunc2;
