import * as Yup from "yup";
import NIM from "../../../lib/global";

/**
 * @description validation schema for signup
 */
export const signupValidationSchema = Yup.object().shape({
  password: Yup.string().required("Please Enter your password"),
  email: Yup.string()
    .email("Please Enter your email")
    .required("Please Enter your email"),
});

/**
 *
 * @description signup api call
 * @param {*} param0
 * @returns
 */
export const SigninAPIcall = ({ password, email }) => {
  return new Promise((resolve, reject) => {
    try {
      const resObj = {
        data: [],
        error: [],
        message: [],
      };
      NIM.http(NIM.env.backendUrl + "/auth/admin/login", "POST", {
        password,
        email,
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
