import timeFormulas from "../formulas/time";

const timeSet = timeFormulas();

const converterFunc4 = () => {
  if (timeSet[selectFirst] && timeSet[selectFirst][selectFirst2]) {
    if (inpCheck === "inp1" || inpCheck === "random") {
      const valueSecond = value1 * timeSet[selectFirst][selectFirst2];
      setValue2(
        valueSecond.toString().split(".")[1]?.length > 8
          ? valueSecond.toFixed(6)
          : valueSecond
      );
    } else if (inpCheck === "inp2") {
      const valueSecond = value2 / timeSet[selectFirst][selectFirst2];

      setValue1(
        valueSecond.toString().split(".")[1]?.length > 8
          ? valueSecond.toFixed(6)
          : valueSecond
      );
    }
  }
};

export default converterFunc4;
