import React from "react";
import { Dropdown } from "./components/advanced-react/inversion-of-control";

const options = [
  {
    title: "Frontend Developer",
  },
  {
    title: "Backend Developer",
  },
  {
    title: "Fullstack Developer",
  },
];

const onChangeInput = () => {};

const App = () => {
  return (
    <div>
      {/* <Dropdown
        options={options}
        placeholder="Please select your job"
        inputPlaceholder="Seach your job"
        onChangeInput={onChangeInput}
        visibleIconCheck
        visibleSearch
      ></Dropdown> */}
      <Dropdown placeholder="Please select your job">
        <div className="relative inline-block w-full max-w-[300px]"></div>
      </Dropdown>
    </div>
  );
};

export default App;
