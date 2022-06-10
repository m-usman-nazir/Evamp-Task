import * as yup from "yup";

const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

export const userValidation = yup.object({
  name: yup.string("Please Enter your name").required('A name is required'),
  username: yup.string("Please Enter your user name").required('A username is required'),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    // .number()
    .string("Please Enter your Phone number")
    // .matches(phoneRegExp, "Enter valid phone number")
    // .typeError("That doesn't look like a phone number")
    .min(7, "Password should be of minimum 11 characters length")
    .max(11, "Password should be of maximum 11 characters length")
    .required("A phone number is required"),
});
