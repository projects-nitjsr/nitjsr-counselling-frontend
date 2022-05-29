import * as Yup from "yup";
import NIM from "../../../lib/global";

export const registrationValidationSchema = Yup.object().shape({
  email: Yup.string().email("Please enter a valid email").required("Required"),
});

/**
 *
 * @param {*} param0
 * @returns
 */
export const forgotAPICall = ({ email }) => {
  return new Promise((resolve, reject) => {
    const resObj = {
      data: [],
      error: [],
      message: [],
    };
    try {
      NIM.http(NIM.env.backendUrl + "/auth/admin/forgotpassword", "POST", {
        email,
      })
        .then((res) => {
          const { success, message } = res.data;
          if (success) {
            if (message) {
              resObj.message.push(message);
            } else {
              resObj.message.push("Successfully logged in");
            }
          } else {
            resObj.error.push(message);
          }
        })
        .catch((err) => {
          console.log(err);
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
      return;
    }
  });
};
