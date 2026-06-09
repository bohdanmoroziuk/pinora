import type { H3Event } from 'h3'

export const setAuthCookie = (event: H3Event, token: string) => {
  setCookie(event, 'token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })
}

export const getAuthCookie = (event: H3Event) => {
  return getCookie(event, 'token')
}

export const deleteAuthCookie = (event: H3Event) => {
  deleteCookie(event, 'token', {
    path: '/',
  })
}
