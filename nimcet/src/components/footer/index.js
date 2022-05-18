import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { StyledLink } from "../link";

function Footer(props) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [inPad, setInPad] = useState(64);
  useEffect(() => {
    if (isMobile) {
      setInPad(8);
    } else {
      setInPad(64);
    }
  }, [isMobile]);
  return (
    <Box sx={{ backgroundColor: "#022257", padding: `${inPad}px` }}>
      <Grid container direction="column">
        <Grid item>
          <Typography align="center" color="#fff">
            Developed and maintatained by{" "}
            <a
              style={{ color: "#fff" }}
              target="_blank"
              rel="noreferrer"
              href="https://nitjsr.ac.in"
            >
              National Institute of Technology, Jamshedpur
            </a>
          </Typography>
        </Grid>
        <Grid item>
          <br />
        </Grid>
        <Grid item>
          <Grid container direction="row">
            <Grid xs={4} md={2} item>
              <StyledLink
                to="/admin"
                sx={{ color: "#fff", fontSize: "12px" }}
                text="FAQs"
              />
            </Grid>
            <Grid xs={4} md={2} item>
              <StyledLink
                to="/admin"
                sx={{ color: "#fff", fontSize: "12px" }}
                text="Copyright"
              />
            </Grid>
            <Grid xs={4} md={2} item>
              <StyledLink
                to="/admin"
                sx={{ color: "#fff", fontSize: "12px" }}
                text="Terms and conditions"
              />
            </Grid>
            <Grid xs={4} md={2} item>
              <StyledLink
                to="/admin"
                sx={{ color: "#fff", fontSize: "12px" }}
                text="Privacy policy"
              />
            </Grid>
            <Grid xs={4} md={2} item>
              <StyledLink
                to="/admin"
                sx={{ color: "#fff", fontSize: "12px" }}
                text="Help"
              />
            </Grid>
            <Grid xs={4} md={2} item>
              <StyledLink
                to="/admin"
                sx={{ color: "#fff", fontSize: "12px" }}
                text="Contact us"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
