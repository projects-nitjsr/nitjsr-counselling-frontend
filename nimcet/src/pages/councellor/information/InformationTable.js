import React, { useState } from "react";
import {
  Paper,
  Container,
  Typography,
  Avatar,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Table,
  TableHead,
  Button,
  Checkbox,
  TextField,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import img from "./itachi.jpg";

const InformationTable = () => {
  const [isAdmitChecked, setIsAdmitChecked] = useState(false);
  const [isRankChecked, setIsRankChecked] = useState(false);
  const [isChoiceChecked, setIsChoiceChecked] = useState(false);
  const [isFeeChecked, setIsFeeChecked] = useState(false);
  const [admitRemarks, setAdmitRemarks] = useState("");
  const [rankRemarks, setRankRemarks] = useState("");
  const [choiceRemarks, setChoiceRemarks] = useState("");
  const [feeRemarks, setFeeRemarks] = useState("");

  return (
    <Container sx={{ marginTop: "2rem" }}>
      <Paper sx={{ border: "1px solid black" }}>
        <div
          className="heading"
          style={{
            backgroundColor: "#1976d2",
            color: "#fff",
            padding: "5px",
            textAlign: "center",
          }}
        >
          <Typography>Candidate Information</Typography>
        </div>
        <div className="student-info" style={{ margin: "10px 0" }}>
          <div
            className="img-section"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Avatar
              variant="square"
              src={img}
              sx={{
                width: "10rem",
                height: "10rem",
                aspectRatio: "1",
                border: "1px dashed black",
                padding: "5px",
              }}
            />

            <Avatar
              variant="square"
              src={img}
              sx={{
                width: "10rem",
                height: "3rem",
                border: "1px dashed black",
                padding: "5px",
              }}
            />
          </div>
          <div
            className="info-table"
            style={{
              margin: "10px 0",
              padding: "10px 5px",
              overflowX: "hidden",
            }}
          >
            <TableContainer
              component={Paper}
              sx={{
                padding: "10px 5px",
                minWidth: "100%",
              }}
            >
              <Table
                sx={{
                  border: "1px solid black",
                  padding: "10px 10px",
                }}
              >
                <TableBody>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid black" }}
                    >
                      Full Name
                    </TableCell>
                    <TableCell align="center">John Doe</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      sx={{ borderRight: "1px solid black" }}
                    >
                      Hall Ticket Number
                    </TableCell>
                    <TableCell align="center">123456</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      sx={{ borderRight: "1px solid black" }}
                    >
                      All India Rank
                    </TableCell>
                    <TableCell align="center">1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      sx={{ borderRight: "1px solid black" }}
                    >
                      Alloted Institute
                    </TableCell>
                    <TableCell align="center">Nit Jsr</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      sx={{ borderRight: "1px solid black" }}
                    >
                      Alloted Quota
                    </TableCell>
                    <TableCell align="center">Open</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <div
              className="notice"
              style={{
                textAlign: "center",
                padding: "10px 10px",
                border: "1px solid black",
              }}
            >
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                NOTE
              </Typography>
              <Typography variant="subtitle2">
                Please check all the documents carefully. Approve only if the
                documents are authentic. Remark column must be filled in case of
                disapproving document.
              </Typography>
            </div>
            <div
              className="documents-table"
              style={{
                margin: "5px 0",
                border: "1px solid black",
                textAlign: "center",
              }}
            >
              <TableContainer
                component={Paper}
                sx={{
                  padding: "10px 5px",
                  minWidth: "100%",
                }}
              >
                <Table>
                  <TableHead sx={{ backgroundColor: "primary" }}>
                    <TableRow>
                      <TableCell align="center">Documents</TableCell>
                      <TableCell align="center">
                        <CheckBox sx={{ marginBottom: "-5px" }} />
                        Approve
                      </TableCell>
                      <TableCell align="center" colSpan={3}>
                        Remarks
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        align="center"
                        sx={{ borderRight: "1px solid black" }}
                      >
                        <Button variant="contained">Admit Card</Button>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ borderRight: "1px solid black" }}
                      >
                        <Checkbox
                          onChange={() => {
                            setIsAdmitChecked(!isAdmitChecked);
                          }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          name="admit_remarks"
                          multiline={true}
                          maxRows={5}
                          sx={{ width: "100%" }}
                          onChange={(e) => {
                            setAdmitRemarks(e.target.value);
                          }}
                          value={admitRemarks}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        align="center"
                        sx={{ borderRight: "1px solid black" }}
                      >
                        <Button variant="contained">Rank Card</Button>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ borderRight: "1px solid black" }}
                      >
                        <Checkbox
                          onChange={() => {
                            setIsRankChecked(!isRankChecked);
                          }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          name="rank_remarks"
                          multiline={true}
                          maxRows={5}
                          sx={{ width: "100%" }}
                          onChange={(e) => {
                            setRankRemarks(e.target.value);
                          }}
                          value={rankRemarks}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        align="center"
                        sx={{ borderRight: "1px solid black" }}
                      >
                        <Button variant="contained">Choice Filling</Button>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ borderRight: "1px solid black" }}
                      >
                        <Checkbox
                          onChange={() => {
                            setIsChoiceChecked(!isChoiceChecked);
                          }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          name="choice_remarks"
                          multiline={true}
                          maxRows={5}
                          sx={{ width: "100%" }}
                          onChange={(e) => {
                            setChoiceRemarks(e.target.value);
                          }}
                          value={choiceRemarks}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        align="center"
                        sx={{ borderRight: "1px solid black" }}
                      >
                        <Button variant="contained">Fee Receipt</Button>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ borderRight: "1px solid black" }}
                      >
                        <Checkbox
                          onChange={() => {
                            setIsFeeChecked(!isFeeChecked);
                          }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          name="fee_remarks"
                          multiline={true}
                          maxRows={5}
                          sx={{ width: "100%" }}
                          onChange={(e) => {
                            setFeeRemarks(e.target.value);
                          }}
                          value={feeRemarks}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Button variant="contained" sx={{ margin: "10px 0" }}>
                View Application Form
              </Button>
            </div>
          </div>
        </div>
      </Paper>
    </Container>
  );
};

export default InformationTable;
