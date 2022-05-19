import "./style.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { radioClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import img from "./user.png";

function createData(field, data) {
	return { field, data };
}

const rows = [
	createData("Full Name", "ganesh"),
	createData("Email", "shishverma@nitrr.ac.in"),
	createData(
		"Organsation",
		"Motilal Nehru National Institute of Technology, Allahbad"
	),
	createData("Current IP", "100.5.1.1"),
];

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "fff" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	// color: theme.palette.text.secondary,
	border: "1px solid #757575",
	borderRadius: "0px",
	boxShadow: "0px",
}));

const Fig2 = () => {
	return (
		<div className="">
			<div className="f2-outline-GD">
				<div className="f2-title">General Details</div>
				<div className="f2-table">
					<TableContainer component={Paper} className="f2-table-interior">
						<Table
							sx={{ minWidth: 200 }}
							size="small"
							aria-label="a dense table"
						>
							<TableBody>
								{rows.map((row) => (
									<TableRow
										key={row.field}
										sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
									>
										<TableCell
											component="th"
											scope="row"
											className="f2-table-field"
										>
											<strong>{row.field}</strong>
										</TableCell>
										<TableCell className="f2-table-field">{row.data}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
				<br />
				<br />
				<div className="f2-buttons">
					<Stack direction="row" spacing={2}>
						<button type="button" className="change-password-btn">
							Change Password
						</button>
						<button type="button" className="sign-out-btn">
							Sign Out
						</button>
					</Stack>
				</div>
				<br />
				<br />
			</div>

			<div className="f2-outline-D">
				<div className="f2-title" style={{ backgroundColor: "green" }}>
					Dashboard
				</div>
				<br />
				<br />
				<div className="f2-cells">
					<Box sx={{ flexGrow: 1 }}>
						<Grid container spacing={3}>
							<Grid item xs={12} md={4}>
								<Item>
									<img src={img} alt="img" className="f2-img" />
									<p className="cell-title">Employee Admin</p>
								</Item>
							</Grid>
							<Grid item xs={12} md={4}>
								<Item>
									<img src={img} alt="img" className="f2-img" />
									<p className="cell-title">Counselling</p>
								</Item>
							</Grid>
							<Grid item xs={12} md={4}>
								<Item>
									<img src={img} alt="img" className="f2-img" />
									<p className="cell-title">Seat Admission Report</p>
								</Item>
							</Grid>
						</Grid>
					</Box>
				</div>
				<br />
				<br />
			</div>
		</div>
	);
};

export default Fig2;
