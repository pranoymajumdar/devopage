import type { AuthResponse, GithubUser } from '~/types/user';

export const getUserEmail = async (accessToken: string) => {
  let response = await fetch('https://api.github.com/user/emails', {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${accessToken}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return await response.json();
};
export const getUser = async ({ data: { access_token: accessToken } }: AuthResponse) => {
  let response = await fetch('https://api.github.com/user', {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${accessToken}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  let user = (await response.json()) satisfies GithubUser;
  user.email = await getUserEmail(accessToken);
  return user;
};
