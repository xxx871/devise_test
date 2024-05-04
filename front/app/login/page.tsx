"use client"

import React from 'react'
import InputField from '../features/auth/components/InputField'
import Button from '../features/auth/components/Button'
import Link from 'next/link'
import { useLoginForm } from '../features/auth/hooks/useLoginForm'

const Login = () => {
  const { form, onSubmit } = useLoginForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <div className=" max-w-sm mx-auto mt-28">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center mb-5 text-2xl font-medium">ログイン</h2>
        <InputField
          id="email"
          label="メールアドレス"
          type="text"
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
      <Button type="submit" textColor="text-white" bgColor="bg-blue-500">ログイン</Button>
      </div>
      </form>

      <div className="text-center mt-4">
        <Link href={"/signup"} className="text-blue-600 hover:underline">
          初めてご利用の方はこちら
        </Link>
      </div>
    </div>
  )
}

export default Login