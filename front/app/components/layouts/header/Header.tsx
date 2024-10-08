import Link from 'next/link'
import React from 'react'
import NextLink from '../../elements/links/Link'
import AuthClientButton from '@/app/features/auth/components/AuthClientButton';
import { getSystemOverView } from '@/app/features/auth/hooks/useSessionForm';
import Cookies from "js-cookie";
import { cookies } from 'next/headers';
import UserButton from '../../user-button';
import ModalTrigger from '../../ModalTrigger';


// const getAllCookies = (): string => {
//   const cookieStore = cookies();
//   const cookie = cookieStore
//     .getAll()
//     .map((cookie) => `${cookie.name}=${cookie.value}`)
//     .join(";");
//   return cookie;
//   //console.log("cookie", cookie);
// }

// const getSystemOverView = async (): Promise<{ [key: string]: string }> => {
//   const cookie = getAllCookies();
//   const options: RequestInit = {
//     headers: {
//       cookie,
//     },
//     cache: "no-store",
//   };
//   const data = await fetch(
//     "http://host.docker.internal:3000/api/v1/auth/sessions",
//     options,
//   );
//   return await data.json();
// }

const getAllCookies = (): string => {
  const cookieStore = cookies();
  const cookie = cookieStore
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join(";");
  return cookie;
};


const Header = async () => {
  const resp = await getSystemOverView();
  console.log("is_login", resp.is_login);
  // const res = getAllCookies();
  // console.log("aaa", res);

  return (
    <header>
      <div className="flex items-center justify-between px-4 py-2.5 bg-white border-gray-200">
        <div>
          <Link href={"/"} className="font-semibold text-xl">
            Skill Checker
          </Link>
        </div>
        <pre>
          {/* {JSON.stringify(resp.is_login, null, 2)}
          {JSON.stringify(resp.data, null, 2)}
          {JSON.stringify(resp, null, 2)} */}
        </pre>
        <nav className="flex items-center gap-3">
          {resp.is_login ? (
            <AuthClientButton
              bgColor="bg-blue-500"
              textColor="text-white"
              type="button"
            >
              ログアウト
            </AuthClientButton>
          ) : (
            <NextLink
              href="/login"
              bgColor="bg-blue-500"
              textColor="text-white"
            >
              ログイン
            </NextLink>
          )}
          <ModalTrigger />
          <NextLink href="/profile">マイページ</NextLink>
          <UserButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;