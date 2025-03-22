import { signIn } from "@/auth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";

export default async function SignIn() {
  const session = await auth();

  if (session?.user) return null;

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
      >
        <Button type="submit" size={"lg"}>
          <FcGoogle /> Sign in With Google
        </Button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/" });
        }}
      >
        <Button type="submit" size={"lg"}>
          <FaGithub /> Sign in With GitHub
        </Button>
      </form>
    </div>
  );
}
