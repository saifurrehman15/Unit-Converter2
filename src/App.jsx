import { useState, useEffect } from "react";
import "./App.css";
import initialSet from "./component/initialValueSet";

function App() {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(0.001);
  const [category, setCategory] = useState("Mass");
  const [selectFirst, setSelectFirst] = useState("Gram");
  const [selectFirst2, setSelectFirst2] = useState("Kilogram");
  const [lastVal, setLast] = useState("");
  const [trigger, setTrigger] = useState("");
  const [inpCheck, setCheck] = useState("inp1");

  const massRates = {
    Gram: {
      Kilogram: 1 / 1000,
      Milligram: 1000,
      Pound: 1 / 453.6,
    },
    Kilogram: {
      Gram: 1000,
      Milligram: 1000000,
      Pound: 2.205,
    },
    Milligram: {
      Gram: 1 / 1000,
      Kilogram: 1 / 1000000,
      Pound: 1 / 453_592,
    },
    Pound: {
      Kilogram: 1 / 2.205,
      Milligram: 453600,
      Gram: 453.6,
    },
  };
  const temperatureRates = {
    Celcius: {
      Ferenheit: (value) => (value * 9) / 5 + 32,
      Kelvin: (value) => value + 273.15,
    },
    Ferenheit: {
      Celcius: (value) => ((value - 32) * 5) / 9,
      Kelvin: (value) => (((value - 32) * 5) / 9 + 273.15).toFixed(3),
    },
    Kelvin: {
      Celcius: (value) => value - 273.15,
      Ferenheit: (value) => (((value - 273.15) * 9) / 5 + 32).toFixed(3),
    },
  };
  const frequencyRates = {
    Hertz: {
      Kilohertz: 1 / 1000,
      Megahertz: 1 / 1000000,
      Gigahertz: 1 / 1000000000,
    },
    Kilohertz: {
      Hertz: 1000,
      Megahertz: 1 / 1000,
      Gigahertz: 1 / 1000000,
    },
    Megahertz: {
      Kilohertz: 1000,
      Hertz: 1000000,
      Gigahertz: 1 / 1000,
    },
    Gigahertz: {
      Kilohertz: 1000000,
      Hertz: 1000000000,
      Megahertz: 1000,
    },
  };
  const timeSet = {
    Second: {
      Minute: 1 / 60,
      Hour: 1 / 3600,
      Millisecond: 1000,
      Day: 1 / 86400,
      Week: 1 / 604800,
    },
    Minute: {
      Second: 60,
      Hour: 1 / 60,
      Millisecond: 60000,
      Day: 1 / 1440,
      Week: 1 / 10080,
    },
    Hour: {
      Second: 3600,
      Minute: 60,
      Millisecond: 3.6,
      Day: 1 / 24,
      Week: 1 / 168,
    },
    Millisecond: {
      Second: 1 / 1000,
      Hour: 1 / 3.6,
      Minute: 1 / 60000,
      Day: 1 / 8.64,
      Week: 1 / 6.048,
    },
    Day: {
      Minute: 1440,
      Hour: 24,
      Second: 86400,
      Millisecond: 8.64,
      Week: 1 / 7,
    },
    Week: {
      Millisecond: 6.048,
      Day: 7,
      Minute: 10080,
      Second: 604800,
      Hour: 168,
    },
  };

  const options = {
    Mass: ["Kilogram", "Pound", "Gram", "Milligram"],
    Temperature: ["Celcius", "Ferenheit", "Kelvin"],
    Frequency: ["Hertz", "Kilohertz", "Megahertz", "Gigahertz"],
    Time: ["Second", "Minute", "Hour", "Millisecond", "Day", "Week"],
  };

  // Function to handle conversions based on the selected units

  const converterFunc = () => {
    if (massRates[selectFirst] && massRates[selectFirst][selectFirst2]) {
      if (inpCheck === "inp1" || inpCheck === "random") {
        const valueSecond = value1 * massRates[selectFirst][selectFirst2];
        setValue2(valueSecond);
      } else if (inpCheck === "inp2") {
        setValue1(value2 / massRates[selectFirst][selectFirst2]);
      }
    }

    // if (inpCheck === "inp1" || inpCheck == "random") {
    //   // Conversions from the first input to the second input
    //   if (
    //     (selectFirst === "Gram" && selectFirst2 === "Kilogram") ||
    //     (selectFirst === "Milligram" && selectFirst2 === "Gram")
    //   ) {
    //     setValue2(value1 / 1000);
    //   } else if (
    //     (selectFirst === "Kilogram" && selectFirst2 === "Gram") ||
    //     (selectFirst === "Gram" && selectFirst2 === "Milligram")
    //   ) {
    //     setValue2(value1 * 1000);
    //   } else if (selectFirst === "Pound" && selectFirst2 === "Kilogram") {
    //     setValue2((value1 / 2.205).toFixed(6));
    //   } else if (selectFirst === "Kilogram" && selectFirst2 === "Pound") {
    //     setValue2((value1 * 2.205).toFixed(6));
    //   } else if (selectFirst === "Gram" && selectFirst2 === "Pound") {
    //     setValue2((value1 / 453.6).toFixed(6));
    //   } else if (selectFirst === "Pound" && selectFirst2 === "Gram") {
    //     setValue2((value1 * 453.6).toFixed(6));
    //   } else if (selectFirst === "Milligram" && selectFirst2 === "Pound") {
    //     setValue2((value1 / 453600).toFixed(6));
    //   } else if (selectFirst === "Pound" && selectFirst2 === "Milligram") {
    //     setValue2((value1 * 453600).toFixed(6));
    //   }
    // } else if (inpCheck === "inp2") {
    //   // Reverse conversions from the second input to the first input
    //   if (
    //     (selectFirst2 === "Gram" && selectFirst === "Kilogram") ||
    //     (selectFirst2 === "Milligram" && selectFirst === "Gram")
    //   ) {
    //     setValue1(value2 / 1000);
    //   } else if (
    //     (selectFirst2 === "Kilogram" && selectFirst === "Gram") ||
    //     (selectFirst2 === "Gram" && selectFirst === "Milligram")
    //   ) {
    //     setValue1(value2 * 1000);
    //   } else if (selectFirst2 === "Pound" && selectFirst === "Kilogram") {
    //     setValue1((value2 / 2.205).toFixed(6));
    //   } else if (selectFirst2 === "Kilogram" && selectFirst === "Pound") {
    //     setValue1((value2 * 2.205).toFixed(6));
    //   } else if (selectFirst2 === "Gram" && selectFirst === "Pound") {
    //     setValue1((value2 / 453.6).toFixed(6));
    //   } else if (selectFirst2 === "Pound" && selectFirst === "Gram") {
    //     setValue1((value2 * 453.6).toFixed(6));
    //   } else if (selectFirst2 === "Milligram" && selectFirst === "Pound") {
    //     setValue1((value2 / 453600).toFixed(6));
    //   } else if (selectFirst2 === "Pound" && selectFirst === "Milligram") {
    //     setValue1((value2 * 453600).toFixed(6));
    //   }
    // }
  };

  const converterFunc2 = () => {
    if (inpCheck === "inp1" || inpCheck === "random") {
      if (
        temperatureRates[selectFirst] &&
        temperatureRates[selectFirst][selectFirst2]
      ) {
        setValue2(temperatureRates[selectFirst][selectFirst2](value1));
      }
    } else if (inpCheck === "inp2") {
      if (
        temperatureRates[selectFirst2] &&
        temperatureRates[selectFirst2][selectFirst]
      ) {
        setValue1(temperatureRates[selectFirst2][selectFirst](value2));
      }
    }
  };

  const converterFunc3 = () => {
    if (
      frequencyRates[selectFirst] &&
      frequencyRates[selectFirst][selectFirst2]
    ) {
      if (inpCheck === "inp1" || inpCheck === "random") {
        const valueSecond = value1 * frequencyRates[selectFirst][selectFirst2];
        setValue2(
          valueSecond.toString().split(".")[1]?.length > 8
            ? valueSecond.toFixed(6)
            : valueSecond
        );
      } else if (inpCheck === "inp2") {
        setValue1(value2 / frequencyRates[selectFirst][selectFirst2]);
      }
    }
  };

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

  // Handle swapping the same unit selections
  if (selectFirst === selectFirst2 && trigger === "first") {
    setSelectFirst2(lastVal);
    setCheck("random");
  } else if (selectFirst === selectFirst2 && trigger === "second") {
    setSelectFirst(lastVal);
    setCheck("random");
  }

  // Trigger conversion when value1, value2, selectFirst, or selectFirst2 changes
  useEffect(() => {
    if (category === "Mass") {
      converterFunc();
    } else if (category === "Temperature") {
      converterFunc2();
    } else if (category === "Frequency") {
      converterFunc3();
    } else if (category === "Time") {
      converterFunc4();
    }
  }, [value1, value2, selectFirst, selectFirst2]);

  return (
    <div className="flex flex-col justify-center items-center p-4 mt-10">
      <h1 className="mb-2 text-3xl text-white font-bold">Unit Converter</h1>
      <div className="border border-gray-700 w-[100%] lg:w-[600px] h-[300px] sm:w-[600px]  text-white rounded flex flex-col justify-center items-center converter-block shadow-md">
        <select
          className="h-10 sm:h-8 w-[72%] mb-10 border border-gray-600 text-gray-100 bg-gray-700 text-center rounded outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            const selectedCategory = e.target.value;
            initialSet(
              selectedCategory,
              setCategory,
              setSelectFirst,
              setSelectFirst2,
              setValue1,
              setValue2
            );
          }}
        >
          <option value="Mass">Mass</option>
          <option value="Frequency">Frequency</option>
          <option value="Temperature">Temperature</option>
          <option value="Time">Time</option>
        </select>

        <div className="flex justify-center items-center gap-4 block">
          <div className="flex flex-col w-1/2">
            <input
              type="number"
              value={value1}
              className="h-10 w-full bg-gray-700 text-white border border-gray-600 text-center rounded-t outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                setCheck("inp1");
                setValue1(parseFloat(e.target.value));
              }}
            />
            <select
              value={selectFirst}
              onChange={(e) => {
                setLast(selectFirst);
                setTrigger("first");
                setSelectFirst(e.target.value);
              }}
              className="h-8 w-30 bg-gray-700 text-white border border-gray-600 text-center rounded-b outline-none focus:ring-2 focus:ring-blue-500"
            >
              {options[category].map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </div>

          <img
            src="src/assets/9870522.png"
            alt="Swap"
            height={30}
            width={30}
            className="cursor-pointer bg-blue-300 rounded-full p-1 hover:bg-black transition"
            onClick={(e) => {
              setSelectFirst(selectFirst2);
              setSelectFirst2(selectFirst);
              setCheck("random");
              const styleCheck = "rotate(-180deg)";
              let styleGiven = e.target.style.transform;
              styleGiven === styleCheck
                ? (e.target.style.transform = "rotate(180deg)")
                : (e.target.style.transform = "rotate(-180deg)");
            }}
          />

          <div className="flex flex-col w-1/2">
            <input
              type="number"
              value={value2}
              className="h-10 w-30 bg-gray-700 text-white border border-gray-600 text-center rounded-t outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                setValue2(parseFloat(e.target.value));
                setCheck("inp2");
              }}
            />
            <select
              value={selectFirst2}
              onChange={(e) => {
                setLast(selectFirst2);
                setTrigger("second");
                setSelectFirst2(e.target.value);
              }}
              className="h-8 w-30 bg-gray-700 text-white border border-gray-600 text-center rounded-b outline-none focus:ring-2 focus:ring-blue-500"
            >
              {options[category].map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
