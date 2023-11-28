"use client";

import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const UserAuth = () => {
  return (
    <Button onClick={() => signOut()} variant="outline">
      Sign out
    </Button>
  );
};

export default UserAuth;
