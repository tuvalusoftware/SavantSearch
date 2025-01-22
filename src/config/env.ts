export interface AppEnv {
    API_HOST: string;
    FILE_HOST: string;
    NEXTAUTH_CREDENTIAL_LOGIN_URL: string;
    NEXTAUTH_SECRET: string;
}

export const appEnv: AppEnv = {
    API_HOST: process.env.NEXT_PUBLIC_API_HOST || '',
    FILE_HOST: process.env.NEXT_PUBLIC_FILE_HOST || '',
    NEXTAUTH_CREDENTIAL_LOGIN_URL:
        process.env.NEXTAUTH_CREDENTIAL_LOGIN_URL || '',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || ''
};
