import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { userValidation } from "../../utils/validations";
import { Box, Typography, Paper } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { CrudTextField, CrudButton } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../home/users.slice";
import { useEffect } from "react";

const EditUser = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.usersList);
  const [currUser, setCurrUser] = useState();

  useEffect(() => {
    if (router.isReady && Object.keys(users).length > 0) {
      const user = users.find((u) => u.id == id);
      setCurrUser(user);
    }
  }, [router.isReady, users]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: currUser?.name || "",
      username: currUser?.username || "",
      email: currUser?.email || "",
      phone: currUser?.phone || "",
    },
    validationSchema: userValidation,
    onSubmit: (values) => {
      dispatch(editUser({ ...values, id: +id }));
      toast.success("User updated");
      setTimeout(() => {
        router.push("/");
      }, 2500);
    },
  });

  return (
    <React.Fragment>
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
            Edit User
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            onSubmit={formik.handleSubmit}
            autoComplete="off"
          >
            <CrudTextField
              formik={true}
              type="text"
              id="name"
              name="name"
              label="name"
              value={formik.values.name}
              onchange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <CrudTextField
              formik={true}
              type="text"
              id="username"
              name="username"
              label="username"
              value={formik.values.username}
              onchange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <CrudTextField
              formik={true}
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onchange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <CrudTextField
              formik={true}
              id="phone"
              name="phone"
              label="Phone"
              type="text"
              value={formik.values.phone}
              onchange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <CrudButton
              variant="contained"
              type="submit"
              sx={{ marginTop: "24px" }}
              title="Submit"
            />
          </Box>
        </Paper>
      </Box>
    </React.Fragment>
  );
};

export default EditUser;
