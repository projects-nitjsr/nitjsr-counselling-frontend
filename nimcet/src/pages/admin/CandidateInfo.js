import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import Stepperr from "./Stepperr";
import PdfViewer from "./PdfViewer";
import Footer from "../../components/footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function CandidateInfo() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <Stepperr />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <PdfViewer />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <br />
      <Footer />
    </div>
  );
}

export default CandidateInfo;
