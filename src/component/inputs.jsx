function Inputs({
  onchangeFunc,
  values,
  unitsCategories,
  selectedFieldUnit,
}) {
  console.log(unitsCategories[selectedFieldUnit]);
  
  return (
    <span className="flex w-ful">
      <input
        type="number"
        onChange={onchangeFunc}
        className="h-10 w-full bg-gray-700 text-white border border-gray-600 border-r-0 text-center rounded-tl outline-none"
        value={values}
      />
      <span className="bg-gray-700 p-1 rounded-tr border w-12 text-center border-gray-600">
        {unitsCategories[selectedFieldUnit]["unit"]}
      </span>
    </span>
  );
}
export default Inputs;
