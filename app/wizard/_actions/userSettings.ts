"use server";

import prisma from "@/lib/prisma";
import { UpdateUserCurrencySchema } from "@/schema/userSettings";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function UpdateUserCurrency(currency: string) {
  //validate with zod
  const parsedBody = UpdateUserCurrencySchema.safeParse({
    currency,
  });

  // if validation fails.....
  if (!parsedBody.success) {
    throw parsedBody.error;
  }

  //DEFINE OUR API CALL
  //1. get the user from clerk , to get the userID
  const user = await currentUser();
  //2. if logged in user
  if (!user) {
    redirect("/sign-in");
  }

  //3. update the user settings and return new ones
  const userSettings = await prisma.userSettings.update({
    where: {
      userId: user.id,
    },
    data: {
      currency,
    },
  });
  return userSettings;
}
