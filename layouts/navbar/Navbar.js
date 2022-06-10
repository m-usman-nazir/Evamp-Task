import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useStyles } from './styles';

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.navbar}>
        <Link href="/">
          <Typography variant="h3" className={classes.logo}>
            Users
          </Typography>
        </Link>

        <Box>
          <Link href="/">
            <Typography component="a" mr={5} className={classes.links}>
              Home
            </Typography>
          </Link>
          <Link href="/create">
            <Typography component="a" className={classes.links}>
              Create
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
