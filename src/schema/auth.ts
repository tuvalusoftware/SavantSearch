import { z } from 'zod';

const authErrorMessages = {
    email: 'Invalid email address',
    password: {
        min: 'Password must be at least 6 characters long'
    }
};

export const loginValidationSchema = z.object({
    email: z.string().email(authErrorMessages.email),
    password: z.string().min(6, authErrorMessages.password.min)
});

export const registerValidationSchema = z
    .object({
        email: z.string().email(authErrorMessages.email),
        firstName: z.string(),
        lastName: z.string(),
        password: z.string().min(6, authErrorMessages.password.min),
        confirmPassword: z.string().min(6, authErrorMessages.password.min)
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword']
    });
