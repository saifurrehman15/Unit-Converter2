import massFormulas from "../formulas/weightmass";

const massRates = massFormulas();

const converterFunc = (
  selectFirst,
  selectFirst2,
  inpCheck,
  value1,
  value2,
  setValue1,
  setValue2,
) => {
  if (massRates[selectFirst] && massRates[selectFirst][selectFirst2]) {
    if (inpCheck === "inp1" || inpCheck === "random") {
      const valueSecond = value1 * massRates[selectFirst][selectFirst2];
      setValue2(
        valueSecond.toString().split(".")[1]?.length > 8
          ? valueSecond.toFixed(6)
          : valueSecond
      );
    } else if (inpCheck === "inp2") {
      const valueSecond = value2 / massRates[selectFirst][selectFirst2];
      setValue1(
        valueSecond.toString().split(".")[1]?.length > 8
          ? valueSecond.toFixed(6)
          : valueSecond
      );
    }
  }
};

export default converterFunc;
