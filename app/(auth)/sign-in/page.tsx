import SignInForm from "@/components/authform/sign-in-form";
import SignInHeader from "@/components/authform/sign-in-header";

const SignInPage = () => {
  return (
    <div className="w-full">
      <SignInHeader />
      <SignInForm />
    </div>
  );
};

export default SignInPage;
