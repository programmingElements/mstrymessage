import {z} from "zod";

export const verifySchema = z.object({
    code: z
        .string({message: "Token is required"})
        .length(6, "Verification code must be 6 digits")
})