import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import React, { useEffect } from "react";
import theme from "../src/theme";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import { store } from "../src/redux/store";
const Navbar = dynamic(() => import("../layouts/navbar/Navbar"), { ssr: false });
import dynamic from "next/dynamic";
import GetDataBase from "../getDataBase";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    console.log('appjs run')
  })

  return (
    <>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/logo/sidebar-logo.svg"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <GetDataBase />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
