import React from "react";
import { useFormik } from "formik";
import "./Formik.css";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
function Formiks() {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      name: Yup.string().min(2).max(20).required("Please Enter Your Name"),
      email: Yup.string().email().required("Please Enter Your Email"),
      password: Yup.string()
        .min(6)
        .max(12)
        .required("Please Enter Your Password"),
      confirm_password: Yup.string()
        .min(6)
        .max(12)
        .oneOf([Yup.ref("password"), null], "password must match")
        .required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      console.log("====================================");
      console.log(values);
      console.log("====================================");
    },
  });
  console.log("====================================");
  console.log(errors);
  console.log("====================================");
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name : </label>
          <div className="nameis">
            <input
              type="text"
              placeholder="enter your name"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.touched && errors.name ? <p>{errors.name}</p> : null}
          </div>
          <label htmlFor="email">Email : </label>
          <div className="emailis">
            <input
              type="email"
              placeholder="enter your email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.touched && errors.email ? <p>{errors.email}</p> : null}
          </div>
          <label htmlFor="password">Password : </label>
          <div className="passwordis">
            <input
              type="password"
              placeholder="enter your password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.touched && errors.password ? (
              <p>{errors.password}</p>
            ) : null}
          </div>
          <label htmlFor="confirm_password">Confirm Password : </label>
          <div className="confirmis">
            <input
              type="password"
              placeholder="confirm your password"
              name="confirm_password"
              id="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
            />
            {errors.touched && errors.confirm_password ? (
              <p>{errors.confirm_password}</p>
            ) : null}
          </div>
          <button type="submit">Registration</button>
        </form>
      </div>
    </>
  );
}

export default Formiks;
