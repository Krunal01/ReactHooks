import react, { useState } from "react";
export default function UseState() {
  const info = [
    {
      id: 1,
      name: "kumar",
      age: 31,
    },
    {
      id: 2,
      name: "tech",
      age: 26,
    },
  ];
  const [array, setArray] = useState(info);
  const clearArray = () => {
    setArray([]);
  };
  return (
    <>
      <div>
        {array.map((e) => {
          return `Name is ${e.name} and Age is ${e.age} with Id ${e.id} `;
        })}
      </div>
      <button onClick={clearArray}>Clear</button>
    </>
  );
}
//   <h1>useState with Array</h1>

//  UseState;

// console.log(e.name, e.age, e.id);

// let [name, setName] = useState("useState hook");
// const onClickHandler = () => {
//   let val = name;
//   (val == "useState hook") ?
//     setName("useState Hook in React"):
//     setName("useState hook");

// };
// <h1>{name}</h1>
//       <button onClick={onClickHandler}>Click Me</button>
