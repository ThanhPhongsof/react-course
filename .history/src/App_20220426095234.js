import React from "react";
import { Dropdown } from "./components/advanced-react/inversion-of-control";

const options = [
  {
    title: "Frontend Developer",
    onClick: () => {},
  },
  {
    title: "Backend Developer",
    onClick: () => {},
  },
  {
    title: "Fullstack Developer",
    onClick: () => {},
  },
];

const onChangeInput = () => {};

const App = () => {
  return (
    <div>
      <Dropdown
        options={options}
        placeholder="Please select your job"
        inputPlaceholder="Seach your job"
        onChangeInput={onChangeInput}
        visibleIconCheck
        visibleSearch
      ></Dropdown>
    </div>
  );
};

export default App;
