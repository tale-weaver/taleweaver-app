import SignUpForm from "@/components/authform/sign-up-form";
import SignUpHeader from "@/components/authform/sign-up-header";

const SignUpPage = () => {
  return (
    <div className="w-full">
      <SignUpHeader />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
