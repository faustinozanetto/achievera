import { z } from 'zod';

export const registriesCreateValidationSchema = z.object({
  content: z
    .string({ required_error: 'Content is required!' })
    .max(250, { message: 'Max length is 250 characters!' })
    .nonempty('Content must not be empty!'),
});
