import { Button } from "@/components/ui/button";

import { redirect } from "next/navigation";

import { auth, signIn } from "@/auth";

import { GitBranchIcon } from "lucide-react";

import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export default async function Home() {
  const session = await auth();

  return (
    <>
      {session && session.user ? (
        redirect("/chat")
      ) : (
        <Dialog open>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Sign in to your account</DialogTitle>
              <DialogDescription>
                Enter your email and password to sign in to your account.
              </DialogDescription>
            </DialogHeader>
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
              className="flex flex-col py-4 space-y-4"
            >
              <Button
                type="submit"
                className="w-full max-w-sm"
                variant="outline"
              >
                <GitBranchIcon className="mr-2 size-4" /> Sign in with GitHub
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
