import * as yup from "yup";
export const formValidationSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  middleName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  fatherName: yup.string().required("Required"),
  motherName: yup.string().required("Required"),
  gender: yup.string().required("Required"),
  category: yup.string().required("Required"),
  isDisability: yup.number().required("Required").default(0),
  dateOfBirth: yup.string().required("Required"),
  isAdhaar: yup.number().required("Required").default(1),
  adhaarNo: yup.string().when("isAdhaar", {
    is: 1,
    then: yup
      .string()
      .required("Required")
      .length(12, "Adhaar number must have 12 charactes"),
  }),
  address: yup.string().required("Required"),
  area: yup.string().required("Required"),
  city: yup.string().required("Required"),
  tehsil: yup.string().required("Required"),
  state: yup.string().required("Required"),
  pincode: yup
    .string()
    .required("Required")
    .length(6, "PINCODE must contain 6 characters"),
});
