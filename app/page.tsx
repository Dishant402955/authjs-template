import SignIn from "@/components/ui/sign-in";
import { SignOut } from "@/components/ui/signout-button";
import UserAvatar from "@/components/ui/UserAvatar";
import DeleteAccount from "@/components/ui/delete-account";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center m-10 gap-y-4">
      <SignIn />
      <UserAvatar />
      <SignOut />
      <DeleteAccount />
    </div>
  );
}
