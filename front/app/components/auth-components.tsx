import { signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form action={async() => {
      "use server";

      await signIn(provider);
    }}>
      <Button {...props}>サインイン</Button>
    </form>
  );
}

export function SignOut({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form className="w-full"
    action={async() => {
      "use server";

      await signOut();
    }}>
      <Button variant="ghost" className="w-full p-0" {...props}>
        ログアウト
      </Button>
    </form>
  );
}