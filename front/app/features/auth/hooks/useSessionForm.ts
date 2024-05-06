import axios from 'axios';
import { cookies } from "next/headers";

// http://host.docker.internal:3000/api/v1/auth/sessions
const axiosInstance = axios.create({
  baseURL: `http://host.docker.internal:3000/api/v1/`,
});

// interface SessionData {
//   uid: string;
//   client: string;
//   accessToken: string;
// }

// const getAllCookies = (): string => {
//   const cookieStore = cookies();
//   const cookie = cookieStore
//     .getAll()
//     .map((cookie) => `${cookie.name}=${cookie.value}`)
//     .join(";");
//   return cookie;
// };

const getAllCookies = (): { [key: string]: string } => {
  const cookieStore = cookies();
  const cookieObject = cookieStore.getAll().reduce((acc, cookie) => {
    acc[cookie.name] = cookie.value;
    return acc;
  }, {} as { [key: string]: string});
  return cookieObject;
};

export const getSystemOverView = async (): Promise<{ [key: string]: string }> => {
  const cookie = getAllCookies();
  const response = await axiosInstance.get("auth/sessions", {
    headers: {
      uid: cookie["uid"],
      client: cookie["client"],
      "access-token": cookie["access-token"]
    }
  });
  return response.data;
};
  // const options: RequestInit = {
  //   headers: {
  //     cookie,
  //   },
  //   cache: "no-store",
  // };
  // const data = await fetch(
  //   "http://host.docker.internal:3000/api/v1/auth/sessions",
  //   options,
  // );
//   return await response.json();
// };

// export const getSession = async () => {
//   // const accessToken = Cookies.get("access-token") || '';
//   // const client = Cookies.get("client") || '';
//   // const uid = Cookies.get("uid") || '';
//   try{
//       const response = await axiosInstance.get("auth/sessions", {
//         headers: {
//           uid: Cookies.get("uid") || '',
//           client: Cookies.get("client") || '',
//           "access-token": Cookies.get("access-token") || ''
//       }
//   });
//   console.log("セッション情報:", response.data);
//   return response.data;
// } catch (error) {
//   throw error;
//   }
// };


// export const getUserData = async () => {
//   try {
//     const response = await axiosInstance.get("user");

//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };