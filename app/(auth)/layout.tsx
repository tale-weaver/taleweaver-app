import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="h-[calc(100vh-161px)] flex flex-col justify-center items-center">
      <div className="bg-white rounded-md">{children}</div>
    </div>
  );
};

export default AuthLayout;
