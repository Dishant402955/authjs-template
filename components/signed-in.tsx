import { auth } from "@/auth";

export default async function SignedIn({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session?.user) return null;

  return <div className="flex flex-col justify-center items-center m-5 gap-4 border-2 p-2">{children}</div>;
}
