import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";
import axios from "axios";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username:",
          type: "text",
          placeholder: "your username",
        },
        password: { label: "Password:", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await axios.post(
            `${process.env.BACKEND_URL}user/login_with_credentials`,
            credentials
          );
          const user = {
            id: res.data.record?._id,
            name: res.data.record?.username,
            email: res.data.record?.email,
            image: res.data.record?.avatar,
          };
          return user;
        } catch (error: any) {
          const errorMessage =
            error.response?.data?.message || "An error occurred";
          throw new Error(errorMessage);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "github") {
        const res = await axios.post(`${process.env.BACKEND_URL}user/signup`, {
          username: user.name,
          email: user.email,
          password: "",
          source: "github",
          avatar: user.image,
        });

        console.log("github", res.data.message);

        return true;
      }
      return true;
    },
    async jwt({ token, user, account }) {
      const payload = {
        sub: "ryvn4" || token.name,
        email: token.email,
        jti: token.jti,
      };

      return {
        ...token,
        ...user,
        accessToken: jwt.sign(payload, process.env.NEXTAUTH_SECRET as string),
      };
    },
    async session({ session, token, user }) {
      session.user = token;
      console.log("session", session);
      console.log("call session");
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
};
