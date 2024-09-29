const options = {
  Mass: ["Kilogram", "Pound", "Gram", "Milligram"],
  Temperature: ["Celcius", "Fahrenheit", "Kelvin"],
  Frequency: ["Hertz", "Kilohertz", "Megahertz", "Gigahertz"],
  Time: ["Second", "Minute", "Hour", "Millisecond", "Day", "Week"],
  Length: ["Kilometre", "Metre", "Centimetre", "Millimetre"],
};

function SelectBox({ selectedFieldUnit, onChangeFunc, category }) {
  return (
    <select
      value={selectedFieldUnit}
      onChange={onChangeFunc}
      className="h-8 w-30 bg-gray-700 text-white border border-gray-600 text-center rounded-b outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options[category].map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
}

export default SelectBox;
