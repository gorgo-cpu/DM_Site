import { z } from 'zod'

export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name is too long'),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message is too long'),
  honeypot: z.string().max(0, 'Invalid submission'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>



