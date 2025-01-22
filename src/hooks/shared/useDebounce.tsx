'use client';

import { Optional } from '@/types/common';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

export type UseDebounceProps<T> = {
    delay?: number;
    initialValue?: T;
};

function useDebounce<T>({
    delay = 400,
    initialValue
}: UseDebounceProps<T> = {}): [
    Optional<T>,
    Dispatch<SetStateAction<Optional<T>>>
] {
    const isMounted = useRef<boolean>(false);
    const [value, setValue] = useState<Optional<T>>(initialValue);
    const [debounceValue, setDebounceValue] =
        useState<Optional<T>>(initialValue);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }
        const timer = setTimeout(() => setDebounceValue(value), delay);
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return [debounceValue, setValue];
}

export default useDebounce;
