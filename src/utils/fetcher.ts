import { appEnv } from '@/config/env';
import { NextAuthPayload } from '@/types/auth';
import { FetchOptions, SuccessResponse } from '@/types/common';
import { getSession } from 'next-auth/react';
import { buildQueryString } from './query';

// export async function shouldRefreshToken(
//     token: JWT & User & WithToken
// ): Promise<Nullable<JWT>> {
//     try {
//         const response = await fetch(
//             `${appConfig.API_HOST}/auth/refresh-token`,
//             {
//                 method: "POST",
//                 mode: "cors",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ token: token.refreshToken }),
//             }
//         );

//         const { data } = await response.json();
//         delete token.error;
//         return {
//             ...token,
//             accessToken: data.at,
//             refreshToken: data.rt,
//         };
//     } catch (err) {
//         return {
//             ...token,
//             error: "RefreshAccessTokenError",
//         };
//     }
// }

export async function fetcher<Data, Params, Body>(
    options: FetchOptions<Params, Body>
): Promise<SuccessResponse<Data>> {
    let url = appEnv.API_HOST + options.path;
    let body: (Body & FormData) | string;
    const session = (await getSession()) as unknown as NextAuthPayload;
    const headers: Record<string, string> = {};

    if (session?.accessToken) {
        headers['Authorization'] = `Bearer ${session.accessToken}`;
    }

    if (options.params) {
        url += buildQueryString(
            options.params as Record<string, string | number>
        );
    }

    if (options?.body) {
        if (options.body instanceof FormData) {
            body = options.body;
        } else {
            body = JSON.stringify(options.body);
            headers['Content-Type'] = 'application/json';
            headers['accept'] = 'application/json';
        }
    }

    const fetchRequest = async (): Promise<SuccessResponse<Data>> => {
        return fetch(url, {
            method: options?.method || 'GET',
            mode: 'cors',
            headers: {
                ...headers,
                ...options?.headers
            },
            body
        }).then(async (res) => {
            //     if (!res.ok) {
            //         if (res.status === 401 || res.status === 403) {
            //             // if (session?.user?.refreshToken) {
            //             //   const refreshedTokens = await refreshToken(
            //             //     session?.user?.refreshToken!
            //             //   );
            //             //   if (refreshedTokens) {
            //             //     // Update the session with the new access token
            //             //     headers['Authorization'] = `Bearer ${refreshedTokens.at}`;
            //             //     return fetchRequest();
            //             //   }
            //             // }
            //             // await signOut();
            //         }

            //         if (
            //             res.body &&
            //             res.headers
            //                 .get("Content-Type")
            //                 ?.includes("application/json")
            //         ) {
            //             const error: ErrorResponse<Data> = await res.json();
            //             throw error;
            //         } else {
            //             const error: ErrorResponse<Data> = {
            //                 code: `${res.status}`,
            //                 message: res.statusText,
            //             };
            //             throw error;
            // }
            //     }

            return res.json();
        });
    };

    return fetchRequest();
}
