import { signIn } from "@/auth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Button type="submit" size={"lg"}>
          <FcGoogle /> Sign in With Google
        </Button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <Button type="submit" size={"lg"}>
          <FaGithub /> Sign in With GitHub
        </Button>
      </form>
    </div>
  );
}
