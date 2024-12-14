import { createCookieSessionStorage } from 'react-router';
import { db } from '~/db';

// Create the session storage
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session', // The name of the cookie
    secure: process.env.NODE_ENV === 'production', // Ensure it's secure in production
    secrets: [process.env.SESSION_SECRET!], // A secret for signing the cookie
    sameSite: 'lax', // Prevent CSRF attacks
    path: '/', // Cookie is accessible across the site
    httpOnly: true, // Prevent client-side access to the cookie
    maxAge: 60 * 60 * 24 * 7, // Optional: Cookie expires after 7 days
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;
