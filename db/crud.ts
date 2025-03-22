// import "dotenv/config";
// import { drizzle } from "drizzle-orm/neon-http";
// import { usersTable } from "@/db/schema";
// import { randomInt } from "crypto";

// const db = drizzle(process.env.DATABASE_URL!);

// async function main() {
//   const user: typeof usersTable.$inferInsert = {
//     password: "dfdg",
//     email: "john@example.com",
//   };

//   await db.insert(usersTable).values(user);
//   console.log("New user created!");

//   const users = await db.select().from(usersTable);
//   console.log("Getting all users from the database: ", users);
// }

export const getUserFromDb = async (email: any, pass: any) => {
  return { email, pass };
};
