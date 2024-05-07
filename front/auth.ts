import axios from "axios";
import NextAuth, { NextAuthConfig } from "next-auth";
import github from "next-auth/providers/github";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: `http://host.docker.internal:3000/api/v1/`,
});

export const config: NextAuthConfig = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [
    github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  // basePath: "/api/auth",
  callbacks: {
    async signIn({ user, account }) {
      const provider = account?.provider;
      const uid = user?.id;
      const name = user?.name;
      const email = user?.email;
      try {
        const response = await axios.post(`http://localhost:3000/auth/${provider}/callback`,
          {provider,
            uid,
            name,
            email,
          }
        );
        if (response.status === 200) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);