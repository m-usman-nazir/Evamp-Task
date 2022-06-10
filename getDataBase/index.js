import React from 'react'
const axios = require("axios").default;
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../pages/home/users.slice";

const GetDataBase = () => {
    const baseURL = process.env.NEXT_APP_BASE_API_URL;
    const dispatch = useDispatch();
  
    useEffect(() => {
      const getUsersList = async () => {
        try {
          const response = await axios.get(`${baseURL}/users`);
          const { data } = response;
          dispatch(setUsers(data));
        } catch (error) {
          console.error(error);
        }
      };
  
      getUsersList();
    }, []);

  return <></>
}

export default GetDataBase