import { FetchError } from 'ofetch'

export const getErrorMessage = (
  error: unknown,
  fallback = 'Something went wrong',
) => {
  if (error instanceof FetchError) {
    return error.statusMessage || fallback
  }

  if (error instanceof Error) {
    return error.message
  }

  return fallback
}
