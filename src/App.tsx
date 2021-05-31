import React, { useState } from "react";
import Button from "./components/button/Button";
import Input from "./components/input/Input";
import "./style.css";

const App = () => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className={`search ${active ? "active" : ""}`} onClick={toggleActive}>
      <Input />
      <Button />
    </div>
  );
};

export default App;
