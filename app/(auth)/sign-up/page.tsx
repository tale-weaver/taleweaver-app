import SignUpForm from "@/components/authform/sign-up-form";
import SignUpHeader from "@/components/authform/sign-up-header";
import AnimationWapper from "@/components/wappers/AnimationWapper";

const SignUpPage = () => {
  return (
    <AnimationWapper>
      <div className="w-[300px]">
        <SignUpHeader />
        <SignUpForm />
      </div>
    </AnimationWapper>
  );
};

export default SignUpPage;
