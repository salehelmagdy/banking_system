import AuthForm from "@/components/AuthForm";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import React from "react";

const SignUp = async () => {
  const loggedInUser = await getLoggedInUser();

  console.log(loggedInUser);
  // if (!loggedInUser) redirect("/sign-up");
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
