import * as Yup from "yup";
import NIM from "../../../lib/global";

/**
 * @description validation schema for signup
 */
export const signupValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Please Enter your password")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase character")
    .matches(/[A-Z]/, "Password must contain at least one uppercase character")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[$&+,:;=?@#|'<>.^*()%!-]/,
      "Password must contain at least one special character"
    ),
  confirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

/**
 *
 * @description signup api call
 * @param {*} param0
 * @returns
 */
export const SignUpAPIcall = ({ password, token }) => {
  return new Promise((resolve, reject) => {
    try {
      const resObj = {
        data: [],
        error: [],
        message: [],
      };
      NIM.http(NIM.env.backendUrl + "/auth/student/signup", "POST", {
        password,
        token,
      })
        .then((res) => {
          const { message, success } = res.data;
          if (success) {
            resObj.message.push(message);
          } else {
            resObj.error.push("Something went wrong");
          }
        })
        .catch((err) => {
          // console.log(err.response.data);
          if (err.response?.data?.success === false) {
            resObj.error.push(err.response.data.message);
          } else {
            resObj.error.push("Something went wrong");
          }
        })
        .finally(() => {
          resolve(resObj);
          return;
        });
    } catch (error) {
      reject(error);
    }
  });
};
