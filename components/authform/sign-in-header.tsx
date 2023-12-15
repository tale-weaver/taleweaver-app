import { siteConfig } from "@/config/site";

const SignInHeader = () => {
  return (
    <div className="flex flex-col space-y-2 text-center mb-6">
      <h1 className="text-2xl font-semibold tracking-tight">
        Welcome to {siteConfig.name}
      </h1>
      <p className="text-sm text-muted-foreground">Sign in to continue</p>
    </div>
  );
};

export default SignInHeader;
