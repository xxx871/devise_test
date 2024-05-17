import axios from 'axios';
import { cookies } from 'next/headers';
import EditProfile from '../components/EditProfile';

const axiosInstance = axios.create({
  baseURL: `http://host.docker.internal:3000/api/v1/`,
});

interface User {
  name: string;
  gender: string;  // 修正: オブジェクトではなく文字列
  user_high_note: string;  // 修正: オブジェクトではなく文字列
  user_low_note: string;  // 修正: オブジェクトではなく文字列
}

const getAllCookies = (): { [key: string]: string } => {
  const cookieStore = cookies();
  const cookieObject = cookieStore.getAll().reduce((acc, cookie) => {
    acc[cookie.name] = cookie.value;
    return acc;
  }, {} as { [key: string]: string });
  return cookieObject;
};

export const getSystemOverView = async (): Promise<User> => {
  const cookie = getAllCookies();
  const response = await axiosInstance.get("user", {
    headers: {
      uid: cookie["uid"],
      client: cookie["client"],
      "access-token": cookie["access-token"],
    },
  });

  const data = response.data;
  return {
    ...data,
    gender: data.gender,  // 修正: 文字列として扱う
    user_high_note: data.user_high_note,  // 修正: 文字列として扱う
    user_low_note: data.user_low_note,  // 修正: 文字列として扱う
  };
};

export default async function EditPage() {
  const user = await getSystemOverView();
  console.log("test", user);

  if (!user) {
    return <p>ユーザー情報が取得できませんでした。ログインしてください。</p>;
  }

  return <EditProfile user={user} />;
}
