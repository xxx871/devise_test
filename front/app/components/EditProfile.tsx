"use client"

import React from 'react'
import InputField from '../features/auth/components/InputField';
import Button from '../features/auth/components/Button';
import { useEditForm } from '../features/auth/hooks/useEditForm';
import ModalTrigger from './ModalTrigger1';

interface User {
  name: string;
  gender: string;  // 修正: オブジェクトではなく文字列
  user_high_note: string;  // 修正: オブジェクトではなく文字列
  user_low_note: string;  // 修正: オブジェクトではなく文字列
}

interface EditProfileProps {
  user: User;
}

const EditProfile: React.FC<EditProfileProps> = ({ user }) => {
  const { form, onSubmit } = useEditForm(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <div className=" max-w-sm mx-auto mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center mb-5 text-2xl font-medium">ユーザー編集</h2>
        <InputField
          id="name"
          label="ユーザー名"
          type="text"
          placeholder="ユーザー名"
          defaultValue={user.name}
          errorMessage={errors.name?.message}
          register={register}
        />
        <InputField
          id="gender"
          label="性別"
          type="text"
          placeholder="性別"
          defaultValue={user.gender}
          errorMessage={errors.gender?.message}
          register={register}
        />
        <InputField
          id="high_note"
          label="音域高"
          type="text"
          placeholder="音域高"
          defaultValue={user.user_high_note}
          errorMessage={errors.user_high_note?.message}
          register={register}
        />
        <InputField
          id="low_note"
          label="音域低"
          type="text"
          placeholder="音域低"
          defaultValue={user.user_low_note}
          errorMessage={errors.user_low_note?.message}
          register={register}
        />
<ModalTrigger />
      <div className="mt-4">
      <Button type="submit" textColor="text-white" bgColor="bg-blue-500">保存</Button>
      </div>
      </form>
    </div>
  );
};

export default EditProfile
