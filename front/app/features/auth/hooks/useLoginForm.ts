import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema, signUpFormSchema } from "../types/formSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

interface SignInData {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const router = useRouter();

  const axiosInstance = axios.create({
    baseURL: `http://localhost:3000/api/v1/`,
  });

  const signIn = async (data: SignInData) => {
    try {
      const response = await axiosInstance.post("auth/sign_in", {
        email: data.email,
        password: data.password,
      });
      // const sixMonths = 30 * 6;
      Cookies.set("access-token", response.headers["access-token"]);
      Cookies.set("client", response.headers["client"]);
      Cookies.set("uid", response.headers["uid"]);
      return response.data;
    } catch (error) {
      Cookies.remove("uid");
      Cookies.remove("client");
      Cookies.remove("access-token");
      throw error;
    }
  };

  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof loginFormSchema>) => {
    const { email, password, } = value;
    // console.log(value);
    try {
      const response = await signIn({
        email,
        password
      });

      if (response.error) {
        console.log(response.error.message);
        throw response.error;
      }

      router.push("/");
      router.refresh();
    } catch (error: any) {
      console.log(error.response);
    }
  };

  return { form, onSubmit };
};