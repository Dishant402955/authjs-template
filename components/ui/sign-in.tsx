import { signIn } from "@/auth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function SignIn() {
  const session = await auth();

  if (session?.user) return null;

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Authjs Template</CardTitle>
          <CardDescription>Sign in to authjs template app</CardDescription>
        </CardHeader>
        <CardContent>
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
          <br />
          <p className="w-full flex justify-center items-center gap-3">
            <span className="text-2xl">&#9473;&#9473;&#9473;&#9473;&#9473;&#9473; </span> or <span className="text-2xl"> &#9473;&#9473;&#9473;&#9473;&#9473;&#9473;</span>
          </p>
          <br />
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
        </CardContent>
      </Card>
    </div>
  );
}
