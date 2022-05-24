import { Toolbar, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

function HomeIndex() {
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
      <Footer />
    </div>
  );
}

export default HomeIndex;
