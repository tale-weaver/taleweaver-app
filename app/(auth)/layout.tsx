"use client";

import { FC, ReactNode } from "react";
import AnimationWapper from "@/components/wappers/AnimationWapper";
interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="h-[calc(100vh-161px)] flex flex-col justify-center items-center">
      <div className="bg-white rounded-md">
        <AnimationWapper>{children}</AnimationWapper>
      </div>
    </div>
  );
};

export default AuthLayout;
