export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export interface SortOptions<T> {
    sortBy: keyof T;
    sortOrder: 'asc' | 'desc';
}

// eslint-disable-next-line
export type ListOptions<T = any> = Partial<T> & {
    limit?: number;
    offset?: number;
    search?: string;
    searchBy?: (keyof T)[];
    sortBy?: keyof T;
    sortOrder?: 'asc' | 'desc';
};

export interface ListResponse<T> {
    items: T[];
    total: number;
}

export interface SuccessResponse<T> {
    message: string;
    data: T;
}

export interface ErrorResponse {
    code?: string;
    message: string;
    trace?: Record<string, string>;
}

export type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type FetchOptions<Params = unknown, Body = unknown> = {
    method?: FetchMethod;
    path: string;
    params?: Params;
    body?: Body;
    headers?: {
        [key: string]: string;
    };
};

export type MutationArg<T> = {
    arg: T;
};
