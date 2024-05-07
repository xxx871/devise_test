"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpFormSchema } from "../types/formSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

const axiosInstance = axios.create({
  baseURL: `http://localhost:3000/api/v1/`,
});

export const signUp = async (data: SignUpData) => {
  try {
    const response = await axiosInstance.post("auth", {
      name: data.name,
      email: data.email,
      password: data.password,
    });
    Cookies.set("access-token", response.headers["access-token"]);
    Cookies.set("client", response.headers["client"]);
    Cookies.set("uid", response.headers["uid"]);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useSignupForm = () => {
  const router = useRouter();

  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof signUpFormSchema>) => {
    const { name, email, password, } = value;
    console.log(value);
    try {
      const response = await signUp({
        name,
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
