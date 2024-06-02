import { z } from "zod";

const userValidationSchema = z.object({
  id: z.string(),
  password: z
    .string({
      invalid_type_error: "password must be string",
    })
    .max(20, { message: "password can not be more than 20 charactars" })
    .optional(),
  needPasswordChange: z.boolean().optional().default(true),
  role: z.enum(["student", "faculty", "admin"]),
  status: z.enum(["in-progress", "blocked"]).default("in-progress"),
});

export const userValidation = {
  userValidationSchema,
};
