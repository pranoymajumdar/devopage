import { Authenticator } from 'remix-auth';
import { GitHubStrategy } from 'remix-auth-github';
import { getUser } from '~/lib/user/getUser';
import type { AuthResponse, GithubUser } from '~/types/user';

interface AuthUser {
  user: GithubUser;
  refreshToken: string | undefined;
}

export let authenticator = new Authenticator<AuthUser>();


const githubStrategy = new GitHubStrategy(
  {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    redirectURI: process.env.AUTH_CALLBACK_URL,
    scopes: ['user:email'],
  },
  async ({ tokens, request }) => {
    const user = await getUser({
      data: tokens.data as AuthResponse['data'],
    });
    return {
      user,
      refreshToken: tokens.hasRefreshToken() ? tokens.refreshToken() : undefined,
    };
  }
);

authenticator.use(githubStrategy);
