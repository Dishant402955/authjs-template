import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";

export async function SignOut() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit">Sign Out</Button>
    </form>
  );
}
