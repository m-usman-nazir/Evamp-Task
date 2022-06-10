import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Paper, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useStyles } from "./styles";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import { PRIMARY_COLOR } from "../../styles/constants";
import { deleteUser } from "../../pages/home/users.slice";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { CrudBackdrop } from "../../components/index";

const UsersTable = () => {
  const { users } = useSelector((state) => state.usersList);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const showToast = () => {
    toast.error("User Deleted");
  };

  useEffect(() => {
    if (users && Object.keys(users).length > 0) {
      setOpen(false);
    }
  }, [users]);

  return (
    <React.Fragment>
      <ToastContainer autoClose="2000" />

      <CrudBackdrop open={open} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ fontSize: "50px" }}>
              <TableCell className={classes.tableHead}>ID</TableCell>
              <TableCell className={classes.tableHead}>Name</TableCell>
              <TableCell className={classes.tableHead}>Username</TableCell>
              <TableCell className={classes.tableHead}>email</TableCell>
              <TableCell className={classes.tableHead}>Phone</TableCell>
              <TableCell className={classes.tableHead}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && Object.keys(users).length > 0 &&
              users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Box className={classes.actions}>
                      <Link href={`/users/${user.id}`}>
                        <IconButton
                          aria-label="delete"
                          sx={{ mr: 1, color: PRIMARY_COLOR }}
                        >
                          <EditIcon />
                        </IconButton>
                      </Link>
                      <IconButton
                        aria-label="delete"
                        sx={{ ml: 1, color: "red" }}
                        onClick={() => {
                          dispatch(deleteUser(user.id));
                          showToast();
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default UsersTable;
