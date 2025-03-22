ALTER TABLE "users" DROP CONSTRAINT "users_email_unique";--> statement-breakpoint
ALTER TABLE "users" ADD PRIMARY KEY ("email");--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "name" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "avatar" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "id";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "password";--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_avatar_unique" UNIQUE("avatar");