export const authInterceptor = (response) => {
  // No user / invaid user interceptor
  if (
    response?.data?.err.length > 0 &&
    response?.data?.errCode[0] === "INVALID_USER"
  ) {
    console.log("INVALID USER", response);
    localStorage.removeItem("nimcet" + "_role");
    localStorage.removeItem("nimcet" + "_user");
    window.location = "/admin/signin";
  }
  // let errRes = err['response'];
  // if (errRes['status'] === 401) {
  //     window.location.href = '/login';
  // }
  // return res;
};
