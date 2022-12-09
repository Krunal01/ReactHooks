import react, { useState } from "react";
export default function UseState() {
  const [obj, setObj] = useState({ id: 1, name: "Kumar", age: 31 });
  const clearArray = () => {
    setObj({ ...obj, name: "Rana", age: 28 });
  };
  return (
    <>
      <div>Name is : {obj.name}</div>
      <div>Age is : {obj.age}</div>
      <button onClick={clearArray}>Change Name and Age</button>
    </>
  );
}
//   const info = [
//     {
//       id: 1,
//       name: "kumar",
//       age: 31,
//     },
//     {
//       id: 2,
//       name: "tech",
//       age: 26,
//     },
//   ];
{
  /* {array.map((e) => {
    return `Name is ${e.name} and Age is ${e.age} with Id ${e.id} `;
})} */
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
