import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as Yup from 'yup';
import api from "../api/api";


export function useSignUp() {
      const passwordRegex = RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$",
  );

  const navigate = useNavigate();

  const signUpSchema = Yup.object({
    name: Yup.string()
      .required("name is required")
      .min(3, "Too Short !")
      .max(50, "Too Long !"),
    email: Yup.string().required("email is required").email("Invalid Email"),
    password: Yup.string()
      .required("password is required")
      .matches(
        passwordRegex,
        "Invalid Password  Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character ",
      ),
    rePassword: Yup.string()
      .required("please confirm password")
      .oneOf([Yup.ref("password")], "passwords must matchs "),
    dateOfBirth: Yup.string().required("please enter the date of birth"),
    gender: Yup.string()
      .required("please select a gender ")
      .oneOf(["male", "female"], "please select a valid gender"),
  });




  async function handleSubmit(values) {

    try {
  

    const { data } = await api.post('/users/signup',values);

    if (data.success) {
      toast.success("Account Created Successfully");

      setTimeout(() => {
        navigate("/signin");
        
      }, 5000);
    }
    } catch (error) {
 
      if (error.response.data.errors === 'user already exists.') {
        formik.setFieldError('email',"Email is already Exist")
      }
      
      
    }
    
   
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: "",
    },
    validationSchema: signUpSchema,
    onSubmit: handleSubmit,
  });
    
    return {formik}
}