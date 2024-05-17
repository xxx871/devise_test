// import axios from "axios";
// import { cookies } from "next/headers";

// const axiosInstance = axios.create({
//   baseURL: `http://localhost:3000/api/v1/`,
// });

// const getAllCookies = (): { [key: string]: string } => {
//   const cookieStore = cookies();
//   const cookieObject = cookieStore.getAll().reduce((acc, cookie) => {
//     acc[cookie.name] = cookie.value;
//     return acc;
//   }, {} as { [key: string]: string});
//   return cookieObject;
// };

// export const signOut = async (): Promise<{ [key: string]: string }> => {
//   const cookie = getAllCookies();
//   const response = await axiosInstance.delete("auth/sessions", {
//     headers: {
//       uid: cookie["uid"],
//       client: cookie["client"],
//       "access-token": cookie["access-token"]
//     }
//   });
//   return response.data;
// };

// // export const signOut = async () => {
// //   const response = await axiosInstance.delete("auth/sign_out");
// //   Cookies.remove("access-token");
// //   Cookies.remove("client");
// //   Cookies.remove("uid");

// //   return response;
// // };

import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: `http://localhost:3000/api/v1/`,
});

export const signOut = async () => {
  const accessToken = Cookies.get("access-token") || '';
  const client = Cookies.get("client") || '';
  const uid = Cookies.get("uid") || '';
  const response = await axiosInstance.delete("auth/sign_out", {
    headers: {
      uid: uid,
      client: client,
      "access-token": accessToken
    }
  });
  Cookies.remove("uid");
  Cookies.remove("client");
  Cookies.remove("access-token");
  return response.data;
};