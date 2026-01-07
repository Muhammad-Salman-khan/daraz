import { z } from 'zod';
export type LoginValidationType = z.infer<typeof LoginValidation>;
export const LoginValidation = z.object({
  email: z.string(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
