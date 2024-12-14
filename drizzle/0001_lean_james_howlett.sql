ALTER TABLE "users" ALTER COLUMN "name" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "username" varchar(10) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_username_unique" UNIQUE("username");