import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    email: "hjbdfd",
    name: "johhn@example.com",
    avatar: "efd",
  };
}

export const addUser = async (email: string, name: string, avatar: string) => {
  await db.insert(usersTable).values({ email, name, avatar });
};

export const findUser = async (email: string) => {
  const user = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);
  return user;
};

export const deleteUser = async (email: string) => {
  await db.delete(usersTable).where(eq(usersTable.email, email));
};
