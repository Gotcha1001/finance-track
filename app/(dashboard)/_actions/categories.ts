"use server";

import prisma from "@/lib/prisma";
import {
  CreateCategorySchema,
  CreateCategorySchemaType,
  DeleteCategorySchema,
  DeleteCategorySchemaType,
} from "@/schema/categories";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function CreateCategory(form: CreateCategorySchemaType) {
  //FORM : First validate the form
  const parsedBody = CreateCategorySchema.safeParse(form);
  //FORM : throw error if not validated
  if (!parsedBody.success) {
    throw new Error("bad request");
  }

  //USER - SECOND get the user
  const user = await currentUser();
  //USER - if no user redirect
  if (!user) {
    redirect("/sign-in");
  }

  //EXTRACT : THIRD fields from parsed body
  const { name, icon, type } = parsedBody.data;

  //CREATE = the category using prisma and the model passing the data object
  return await prisma.category.create({
    data: {
      userId: user.id,
      name,
      icon,
      type,
    },
  });
}

export async function DeleteCategory(form: DeleteCategorySchemaType) {
  const parsedBody = DeleteCategorySchema.safeParse(form);
  //FORM : throw error if not validated
  if (!parsedBody.success) {
    throw new Error("bad request");
  }

  //USER - SECOND get the user
  const user = await currentUser();
  //USER - if no user redirect
  if (!user) {
    redirect("/sign-in");
  }
  return await prisma.category.delete({
    where: {
      name_userId_type: {
        userId: user.id,
        name: parsedBody.data.name,
        type: parsedBody.data.type,
      },
    },
  });
}
