"use client";

import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { UserVerify, UserResend } from "@/types/user";
import { useTWMutation } from "@/hooks/useTWMutation";

const Verify = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams?.get("email");
  const username = searchParams?.get("username");
  const token = searchParams?.get("token");

  console.log(email, username, token);

  const mut_verify = useTWMutation<UserVerify>("user/verify", () => {
    router.push("/sign-in");
  });
  const mut_resend = useTWMutation<UserResend>(
    "/user/resend_verification_email"
  );

  useEffect(() => {
    if (username && token) {
      mut_verify.mutate({ username, token });
    }
  }, []);

  const handleResend = () => {
    if (username) {
      mut_resend.mutate({ username });
    }
  };

  if (!email && !username && !token) {
    return (
      <div className="w-[400px]">
        <div className="flex flex-col space-y-2 text-left mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Invalid verification link
          </h1>
          <p className="text-sm text-muted-foreground">
            The verification link you clicked on is invalid. Please check your
            email for the correct link.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[300px]">
      <div className="flex flex-col space-y-2 text-left mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          {email && username && !token && "Please verify your email"}
          {username && token && !email && "Verifying your account"}
        </h1>
        <p className="text-sm text-muted-foreground">
          {email &&
            username &&
            !token &&
            `A verification email has been sent to ${email}.
          Please click on the link in the email to verify your account. If you
          do not see the email, please check your spam folder or try resending
          the email by clicking the button below.`}
          {username &&
            token &&
            !email &&
            `Your account is being verified. Please wait while we verify your account.`}
        </p>
      </div>
      <Button
        className="w-1/2"
        variant="outline"
        type="button"
        disabled={
          mut_verify.isPending || mut_verify.isSuccess || mut_resend.isPending
        }
        onClick={handleResend}
      >
        Resend email
      </Button>
    </div>
  );
};

export default Verify;
