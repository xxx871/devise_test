import React from 'react'
import { UseFormRegister } from 'react-hook-form';

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  errorMessage: string | undefined;
  defaultValue?: any;
  register: UseFormRegister<any>;
}

const InputField = ({
  id,
  label,
  type,
  placeholder,
  errorMessage,
  defaultValue,
  register
}: InputFieldProps) => {
  return (
    <div className="mt-5">
      <label htmlFor="{id}" className="mb-1 block">{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:border-blue-500 w-full p-2.5"
        {...register(id)}
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  )
}

export default InputField