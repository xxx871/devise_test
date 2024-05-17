import { z } from "zod";

export const signUpFormSchema = z.object({
  name: z
    .string()
    .min(2, {message: "ユーザー名は2文字以上で入力してください。"}),
  email: z.string().email("適切なメールアドレスを入力してください。"),
  password: z
    .string()
    .min(6, {message: "パスワードは6文字以上で入力してください。"}),
});

export const loginFormSchema = z.object({
  email: z
    .string().email("適切なメールアドレスを入力してください。"),
  password: z
    .string()
    .min(6, {message: "パスワードは6文字以上で入力してください。"}),
})

export const confirmCodeSchema = z.object({
  code: z
    .string()
    .min(5, {message: "確認コードは5文字以上で入力してください。"}),
})

export const EditFormSchema = z.object({
  name: z
    .string()
    .min(2, {message: "ユーザー名は2文字以上で入力してください。"}),
  gender: z
    .string()
    .min(1, {message: "男性か女性化で入力してください。"}),
  user_high_note: z
    .string()
    .min(2, {message: "ユーザー名は2文字以上で入力してください。"}),
  user_low_note: z
    .string()
    .min(2, {message: "ユーザー名は2文字以上で入力してください。"})
})
