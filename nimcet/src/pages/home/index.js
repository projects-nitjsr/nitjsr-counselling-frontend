import { Toolbar, useMediaQuery } from "@mui/material";
import Navbar from "../../components/navbar";

function Home() {
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
      </div>
    </div>
  );
}

export default Home;
