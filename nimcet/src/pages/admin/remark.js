import {
  Container,
  Grid,
  Box,
  Typography,
  Avatar,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData1(slno, section, remarks) {
  return { slno, section, remarks };
}
function createData2(slno, documentname, isverify, remarks) {
  return { slno, documentname, isverify, remarks };
}

const rows1 = [
  createData1(1, "Overall Remarks", "PASSED"),
  createData1(2, "Overall Remarks", "PASSED"),
];
const rows2 = [
  createData2(1, "Aadhar Card", "NO", ""),
  createData2(1, "Class X Marksheet ", "NO", ""),
];

function Remark() {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid xs={12} md={4} lg={6} item>
          <Box>
            <Grid container direction="column">
              <Grid item>
                <Box sx={{ backgroundColor: "#2196f3", padding: "12px" }}>
                  <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justifyContent={"space-around"}
                    direction="row"
                  >
                    <Grid xs={10} item>
                      <Typography
                        color={"#fff"}
                        variant="h5"
                        display={"flex"}
                        justifyContent={"center"}
                      >
                        Application Form Remarks
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Sl No</StyledTableCell>
              <StyledTableCell align="center">Section</StyledTableCell>
              <StyledTableCell align="center">Remarks</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.slno}
                </StyledTableCell>
                <StyledTableCell align="center">{row.section}</StyledTableCell>
                <StyledTableCell align="center">{row.remarks}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Grid
        container
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid xs={12} md={4} lg={6} item>
          <Box>
            <Grid container direction="column">
              <Grid item>
                <Box sx={{ backgroundColor: "#2196f3", padding: "12px" }}>
                  <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justifyContent={"space-around"}
                    direction="row"
                  >
                    <Grid xs={10} item>
                      <Typography
                        color={"#fff"}
                        variant="h5"
                        display={"flex"}
                        justifyContent={"center"}
                      >
                        Uploaded Document Remarks
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Sl No</StyledTableCell>
              <StyledTableCell align="center">Document Name</StyledTableCell>
              <StyledTableCell align="center">Is Verified ?</StyledTableCell>
              <StyledTableCell align="center">Remarks (if any)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.slno}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.documentname}
                </StyledTableCell>
                <StyledTableCell align="center">{row.isverify}</StyledTableCell>
                <StyledTableCell align="center">{row.remarks}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="noted">
        <h3 color="red"> NOTE- </h3>
        <h4>
          {" "}
          Please check all remarks again. If you wany to modify, close the
          window and re-edit. Once you click on Submit Button Application will
          be locked.
        </h4>
      </div>
      <div className="noted2" align="center">
        <h1> Are You Sure ?</h1>

        <Button variant="contained">Submit</Button>
        <Button variant="outlined">Cancel</Button>
      </div>
    </Container>
  );
}

export default Remark;
