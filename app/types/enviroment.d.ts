declare global {
    namespace NodeJS {
        interface ProcessEnv {
            GITHUB_CLIENT_ID: string;
            GITHUB_CLIENT_SECRET: string;
            AUTH_CALLBACK_URL: string;
            SESSION_SECRET: string;
            NODE_ENV: 'development' | 'production';
        }
    }
}

export {};