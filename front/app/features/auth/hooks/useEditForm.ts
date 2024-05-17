import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EditFormSchema } from "../types/formSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

interface User {
  name: string;
  gender: string;  // 修正: オブジェクトではなく文字列
  user_high_note: string;  // 修正: オブジェクトではなく文字列
  user_low_note: string;  // 修正: オブジェクトではなく文字列
}

const axiosInstance = axios.create({
  baseURL: `http://localhost:3000/api/v1/`,
});

export const Edit = async (data: User) => {
  const uid = Cookies.get('uid');
  const client = Cookies.get('client');
  const accessToken = Cookies.get('access-token');
  try {
    const response = await axiosInstance.put("user", {
      user: {
        name: data.name,
        gender: data.gender,
        high_note: data.user_high_note,
        low_note: data.user_low_note,
      }
    }, {
      headers: {
        'uid': uid || '',
        'client': client || '',
        'access-token': accessToken || ''
      }
    });
    Cookies.set("access-token", response.headers["access-token"]);
    Cookies.set("client", response.headers["client"]);
    Cookies.set("uid", response.headers["uid"]);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useEditForm = (user: User) => {
  const router = useRouter();

  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(EditFormSchema),
    defaultValues: {
      name: user.name,
      gender: user.gender,
      user_high_note: user.user_high_note,
      user_low_note: user.user_low_note,
    },
  });

  const onSubmit = async (value: z.infer<typeof EditFormSchema>) => {
    const { name, gender, user_high_note, user_low_note } = value;
    try {
      const response = await Edit({
        name,
        gender,
        user_high_note,
        user_low_note,
      });

      if (response.error) {
        console.log(response.error.message);
        throw response.error;
      }

      router.push("/profile");
      router.refresh();
    } catch (error: any) {
      console.log(error.response);
    }
  };

  return { form, onSubmit };
};
