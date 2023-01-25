import React from "react";
import { useFormik } from "formik";
import "./Formik.css";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
function Formiks() {
  useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log("====================================");
      console.log(values);
      console.log("====================================");
    },
  });
  return (
    <>
      <div className="container">
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            id="name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="enter your name"
            name="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="enter your name"
            name="password"
            id="password"
          />
          <label htmlFor="Confirm_password">Confirm Password</label>
          <input
            type="password"
            placeholder="enter your name"
            name="Confirm_password"
            id="Confirm_password"
          />
        </form>
      </div>
    </>
  );
}

export default Formiks;
