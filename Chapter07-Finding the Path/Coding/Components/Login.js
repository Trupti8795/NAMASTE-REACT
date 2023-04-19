import React from "react";
import {Formik} from  "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const  initialValues = {
        email: "",
        password: ""
    }

    const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email is a required field")
          .email("Invalid email format"),
        password: Yup.string()
          .required("Password is a required field")
          .min(8, "Password must be at least 8 characters"),
      });

      const onSubmit = (values) => {
            //alert(JSON.stringify(values));
            // setTimeout for navigate from login page to home page
            setTimeout(() => {
                navigate("/")
            }, 0);
      }
    return (
        <>
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
                {
                    ({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit
                    }) => (
                    <div className="login-container">
                        <div className="login-form">
                            <form onSubmit={handleSubmit}>
                                <span>Login</span>
                                <input type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder = "enter Email id/Username"
                                className="form-control inp_text"
                                id="email"/>
                    {/* If validation is not passed show errors */}
                    <p className="error">
                    {errors.email && touched.email && errors.email}
                    </p>
                    {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}

                    <input type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className="form-control"
                        placeholder = "enter Password"/>
                    {/* If validation is not passed show errors */}
                    <p className="error">
                    {errors.password && touched.password && errors.password}
                    </p>
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                )}
            </Formik>
        </>
       
    )
}

export default Login;
