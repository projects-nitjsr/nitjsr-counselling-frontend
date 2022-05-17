import {
  Button,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import NimLink, { StyledLink } from "../../components/link";
import Navbar from "../../components/navbar";
import { MdOutlineLabelImportant, MdHelp, MdCheckCircle } from "react-icons/md";
import Footer from "../../components/footer";
import nitImg from "../../assets/data/nitImg";

function Home() {
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
      <br />
      <div id="content-wrapper">
        <Box sx={{ paddingInline: `${inPad}px` }}>
          <Grid container justifyContent={"space-between"} direction={"row"}>
            <Grid xs={12} md={6} item>
              <Grid container direction={"column"}>
                <Grid item>
                  <Typography paddingBottom={1} variant="h4">
                    Who are we?
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography align="justify">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.....{" "}
                    <NimLink to="#">View More</NimLink>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} md={5} item>
              <Box>
                <Grid container direction="column">
                  <Grid item>
                    <Typography
                      color="#fff"
                      fontSize={18}
                      padding={2}
                      bgcolor={"#2196f3"}
                    >
                      Announcements
                    </Typography>
                  </Grid>
                  {[1, 2, 3, 4, 5, 6].map((it) => (
                    <Grid key={it} item>
                      <Typography padding={1}>Notice {it}</Typography>
                    </Grid>
                  ))}
                  <Grid item>
                    <Grid container direction="row-reverse">
                      <Grid item>
                        <Button color="success" variant="contained">
                          Show More
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <br />
        </Box>
        <br />
        <Box
          sx={{
            padding: `${inPad / 2}px`,
            paddingInline: `${inPad}px`,
            backgroundColor: "#ededed",
          }}
        >
          <Grid container spacing={2} direction="row">
            <Grid xs={12} md={4} item>
              <Grid container spacing={1} direction="column">
                <Grid item>
                  <Grid
                    container
                    spacing={1}
                    alignItems={"center"}
                    direction="row"
                  >
                    <Grid item>
                      <MdCheckCircle size={"1.5rem"} color="#000" />
                    </Grid>
                    <Grid item>
                      <Typography fontSize={"1.5rem"}>
                        IMPORTANT KEY POINTS
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    spacing={1}
                    alignItems={"center"}
                    direction={"row"}
                  >
                    {[1, 2, 3].map((it) => (
                      <Grid xs={12} md={4} key={it} item>
                        <StyledLink
                          to="/admin"
                          text={`IMP KEY ${it}`}
                          sx={{ color: "#000", fontSize: "17px" }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} md={8} item>
              <Grid container spacing={1} direction="column">
                <Grid item>
                  <Grid
                    container
                    spacing={1}
                    alignItems={"center"}
                    direction="row"
                  >
                    <Grid item>
                      <MdHelp size={"1.5rem"} color="#000" />
                    </Grid>
                    <Grid item>
                      <Typography fontSize={"1.5rem"}>
                        ADMISSION PROCESS
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    spacing={1}
                    alignItems={"center"}
                    direction={"row"}
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((it) => (
                      <Grid xs={12} md={4} key={it} item>
                        <StyledLink
                          to="/admin"
                          text={`SERVICE ${it}`}
                          sx={{ color: "#000", fontSize: "17px" }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ffc107",
            padding: `${inPad / 2}px`,
            paddingInline: `${inPad}px`,
          }}
        >
          <Grid container spacing={2} direction="row">
            <Grid xs={12} md={6} item>
              <Grid container spacing={1} direction="column">
                <Grid item>
                  <Grid
                    container
                    spacing={1}
                    alignItems={"center"}
                    direction="row"
                  >
                    <Grid item>
                      <MdOutlineLabelImportant size={"1.5rem"} color="#000" />
                    </Grid>
                    <Grid item>
                      <Typography fontSize={"1.5rem"}>
                        IMPORTANT LINKS
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    spacing={1}
                    alignItems={"center"}
                    direction={"row"}
                  >
                    {[1, 2, 3, 4, 5, 6].map((it) => (
                      <Grid xs={12} md={4} key={it} item>
                        <StyledLink
                          to="/admin"
                          text={`IMP LINK ${it}`}
                          sx={{ color: "#000", fontSize: "17px" }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} md={6} item>
              <Grid container spacing={1} direction="column">
                <Grid item>
                  <Grid
                    container
                    spacing={1}
                    alignItems={"center"}
                    direction="row"
                  >
                    <Grid item>
                      <MdHelp size={"1.5rem"} color="#000" />
                    </Grid>
                    <Grid item>
                      <Typography fontSize={"1.5rem"}>
                        MAY I HELP YOU?
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    spacing={1}
                    alignItems={"center"}
                    direction={"row"}
                  >
                    {[1, 2].map((it) => (
                      <Grid xs={12} md={4} key={it} item>
                        <StyledLink
                          to="/admin"
                          text={`HELPDESK ${it}`}
                          sx={{ color: "#000", fontSize: "17px" }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        {!isMobile && (
          <>
            <br />
            <br />
            <Typography align="center" variant="h4">
              Participating Institutes
            </Typography>
            <br/>
            <Grid container justifyContent={"space-around"} direction="row">
              {nitImg.map((it) => (
                <Grid item>
                  <a href={it.link} target="_blank" rel="noreferrer">
                    <img
                      height="96px"
                      width="96px"
                      src={it.img}
                      alt={it.link}
                    />
                  </a>
                </Grid>
              ))}
            </Grid>
            <br />
          </>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
