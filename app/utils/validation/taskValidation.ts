import { z } from 'zod';

export const taskValidationSchema = z.object({
  title: z.string().min(1, 'Title is required').max(30, 'Title must be at most 30 characters'),
  description: z.string().max(100, 'Description must be at most 100 characters').optional(),
  dateTime: z
    .string()
    .regex(/^\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}$/, 'Date and time must be in format DD.MM.YYYY HH:MM'),
  location: z
    .string()
    .min(1, 'Location is required')
    .max(30, 'Location must be at most 30 characters'),
});

export const taskDetailsSchema = taskValidationSchema.extend({
  status: z.enum(['In Progress', 'Completed', 'Cancelled']),
});

export type taskValidationType = z.infer<typeof taskValidationSchema>;
export type taskDetailsType = z.infer<typeof taskDetailsSchema>;
