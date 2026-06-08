import { z } from 'zod'

export const validate = <TSchema extends z.ZodType>(
  schema: TSchema,
  data: unknown,
): z.infer<TSchema> => {
  const result = schema.safeParse(data)

  if (result.success) return result.data

  throw createError({
    statusCode: 400,
    statusMessage: 'Validation failed',
    data: z.treeifyError(result.error),
  })
}
