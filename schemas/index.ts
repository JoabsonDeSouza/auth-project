import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required"
  }),
  password: z.string().min(6, {
    message: "The minimum number of characters for the password is 6."
  })
})

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required"
  }),
  password: z.string().min(6, {
    message: "The minimum number of characters for the password is 6."
  }),
  confirmPassword: z.string().min(6, {
    message: "The minimum number of characters for the password is 6."
  }),
  name: z.string().min(1, {
    message: "Name is required"
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});