function initialSet(
  value,
  setCategory,
  setSelectFirst,
  setSelectFirst2,
  setValue1,
  setValue2,
) {
  const selectedCategory = value;
  
  // Set the category
  setCategory(selectedCategory);
  
  // Set values based on selected category
  if (selectedCategory === "Temperature") {
    setSelectFirst("Celcius");
    setSelectFirst2("Ferenheit");
    setValue1(0);
    setValue2(32);
  } else if (selectedCategory === "Mass") {
    setSelectFirst("Gram");
    setSelectFirst2("Kilogram");
    setValue1(1);
    setValue2(0.001);
  } else if (selectedCategory === "Frequency") {
    setSelectFirst("Hertz");
    setSelectFirst2("Kilohertz");
    setValue1(1);
    setValue2(0.001);
  } else if (selectedCategory === "Time") {
    setSelectFirst("Second");
    setSelectFirst2("Minute");
    setValue1(1);
    setValue2(0.01667);
  }
}

export default initialSet;
