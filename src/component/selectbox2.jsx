function SelectBox2({ selectedFieldUnit, onChangeFunc }) {
  return (
    <select
      value={selectedFieldUnit}
      onChange={onChangeFunc}
      className="h-10 sm:h-10 w-[72%] mb-10 border border-gray-600 text-gray-100 bg-gray-700 text-center rounded outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="Mass">Mass</option>
      <option value="Frequency">Frequency</option>
      <option value="Temperature">Temperature</option>
      <option value="Time">Time</option>
    </select>
  );
}

export default SelectBox2;
