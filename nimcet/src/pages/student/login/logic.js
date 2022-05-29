import * as yup from "yup";
import NIM from "../../../lib/global";

export const LoginValidationSchema = yup.object().shape({
  regno: yup.string().required("Registration No. is required"),
  password: yup.string().required("Password is required"),
});


/**
 * 
 * @description function to validate the login
 * @param {*} param0 
 * @returns 
 */
export const loginAPICall = ({ regno, password }) => {
  return new Promise((resolve, reject) => {
    const resObj = {
      data: [],
      error: [],
      message: [],
    };
    try {
      NIM.http(NIM.env.backendUrl + "/auth/student/login", "POST", {
        password,
        regno,
      })
        .then((res) => {
          const { success, message, role, token } = res.data;
          if (success) {
            window.sessionStorage.setItem(`${role}_auth_token`, token);
            resObj.message.push(message);
          } else {
            resObj.error.push(message);
          }
          resolve(resObj);
          return;
        })
        .catch((err) => {
          reject(err);
          return;
        });
    } catch (error) {
      reject(error);
      return;
    }
  });
};
