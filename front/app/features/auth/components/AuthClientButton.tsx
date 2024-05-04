"use client"

import React, { ReactNode } from 'react'
import Button from './Button';
import { useRouter } from 'next/navigation';
import { signOut } from '../hooks/useSignOutForm';


interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  type: "button" | "submit" | "reset";
}

const AuthClientButton = ({
  children,
  bgColor,
  textColor,
  type
}: ButtonProps) => {
  const router = useRouter();
  const handleSignOut = async() => {
    await signOut();
    router.refresh();
  };

  return (
    <Button
      onClick={handleSignOut}
      type={type}
      bgColor={bgColor}
      textColor={textColor}
    >
      {children}
    </Button>
  )
}

export default AuthClientButton