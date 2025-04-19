import { z } from 'zod';

export const taskValidationSchema = z.object({
  title: z.string().min(1, 'Title is required').max(30, 'Title must be at most 30 characters'),
  description: z.string().max(100, 'Description must be at most 100 characters').optional(),
  dateTime: z
    .string()
    .regex(
      /^([0-2]\d|30)\.(0\d|1[0-2])\.\d{4} ([0-1]\d|2[0-3]):([0-5]\d)$/,
      'Date and time must be in format DD.MM.YYYY HH:MM and contain valid values',
    )
    .refine((value) => {
      const [day, month, year, hour, minute] = value
        .split(/[\s:.]/)
        .map((num) => parseInt(num, 10));

      if (day < 1 || day > 30) return false;
      if (month < 1 || month > 12) return false;
      if (!year) return false;
      if (hour < 0 || hour > 23) return false;
      if (minute < 0 || minute > 59) return false;

      return true;
    }, 'Impossible date format'),
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
