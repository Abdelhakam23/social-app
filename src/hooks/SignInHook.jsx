import { useContext } from "react";
import { AuthContext } from "../Context/Auth.context";
import { useNavigate } from "react-router";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import { useFormik } from "formik";
import axios from "axios";


export function useSignIn() {
      const { token, setToken } = useContext(AuthContext);

  const passwordRegex = RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$",
  );

  const navigate = useNavigate();

  const signInSchema = Yup.object({
    email: Yup.string().required("email is required").email("Invalid Email"),
    password: Yup.string()
      .required("password is required")
      .matches(
        passwordRegex,
        "Invalid Password  Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character ",
      ),
  });

  async function handleSubmit(values) {
    try {
      const options = {
        url: "https://route-posts.routemisr.com/users/signin",
        method: "POST",
        data: values,
      };

      const { data } = await axios.request(options);

      if (data.success) {
          setToken(data.data.token);
          localStorage.setItem('token', data.data.token);
        toast.success("Welcome Back");

        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.log(error.response);

      if (error.response.data.errors === "incorrect email or password") {
        toast.error("incorrect email or password");
      }
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: handleSubmit,
  });
    
    
    return {
        token,
        formik
    }

}