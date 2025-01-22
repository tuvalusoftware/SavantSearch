import { AuthResponse, LoginPayload } from '@/types/auth';
import { NextAuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import { appEnv } from './env';

async function login(credentials: LoginPayload): Promise<AuthResponse> {
    console.log(appEnv);
    try {
        const res = await fetch(appEnv.NEXTAUTH_CREDENTIAL_LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        const data = await res.json();
        if (!res.ok) {
            throw new Error(data?.message || 'Something went wrong.');
        }

        return {
            ...data?.user,
            accessToken: data.access_token,
            refreshToken: data.refreshToken
        };
    } catch (e) {
        throw new Error('Something went wrong.');
    }
}

export const nextAuthOptions: NextAuthOptions = {
    pages: {
        error: '/en/auth/error'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'example@email.com'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: '******'
                }
            },
            async authorize(credentials): Promise<any> {
                try {
                    return login(credentials as LoginPayload);
                } catch (e) {
                    return {};
                }
            }
        })
    ],
    callbacks: {
        async jwt({ user, token }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }: any) {
            session.user = token.user;
            return session;
        }
    },
    debug: process.env.NODE_ENV === 'development'
};
