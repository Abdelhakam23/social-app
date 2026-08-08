import { useContext } from "react";
import { AuthContext } from "../Context/Auth.context";
import { useNavigate } from "react-router";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import { useFormik } from "formik";
import axios from "axios";
import api from "../api/api";


export function useSignIn() {
      const { token, setToken,setUser } = useContext(AuthContext);

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
     
      const { data } = await api.post('users/signin',values);
      

      if (data.success) {
          setToken(data.data.token);
        localStorage.setItem('token', data.data.token);
        setUser(data.data.user);
        localStorage.setItem('user', JSON.stringify(data.data.user));
        
        toast.success("Welcome Back");

        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      if (error.response?.data?.errors === "incorrect email or password") {
        toast.error("incorrect email or password");
      } else {
        toast.error("Unable to sign in right now.");
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