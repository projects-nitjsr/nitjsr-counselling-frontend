import { Toolbar, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/admin";

function Client() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div>
      {isMobile ? <Navbar.Mobile /> : <Navbar.Desktop />}
      <div>
        <Toolbar />
        <Toolbar />
      </div>
      <div id="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default Client;
