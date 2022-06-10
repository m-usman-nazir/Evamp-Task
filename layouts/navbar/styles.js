import { makeStyles } from "@mui/styles";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../styles/constants";

export const useStyles = makeStyles({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "8px 50px",
    boxShadow: "0 5px 2px -2px #dadada",
    borderBottom: "1px solid #eee",
    position: "fixed",
    backgroundColor: "#fff",
    opacity: "0.95",
    top: 0,
    zIndex:'10'
  },
  logo: {
    cursor: "pointer",
    color: PRIMARY_COLOR,
  },
  links: {
    color: SECONDARY_COLOR,
    fontWeight: '600 !important',
    "&:hover": {
      color: PRIMARY_COLOR,
      cursor: 'pointer',
    },
  },
});
