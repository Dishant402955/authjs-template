import { SignOut } from "@/components/ui/signout-button";
import UserAvatar from "@/components/ui/UserAvatar";
import DeleteAccount from "@/components/ui/delete-account";
import SignedIn from "@/components/signed-in";
import { Button } from "@/components/ui/button";
import SignedOut from "@/components/signed-out";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center m-10 gap-y-4">
      <SignedIn>
        <UserAvatar />
        <SignOut />
        <DeleteAccount />
      </SignedIn>
      <SignedOut>
        <Link href={"/sign-in"}>
          <Button>Signin</Button>
        </Link>
      </SignedOut>
    </div>
  );
}
