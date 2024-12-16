import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  layout('./routes/home/layout.tsx', [
    index('./routes/home/route.tsx'),
    route('personalized', './routes/home/personalized/route.tsx'),
    route('for-you', './routes/home/for-you/route.tsx'),
    route('following', './routes/home/following/route.tsx'),
  ]),
  layout('./routes/reading-history/layout.tsx', [route('reading-history', './routes/reading-history/route.tsx')]),
  layout('./routes/notifications/layout.tsx', [route('notifications', './routes/notifications/route.tsx')]),
  layout('./routes/bookmarks/layout.tsx', [route('bookmarks', './routes/bookmarks/route.tsx')]),
  route('/auth/login', './routes/auth/login.tsx'),
  route('/auth/callback', './routes/auth/callback.tsx'),
  route('/auth/logout', './routes/auth/logout.tsx'),
] satisfies RouteConfig;
