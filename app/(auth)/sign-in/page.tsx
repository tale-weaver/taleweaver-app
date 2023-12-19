import SignInForm from "@/components/authform/sign-in-form";
import SignInHeader from "@/components/authform/sign-in-header";
import AnimationWapper from "@/components/wappers/AnimationWapper";

const SignInPage = () => {
  return (
    <AnimationWapper>
      <div className="w-[300px]">
        <SignInHeader />
        <SignInForm />
      </div>
    </AnimationWapper>
  );
};

export default SignInPage;
