import React, { useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { CrudTextField, CrudButton } from "../../components";
import { useStyles } from "../../styles/styles";
import { addNewUser } from "../home/users.slice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Create = () => {
  const { users } = useSelector((state) => state.usersList);
  const classes = useStyles();

  const [name, setName] = useState("");
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleValidation = () => {
    if (name === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (username === "") {
      setUserNameError(true);
    } else {
      setUserNameError(false);
    }
    if (email === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!phone) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    if (name === "" || username === "" || email === "" || !phone) {
      return false;
    }
    return true;
  };

  const checkEmailExist = (email) => {
    let flag = users.find((u) => u.email == email);
    if (flag) {
      setEmailExist(true);
      return false;
    }
    return true;
  };

  const handleAddUser = (e) => {
    setEmailExist(false);
    e.preventDefault();
    if (handleValidation()) {
      if (checkEmailExist(email)) {
        const user = { name, username, email, phone };
        dispatch(addNewUser(user));
        toast.success("New User Added");
        setTimeout(() => {
          router.push("/");
        }, 2500);
      }
    }
  };

  return (
    <>
      <ToastContainer autoClose="2000" />

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Paper
          sx={{
            maxWidth: "400px",
            margin: "120px auto",
            textAlign: "center",
            padding: "40px 0",
          }}
        >
          <Typography variant="h5" mb={2}>
            Add a new User
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            onSubmit={(e) => handleAddUser(e)}
            autoComplete="off"
          >
            <CrudTextField
              type="text"
              label="Name"
              value={name}
              onchange={setName}
            />
            {nameError && (
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "red",
                  textAlign: "center",
                  width: "auto !important",
                }}
              >
                Please enter a name
              </Typography>
            )}

            <CrudTextField
              type="text"
              label="username"
              value={username}
              onchange={setusername}
            />
            {userNameError && (
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "red",
                  textAlign: "center",
                  width: "auto !important",
                }}
              >
                Please enter a username
              </Typography>
            )}
            <CrudTextField
              type="email"
              label="Email"
              value={email}
              onchange={setEmail}
            />
            {emailError && (
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "red",
                  textAlign: "center",
                  width: "auto !important",
                }}
              >
                Please enter an email
              </Typography>
            )}
            {emailExist && (
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "red",
                  textAlign: "center",
                  width: "auto !important",
                }}
              >
                Email Already Exists
              </Typography>
            )}
            <CrudTextField
              type="text"
              label="Phone"
              value={phone}
              onchange={setPhone}
            />
            {phoneError && (
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "red",
                  textAlign: "center",
                  width: "auto !important",
                }}
              >
                Please enter a phone number
              </Typography>
            )}
            <CrudButton
              variant="contained"
              type="submit"
              sx={{ marginTop: "24px" }}
              title="Submit"
            />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Create;
