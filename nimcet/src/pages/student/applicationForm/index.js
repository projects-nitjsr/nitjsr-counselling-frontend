import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ApplicationSectionWrapper from "../../../components/wrapper/applicationSection";
import { useFormik } from "formik";
import { formValidationSchema } from "./logic";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import states from "../../../assets/data/states.js";
import Footer from "../../../components/footer";

function ApplicationForm(props) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      fatherName: "",
      motherName: "",
      gender: "",
      category: "",
      isDisability: false,
      dateOfBirth: "",
      isAdhaar: true,
      adhaarNo: "",
      address: "",
      area: "",
      city: "",
      tehsil: "",
      state: "",
      pincode: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("submitting candidate data------->", values);
    },
  });
  return (
    <div id="application">
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ padding: "32px" }}>
          <Grid container direction="column">
            <Grid item>
              <ApplicationSectionWrapper name="General Details">
                <Box sx={{ padding: "16px" }}>
                  <Grid container direction={"column"} spacing={1}>
                    <Grid item>
                      <Grid container direction={"row"}>
                        <Grid xs={3} md={5} item>
                          <Typography>
                            First Name <span style={{ color: "red" }}>*</span>
                          </Typography>
                        </Grid>
                        <Grid xs={9} md={7} item>
                          <TextField
                            label="Enter your first name"
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={formik.errors.firstName?.length > 0}
                            helperText={formik.errors?.firstName}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction={"row"}>
                        <Grid xs={3} md={5} item>
                          <Typography>
                            Middle Name <span style={{ color: "red" }}>*</span>
                          </Typography>
                        </Grid>
                        <Grid xs={9} md={7} item>
                          <TextField
                            label="Enter your middle name"
                            name="middleName"
                            value={formik.values.middleName}
                            onChange={formik.handleChange}
                            error={formik.errors.middleName?.length > 0}
                            helperText={formik.errors?.middleName}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction={"row"}>
                        <Grid xs={3} md={5} item>
                          <Typography>
                            Last Name<span style={{ color: "red" }}>*</span>
                          </Typography>
                        </Grid>
                        <Grid xs={9} md={7} item>
                          <TextField
                            label="Enter your last name"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.errors.lastName?.length > 0}
                            helperText={formik.errors?.lastName}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction={"row"}>
                        <Grid xs={3} md={5} item>
                          <Typography>
                            Father's Name{" "}
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
                        </Grid>
                        <Grid xs={9} md={7} item>
                          <TextField
                            label="Enter your father's name"
                            name="fatherName"
                            value={formik.values.fatherName}
                            onChange={formik.handleChange}
                            error={formik.errors.fatherName?.length > 0}
                            helperText={formik.errors?.fatherName}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction={"row"}>
                        <Grid xs={3} md={5} item>
                          <Typography>
                            Mother's Name{" "}
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
                        </Grid>
                        <Grid xs={9} md={7} item>
                          <TextField
                            label="Enter your mother's name"
                            name="motherName"
                            value={formik.values.motherName}
                            onChange={formik.handleChange}
                            error={formik.errors.motherName?.length > 0}
                            helperText={formik.errors?.motherName}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction={"row"}>
                        <Grid xs={3} md={5} item>
                          <Typography>
                            Gender <span style={{ color: "red" }}>*</span>
                          </Typography>
                        </Grid>
                        <Grid xs={9} md={7} item>
                          <FormControl fullWidth>
                            <InputLabel id="gender-label">
                              Select your gender
                            </InputLabel>
                            <Select
                              label="Select your gender"
                              labelId="gender-label"
                              name="gender"
                              onChange={formik.handleChange}
                              value={formik.values.gender}
                              fullWidth
                            >
                              <MenuItem value="M">Male</MenuItem>
                              <MenuItem value="F">Female</MenuItem>
                              <MenuItem value="O">Others</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction={"row"}>
                        <Grid xs={3} md={5} item>
                          <Typography>
                            Category <span style={{ color: "red" }}>*</span>
                          </Typography>
                        </Grid>
                        <Grid xs={9} md={7} item>
                          <FormControl fullWidth>
                            <InputLabel id="category-label">
                              Select your category
                            </InputLabel>
                            <Select
                              label="Select your category"
                              labelId="category-label"
                              name="category"
                              onChange={formik.handleChange}
                              value={formik.values.category}
                              fullWidth
                            >
                              <MenuItem value="GN">General</MenuItem>
                              <MenuItem value="OB">OBC</MenuItem>
                              <MenuItem value="SC">SC</MenuItem>
                              <MenuItem value="ST">ST</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction={"row"}>
                        <Grid xs={3} md={5} item>
                          <Typography>
                            Person with disabilities{" "}
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
                        </Grid>
                        <Grid xs={9} md={7} item>
                          <FormControl fullWidth>
                            <InputLabel id="isDisability-label">
                              Select your choice
                            </InputLabel>
                            <Select
                              label="Select your isDisability"
                              labelId="isDisability-label"
                              name="isDisability"
                              onChange={formik.handleChange}
                              value={formik.values.isDisability}
                              fullWidth
                            >
                              <MenuItem value={0}>NO</MenuItem>
                              <MenuItem value={1}>YES</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Grid container direction={"row"}>
                          <Grid xs={3} md={5} item>
                            <Typography>
                              Date of Birth{" "}
                              <span style={{ color: "red" }}>*</span>
                            </Typography>
                          </Grid>
                          <Grid xs={9} md={7} item>
                            <DesktopDatePicker
                              name="dateOfBirth"
                              label="Date of birth"
                              inputFormat="dd/MM/yyyy"
                              value={formik.values.dateOfBirth}
                              onChange={(val) =>
                                formik.setFieldValue("dateOfBirth", val)
                              }
                              renderInput={(params) => (
                                <TextField {...params} fullWidth />
                              )}
                            />
                          </Grid>
                        </Grid>
                      </LocalizationProvider>
                    </Grid>
                    <Grid item>
                      <Grid container direction={"row"}>
                        <Grid xs={3} md={5} item>
                          <Typography>
                            Do you have adhaar card?{" "}
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
                        </Grid>
                        <Grid xs={9} md={7} item>
                          <FormControl fullWidth>
                            <InputLabel id="isAdhaar-label">
                              Select your choice
                            </InputLabel>
                            <Select
                              label="Select your choice"
                              labelId="isAdhaar-label"
                              name="isAdhaar"
                              onChange={formik.handleChange}
                              value={formik.values.isAdhaar}
                              fullWidth
                            >
                              <MenuItem value={0}>NO</MenuItem>
                              <MenuItem value={1}>YES</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction={"row"}>
                        <Grid xs={3} md={5} item>
                          <Typography>Adhaar Card No. </Typography>
                        </Grid>
                        <Grid xs={9} md={7} item>
                          <TextField
                            disabled={formik.values.isAdhaar === 0}
                            label="Enter your adhaar number"
                            name="adhaarNo"
                            value={formik.values.adhaarNo}
                            onChange={formik.handleChange}
                            error={formik.errors.adhaarNo?.length > 0}
                            helperText={formik.errors?.adhaarNo}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </ApplicationSectionWrapper>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box sx={{ padding: "32px" }}>
          <ApplicationSectionWrapper name={"Permanent Address"}>
            <Box sx={{ padding: "16px" }}>
              <Grid container spacing={1} direction="column">
                <Grid item>
                  <Grid container direction={"row"}>
                    <Grid xs={3} md={5} item>
                      <Typography>
                        Address <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </Grid>
                    <Grid xs={9} md={7} item>
                      <TextField
                        label="Enter your address"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        error={formik.errors.address?.length > 0}
                        helperText={formik.errors?.address}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction={"row"}>
                    <Grid xs={3} md={5} item>
                      <Typography>
                        Address <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </Grid>
                    <Grid xs={9} md={7} item>
                      <TextField
                        label="Enter your address"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        error={formik.errors.address?.length > 0}
                        helperText={formik.errors?.address}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction={"row"}>
                    <Grid xs={3} md={5} item>
                      <Typography>
                        Area <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </Grid>
                    <Grid xs={9} md={7} item>
                      <TextField
                        label="Enter your area/village"
                        name="area"
                        value={formik.values.area}
                        onChange={formik.handleChange}
                        error={formik.errors.area?.length > 0}
                        helperText={formik.errors?.area}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction={"row"}>
                    <Grid xs={3} md={5} item>
                      <Typography>
                        City <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </Grid>
                    <Grid xs={9} md={7} item>
                      <TextField
                        label="Enter your city/district"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        error={formik.errors.city?.length > 0}
                        helperText={formik.errors?.city}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction={"row"}>
                    <Grid xs={3} md={5} item>
                      <Typography>
                        Tehsil <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </Grid>
                    <Grid xs={9} md={7} item>
                      <TextField
                        label="Enter your tehsil"
                        name="tehsil"
                        value={formik.values.tehsil}
                        onChange={formik.handleChange}
                        error={formik.errors.tehsil?.length > 0}
                        helperText={formik.errors?.tehsil}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction={"row"}>
                    <Grid xs={3} md={5} item>
                      <Typography>
                        State <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </Grid>
                    <Grid xs={9} md={7} item>
                      <FormControl fullWidth>
                        <InputLabel id="state-label">
                          Select your state
                        </InputLabel>
                        <Select
                          label="Select your choice"
                          labelId="state-label"
                          name="state"
                          onChange={formik.handleChange}
                          value={formik.values.state}
                          fullWidth
                        >
                          {states.map((state) => (
                            <MenuItem key={state.key} value={state.key}>
                              {state.text}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction={"row"}>
                    <Grid xs={3} md={5} item>
                      <Typography>
                        PINCODE <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </Grid>
                    <Grid xs={9} md={7} item>
                      <TextField
                        label="Enter your PINCODE"
                        name="pincode"
                        value={formik.values.pincode}
                        onChange={formik.handleChange}
                        error={formik.errors.pincode?.length > 0}
                        helperText={formik.errors?.pincode}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </ApplicationSectionWrapper>
        </Box>
        <Divider />
        <br />
        <Grid container direction={"row"} justifyContent={"center"}>
          <Grid xs={3}>
            <Button fullWidth type="submit" color="success" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <br />
      <Footer />
    </div>
  );
}

export default ApplicationForm;
