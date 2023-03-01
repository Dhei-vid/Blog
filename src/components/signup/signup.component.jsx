import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../button/button.component";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email!").required("Email is Required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required("Password is Required"),
  confirmpassword: Yup.string().when("password", {
    is: (val) => (val && val.length ? true : false),
    then: Yup.string().oneOf([Yup.ref("password")], "Password does not match"),
  }),
});

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validateOnBlur: true,
    validationSchema: { SignUpSchema },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log("Errors: ", formik.errors);

  return (
    <div className="m-16">
      <div className="">
        <h2 className="text-3xl text-gray-900"> Sign up </h2>
      </div>

      <form className="grid grid-row-4" onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <label htmlFor="email"> Email Address</label>
        <input
          id="email"
          className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="password"> Password </label>
        <input
          id="password"
          className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <label htmlFor="password"> Confirm Password </label>
        <input
          id="confirmpassword"
          className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="confirmpassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmpassword}
        />
        <Button buttonName={`Sign Up`} />
      </form>
    </div>
  );
};

export default SignUp;
