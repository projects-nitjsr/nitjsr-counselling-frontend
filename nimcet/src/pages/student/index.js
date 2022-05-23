import { Toolbar, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";

function Student() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div>
      {isMobile ? <Navbar.Mobile /> : <Navbar.Desktop />}
      <div>
        <Toolbar />
        <Toolbar />
        {isMobile ? (
          <></>
        ) : (
          <>
            <br />
            <br />
          </>
        )}
      </div>
      <div id="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default Student;
