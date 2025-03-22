import { auth } from "@/auth";
import { addUser, findUser } from "@/db/crud";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  const user = await findUser(session.user.email!);

  let welcome = false;

  if (!user.length) {
    await addUser(session.user.email!, session.user.name!, session.user.image!);
    welcome = true;
  }

  return (
    <div className="flex flex-col justify-center items-center m-5 gap-4 border-2 p-2">
      <img src={session.user.image!} alt="User Avatar" width={50} height={50} />
      <h1>{session.user.email}</h1>
      <h1>{session.user.name}</h1>
      {welcome ? "Welcome New User" : null}
    </div>
  );
}
