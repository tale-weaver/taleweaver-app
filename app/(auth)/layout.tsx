import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center flex-grow">
      <div className="bg-white p-10 rounded-md">{children}</div>
    </div>
  );
};

export default AuthLayout;
