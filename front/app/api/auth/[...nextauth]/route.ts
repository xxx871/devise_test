import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import Cookies from "js-cookie";
import { cookies } from "next/headers";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        const response = await fetch("http://host.docker.internal:3000/api/v1/auth/github", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user, account, profile, email }),
        });

        if (response.ok) {
          const token = response.headers.get('access-token');
          const client = response.headers.get('client');
          const uid = response.headers.get('uid');

          console.log("セッション確認", token, client, uid);

          if (token && client && uid) {
            cookies().set('uid', uid);
            cookies().set('client', client);
            cookies().set('access-token', token);
            return true;
          } else {
            console.error('Failed to retrieve tokens from response headers');
            return false;
          }
        } else {
          console.error('Failed to log in with GitHub:', await response.text());
          return false;
        }
      } catch (error) {
        console.error('Error in GitHub login:', error);
        return false;
      }
    },
    async session({ session, user }) {
      session.user = user;
      return session;
    },
  }
});

export { handler as GET, handler as POST };
