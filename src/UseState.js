import react, { useState } from "react";
function UseState() {
  let [name, setName] = useState("useState hook");
  const onClickHandler = () => {
    setName("useState Hook in React");
  };
  return (
    <>
      <h1>{name}</h1>
      <button onClick={onClickHandler}>Click Me</button>
    </>
  );
}
export default UseState;
