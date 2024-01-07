"use server";

import * as z from "zod";
import bcrypt from "bcrypt";

import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields." };
  }

  const { name, password, email, passwordConfirmation } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  return { success: "Successfully registered." };
};
