import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function GET() {
  //1. get the user first
  const user = await currentUser();

  //2. error handling if no user
  if (!user) {
    redirect("/sign-in");
  }

  //3. query the database to get the user settings
  let userSettings = await prisma.userSettings.findUnique({
    where: {
      userId: user.id,
    },
  });

  //4. cover situations where their arent intial settings, first time user, create them
  if (!userSettings) {
    userSettings = await prisma.userSettings.create({
      data: {
        userId: user.id,
        currency: "USD",
      },
    });
  }

  // Revalidate the home page that uses the user currency
  revalidatePath("/");

  return Response.json(userSettings);
}
