import axios from "axios";

var baseurl = "";
if (process.env.NODE_ENV === "development") {
  baseurl = "http://localhost:3003/api/";
} else {
  baseurl = "/api/";
}
 
export default axios.create({
  baseURL: baseurl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
    crossDomain: true
  }
});
