import { useState, useEffect } from "react";
import "../App.css";
import initialSet from "./initialValueSet";
import swap_image from "../assets/9870522.png";
import massFormulas from "../formulas/weightmass";
import tempFormulas from "../formulas/temperature";
import frequencyFormulas from "../formulas/frequency";
import timeFormulas from "../formulas/time";
import converterFunc2 from "../method/tempconversion";
import converterFunc3 from "../method/freqconversion";
import Inputs from "./inputs";
import SelectBox from "./selectboxes";
import SelectBox2 from "./selectbox2";

function UnitConverter() {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(0.001);
  const [category, setCategory] = useState("Mass");
  const [selectFirst, setSelectFirst] = useState("Gram");
  const [selectFirst2, setSelectFirst2] = useState("Kilogram");
  const [lastVal, setLast] = useState("");
  const [trigger, setTrigger] = useState("");
  const [inpCheck, setCheck] = useState("inp1");

  const temperaturConversion = converterFunc2;
  const converssionMethod = converterFunc3;

  const massRates = massFormulas();
  const temperatureRates = tempFormulas();
  const frequencyRates = frequencyFormulas();
  const timeSet = timeFormulas();

  const unitCheck = () => {
    if (category === "Mass") return massRates;
    if (category === "Temperature") return temperatureRates;
    if (category === "Frequency") return frequencyRates;
    if (category === "Time") return timeSet;
  };

  const unitsCategories = unitCheck();


  if (selectFirst === selectFirst2 && trigger === "first") {
    setSelectFirst2(lastVal);
    setCheck("random");
  } else if (selectFirst === selectFirst2 && trigger === "second") {
    setSelectFirst(lastVal);
    setCheck("random");
  }

  const swappingHandle = (e) => {
    setSelectFirst(selectFirst2);
    setSelectFirst2(selectFirst);
    setCheck("random");
    const styleCheck = "rotate(-180deg)";
    let styleGiven = e.target.style.transform;
    styleGiven === styleCheck
      ? (e.target.style.transform = "rotate(180deg)")
      : (e.target.style.transform = "rotate(-180deg)");
  };

  const handleCategories = (e) => {
    const selectedCategory = e.target.value;
    initialSet(
      selectedCategory,
      setCategory,
      setSelectFirst,
      setSelectFirst2,
      setValue1,
      setValue2
    );
  };

  useEffect(() => {
    if (category === "Mass") {
      converssionMethod(
        selectFirst,
        selectFirst2,
        inpCheck,
        value1,
        value2,
        setValue1,
        setValue2,
        massRates
      );
    } else if (category === "Temperature") {
      temperaturConversion(
        selectFirst,
        selectFirst2,
        inpCheck,
        value1,
        value2,
        setValue1,
        setValue2
      );
    } else if (category === "Frequency") {
      converssionMethod(
        selectFirst,
        selectFirst2,
        inpCheck,
        value1,
        value2,
        setValue1,
        setValue2,
        frequencyRates
      );
    } else if (category === "Time") {
      converssionMethod(
        selectFirst,
        selectFirst2,
        inpCheck,
        value1,
        value2,
        setValue1,
        setValue2,
        timeSet
      );
    }
  }, [value1, value2, selectFirst, selectFirst2]);

  return (
    <div className="flex flex-col justify-center items-center p-4 mt-10">
      <h1 className="mb-2 text-3xl text-white font-bold">Unit Converter</h1>
      <div className="border border-gray-700 w-[100%] lg:w-[600px] h-[300px] sm:h-[250px] sm:w-[600px]  text-white rounded-md flex flex-col justify-center items-center converter-block shadow-md p-2">
        <SelectBox2 onChangeFunc={(e) => handleCategories(e)} />

        <div className="flex justify-center items-center gap-4 input-groups">
          <div className="flex flex-col w-[100%]">
            <Inputs
              onchangeFunc={(e) => {
                setValue1(parseFloat(e.target.value));
                setCheck("inp1");
              }}
              unitsCategories={unitsCategories}
              selectedFieldUnit={selectFirst}
              values={value1}
            />

            <SelectBox
              selectedFieldUnit={selectFirst}
              onChangeFunc={(e) => {
                setLast(selectFirst);
                setTrigger("first");
                setSelectFirst(e.target.value);
              }}
              category={category}
            />
          </div>

          <img
            src={swap_image}
            alt="Swap"
            height={30}
            width={30}
            className="cursor-pointer bg-blue-300 rounded-full p-1 hover:bg-black transition"
            onClick={(e) => swappingHandle(e)}
          />

          <div className="flex flex-col w-[100%]">
            <Inputs
              onchangeFunc={(e) => {
                setValue2(parseFloat(e.target.value));
                setCheck("inp2");
              }}
              unitsCategories={unitsCategories}
              selectedFieldUnit={selectFirst2}
              values={value2}
            />

            <SelectBox
              selectedFieldUnit={selectFirst2}
              onChangeFunc={(e) => {
                setLast(selectFirst2);
                setTrigger("second");
                setSelectFirst2(e.target.value);
              }}
              category={category}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnitConverter;
