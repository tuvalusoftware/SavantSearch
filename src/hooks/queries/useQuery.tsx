/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorResponse, Nullable } from '@/types/common';
import { useCallback, useState } from 'react';
import { SWRMutationResponse } from 'swr/mutation';

type UseQueryResponse<T> = {
    error: Nullable<ErrorResponse>;
    data: Nullable<T>;
};

export function useQuery<T>(fn: (...args: any) => void): {
    execute<U>(payload?: U): Promise<UseQueryResponse<T>>;
    loading: boolean;
} {
    const [loading, setLoading] = useState<boolean>(false);
    const { trigger } = fn() as unknown as SWRMutationResponse;

    const execute = useCallback(
        async <U,>(payload?: U): Promise<UseQueryResponse<T>> => {
            try {
                const res = await trigger<U>(payload as any);

                if (res && 'data' in res) {
                    return {
                        data: res.data,
                        error: null
                    };
                }

                return {
                    data: null,
                    error: res as ErrorResponse
                };
            } catch (error) {
                return {
                    data: null,
                    error: error as ErrorResponse
                };
            } finally {
                setLoading(false);
            }
        },
        [trigger]
    );

    return { execute, loading };
}
