import { z } from "zod";

export const signUpSchema = z.object({
  userName: z
    .string()
    .min(2, {message:"User name must be atleast 2 character"})
    .max(20, {message: "User name must be no more than 20 character"})
    .regex(/^[a-zA-Z0-9 ]*$/,{message:'User name must not contain any special character'}),
    email: z.string().email({message: "Invalid email"}),
    password: z.string().min(8,{message: "Password must be atleast 8 character"}),
});
