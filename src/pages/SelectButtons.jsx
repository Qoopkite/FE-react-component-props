import Button from "../components/Button/Button";

import {useState} from 'react'

const SelectButtons = () => {
  const [buttonColor, setButtonColor] = useState(0);

  const changeColor = (color)=> {
    {setButtonColor(color)};
  };
  return <div className="selectBtns">
   
   
  <Button 
  Buttoncolor={buttonColor === "Primary" ? "pink" : "blue"} 
  text="Primary"
  onClick={() => changeColor("Primary")}>
  </Button>

  <Button 
  Buttoncolor={buttonColor === "Secondary" ? "pink" : "blue"} 
  text="Secondary"
  onClick={() => changeColor("Secondary")}>
  </Button>

  <Button 
  Buttoncolor={buttonColor === "Default" ? "pink" : "blue"} 
  text="Default"
  onClick={() =>changeColor("Default")}>
  </Button>

</div>;
}
export default SelectButtons;
