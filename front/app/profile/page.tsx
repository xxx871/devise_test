// import { getSystemOverView } from "../features/auth/hooks/useSessionForm";
import NextLink from "../components/elements/links/Link";
import { cookies } from "next/headers";
import axios from "axios";
import { redirect } from "next/navigation";
import { User } from "../components/types";

export interface Score {
  id: number;
  mode: string;
  difficulty: string;
  score: number;
}


export const axiosInstance = axios.create({
  baseURL: `http://host.docker.internal:3000/api/v1/`,
});

const getCookie = (): { [key: string]: string } => {
  const cookieStore = cookies();
  const cookieObject = cookieStore.getAll().reduce((acc, cookie) => {
    acc[cookie.name] = cookie.value;
    return acc;
  }, {} as { [key: string]: string});
  console.log("Cookies:", cookieObject); 
  return cookieObject;
};

const getSession = async (): Promise<User | null> => {
  try {
    const cookie = getCookie();
    if (!cookie["uid"] || !cookie["client"] || !cookie["access-token"]) {
      return null; // No session information
    }
    const response = await axiosInstance.get("user", {
      headers: {
        uid: cookie["uid"],
        client: cookie["client"],
        "access-token": cookie["access-token"]
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching system overview:", error);
    return null;
  }
}

const getUserData = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('access-token')?.value;
  const client = cookieStore.get('client')?.value;
  const uid = cookieStore.get('uid')?.value;

  if(!accessToken || !client || !uid) {
    return null;
  }

  try {
    const response = await axiosInstance.get('user', {
      headers: {
        uid: uid,
        client: client,
        "access-token": accessToken
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default async function ProfilePage() {
  // const userSession = await getSession();
  // console.log("ユーザー情報", userSession);
  // const cookieStore = cookies();
  // console.log("Store", cookieStore)

  const userSession = await getUserData();
  console.log("userSession", userSession)
  
  if (!userSession) {
    // Handle missing session: redirect to login page or show an error message
    redirect("/login");
    return;
  }

  const { user_high_note: highNote, user_low_note: lowNote, scores, gender } = userSession;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-x1 font-bold mb-4">プロフィール</h1>

      <div className="bg-white shadow-md rounded p-4">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold mb-2">お名前：{userSession.name}</h2>
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded p-4">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold mb-2">性別：{gender}</h2>
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded p-4">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold mb-2">音域高：{highNote} (Hz)</h2>
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded p-4">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold mb-2">音域低：{lowNote} (Hz)</h2>
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-lg font-semibold mb-2">スコア</h2>
        <ul>
          {scores.map((score: Score) => (
            <li key={score.id} className="mb-2">
              <div className="flex items-center">
                <h3 className="text-md font-semibold mr-2">モード：</h3>
                <p>{score.mode}</p>
              </div>
              <div className="flex items-center">
                <h3 className="text-md font-semibold mr-2">難易度：</h3>
                <p>{score.difficulty}</p>
              </div>
              <div className="flex items-center">
                <h3 className="text-md font-semibold mr-2">スコア：</h3>
                <p>{score.score}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center">
        <NextLink href="/edit" bgColor="bg-blue-500" textColor="text-white">
          編集
        </NextLink>
      </div>
    </div>
  );
}