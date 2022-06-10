import React from "react";
import UsersTable from "../../layouts/users-table/index.js";
import { Box } from "@mui/material";

const HomePage = () => {

  return (
    <Box sx={{ mt: "30px" }}>
      <UsersTable />
    </Box>
  );
};

export default HomePage;
