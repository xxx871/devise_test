"use client"

import React from 'react'
import InputField from '../features/auth/components/InputField'
import Button from '../features/auth/components/Button'
import Link from 'next/link'
import { useLoginForm } from '../features/auth/hooks/useLoginForm'
import { useConfirmCodeForm } from '../features/auth/hooks/useConfirmCodeForm'

const ConfirmCodePage = () => {
  const { form, onSubmit } = useConfirmCodeForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <div className=" max-w-sm mx-auto mt-28">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center mb-5 text-2xl font-medium">確認コードを入力</h2>
        <p className="text-center mb-5">登録したメールアドレスを確認してください</p>
        <InputField
          id="code"
          label="確認コード"
          type="text"
          placeholder="確認コード"
          errorMessage={errors.code?.message}
          register={register}
        />

      <div className="mt-4">
      <Button type="submit" textColor="text-white" bgColor="bg-blue-500">確認</Button>
      </div>
      </form>

      <div className="text-center mt-4">
        <Link href={"/signup"} className="text-blue-600 hover:underline">
          新規登録に戻る
        </Link>
      </div>
    </div>
  )
}

export default ConfirmCodePage