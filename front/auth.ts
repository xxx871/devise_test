import NextAuth, { NextAuthConfig } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import github from "next-auth/providers/github";

export const config: NextAuthConfig = {
  providers: [
    github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
  }),
    CredentialsProvider({
      id: 'user',
      name: 'User',
      credentials: {
        email: { label: 'メールアドレス',}
      }
    })
  ],
  basePath: "/api/auth",
  callbacks: {
    authorized({request, auth}) {
      try {
        const { pathname } = request.nextUrl;
        if(pathname === "/protected-page") return !!auth;
        return true;
      } catch (err) {
        console.log(err);
      }
    },
    jwt({token, trigger, session}) {
      if(trigger === "update") token.name = session.user.name;
      return token;
    },
  },
};

export const { handlers, auth, signIn, signOut, } = NextAuth(config);