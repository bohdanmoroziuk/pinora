import { z } from 'zod'

export const mongoIdSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/)

export const usernameSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(3)

export const emailSchema = z
  .email()
  .trim()
  .toLowerCase()

export const passwordSchema = z
  .string()
  .min(8)
  .max(16)
