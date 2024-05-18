import {z} from "zod";

export const usernameValidation = z
      .string({message: "Username is required"})
      .min(2, "Username must be atleast 2 characters")
      .max(20, "Username must be no more than 20 characters")
      .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character")

export const emailValidation = z
      .string({message: "Email is required"})
      .email({message: "Invalid email address"})

export const passwordValidation = z
      .string({message: "Password is required"})
      .min(6, "Password must be atleast 6 characters")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: emailValidation,
    password: passwordValidation
})