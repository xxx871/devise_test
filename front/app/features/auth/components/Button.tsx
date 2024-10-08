import Link from 'next/link';
import React, { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  type: "button" | "submit" | "reset";
}

const Button = ({ children, onClick, bgColor, textColor, type }: ButtonProps) => {

  const defaultClassName = "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg"

  return (
    <button className={`${defaultClassName} ${bgColor} ${textColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button