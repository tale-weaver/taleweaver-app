import SignInForm from "@/components/form/sign-in-form";
import { siteConfig } from "@/config/site";

const page = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col space-y-2 text-center mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome to {siteConfig.name}
        </h1>
        <p className="text-sm text-muted-foreground">Sign in to continue</p>
      </div>
      <SignInForm />
    </div>
  );
};

export default page;
