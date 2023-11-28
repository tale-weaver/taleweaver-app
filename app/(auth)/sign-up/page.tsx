import SignUpForm from "@/components/form/sign-up-form";

const page = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col space-y-2 text-center mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your details to begin
        </p>
      </div>
      <SignUpForm />
    </div>
  );
};

export default page;
