import * as Yup from "yup";

export const registrationValidationSchema = Yup.object().shape({
  regn: Yup.string().required("Required"),
});
