import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  layout('./routes/home/layout.tsx', [index('./routes/home/route.tsx')]),
  layout('./routes/reading-history/layout.tsx', [route('reading-history', './routes/reading-history/route.tsx')]),
  layout('./routes/notifications/layout.tsx', [route('notifications', './routes/notifications/route.tsx')]),
  layout('./routes/bookmarks/layout.tsx', [route('bookmarks', './routes/bookmarks/route.tsx')]),
  route('/auth/login', './routes/auth/login.tsx'),
  route('/auth/callback', './routes/auth/callback.tsx'),
  route('/auth/logout', './routes/auth/logout.tsx'),
] satisfies RouteConfig;
