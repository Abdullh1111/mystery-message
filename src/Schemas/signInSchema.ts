import { z } from "zod";

export const signInSchema = z.object({
  userName: z.string(),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 character" }),
});
