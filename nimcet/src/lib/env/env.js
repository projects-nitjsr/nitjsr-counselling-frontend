import DEV_ENV from "./dev.env";
import PROD_ENV from "./prod.env";

const host = window.location.host;
let ENV = DEV_ENV;

if (host.indexOf("localhost") === -1) {
  ENV = { ...DEV_ENV, ...PROD_ENV };
}

export default ENV;