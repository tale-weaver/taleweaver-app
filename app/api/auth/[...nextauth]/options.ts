import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "text",
          placeholder: "your email",
        },
        password: { label: "Password:", type: "password" },
      },
      async authorize(credentials) {
        console.log("credentials", credentials);

        const user = {
          id: "1",
          name: "ollie",
          password: "123123123",
          email: "ollie@gmail.com",
        };

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn(data) {
      console.log("signIn", data);
      return true;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
};
