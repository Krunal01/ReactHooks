import react, { useState } from "react";
function UseState() {
  let [name, setName] = useState("useState hook");
  const onClickHandler = () => {
    let val = name;
    (val == "useState hook") ?
      setName("useState Hook in React"):
      setName("useState hook");
    
  };
  return (
    <>
      <h1>{name}</h1>
      <button onClick={onClickHandler}>Click Me</button>
    </>
  );
}
export default UseState;
