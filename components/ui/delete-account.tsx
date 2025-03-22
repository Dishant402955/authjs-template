import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { deleteUser } from "@/db/crud";

export default async function DeleteAccont() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <form
      action={async () => {
        "use server";
        await deleteUser(session.user!.email!);
      }}
    >
      <Button type="submit">Delete Account</Button>
    </form>
  );
}
