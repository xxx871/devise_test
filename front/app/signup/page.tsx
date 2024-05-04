"use client"

import React from 'react'
import InputField from '../features/auth/components/InputField'
import Button from '../features/auth/components/Button'
import Link from 'next/link'
import { useSignupForm } from '../features/auth/hooks/useSignupForm'

const SignUp = () => {
  const { form, onSubmit } = useSignupForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <div className=" max-w-sm mx-auto mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center mb-5 text-2xl font-medium">新規登録</h2>
        <InputField
          id="name"
          label="ユーザー名"
          type="text"
          placeholder="ユーザー名"
          errorMessage={errors.name?.message}
          register={register}
        />
        <InputField
          id="email"
          label="メールアドレス"
          type="email"
          placeholder="メールアドレス"
          errorMessage={errors.email?.message}
          register={register}
        />
        <InputField
          id="password"
          label="パスワード"
          type="password"
          placeholder="パスワード"
          errorMessage={errors.password?.message}
          register={register}
      />

      <div className="mt-4">
      <Button type="submit" textColor="text-white" bgColor="bg-blue-500">新規登録</Button>
      </div>
      </form>

      <div className="text-center mt-4">
        <Link href={"/login"} className="text-blue-600 hover:underline">
          すでに登録済みの方はこちら
        </Link>
      </div>
    </div>
  )
}

export default SignUp