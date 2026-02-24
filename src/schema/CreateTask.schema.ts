import { z } from 'zod';

export const CreateTaskSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is required' })
    .max(100, { message: 'The title must be at most 100 characters long' }),
  dueDate: z
    .date({
      error: 'Task due date is required.',
    })
    .refine(
      (date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selected = new Date(date);
        selected.setHours(0, 0, 0, 0); // ← normalize the selected date too
        return selected >= today;
      },
      { message: 'Due date cannot be in the past' }
    ),
  description: z.string().max(500, {
    message: 'The description cannot be more than 500 characters.',
  }),
  status: z.enum(['todo', 'inProgress', 'completed'], {
    message: 'Please select a status',
  }),
  priority: z.enum(['low', 'normal', 'high'], {
    message: 'Please select the priority',
  }),
});
