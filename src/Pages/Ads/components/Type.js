import React from "react";
import Select from "react-select";
const Type = () => {
  const options = [
    { label: "Hyrax", value: "1" },
    { label: "Hamsters", value: "2" },
    { label: "Squirrels", value: "3" },
    { label: "Duck", value: "4" },
    { label: "Rabbits", value: "5" },
    { label: "Fish and turtles", value: "6" },
    { label: "cows", value: "7" },
    { label: "Dogs", value: "8" },
    { label: "Horses", value: "9" },
    { label: "Camels", value: "10" },
    { label: "Chicken", value: "11" },
    { label: "Cats", value: "12" },
    { label: "Pigeons", value: "13" },
    { label: "Parrot", value: "14" },
    { label: "Goats", value: "15" },
    { label: "Sheep", value: "16" },
  ];
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      border: 0,
      boxShadow: "none",
      padding: "12px 0 12px 40px",
      margin: "-16px -6px 0 -52px",
      borderRadius: "0"
    })
  };
  return (
    <React.Fragment>
      <Select
        options={options}
        styles={colourStyles}
        className="selectForm__inner"
        data-trigger
        defaultValue={{ label: "Pet Type", value: 0 }}
        name="choices-single-categories"
        id="choices-single-categories"
        aria-label="Default select example"
      />
    </React.Fragment>
  );
};

export default Type;
