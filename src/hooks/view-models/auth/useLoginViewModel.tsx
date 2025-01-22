/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { ROUTE_HOME } from '@/enums/router';
import { zodResolver } from '@hookform/resolvers/zod';

import { useToast } from '@/hooks/shared/useToast';
import { loginValidationSchema } from '@/schema/auth';
import { LoginPayload } from '@/types/auth';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm,
    UseFormHandleSubmit,
    UseFormRegister
} from 'react-hook-form';
import { Optional } from '@/types/common';
// type Props = {};
export type UseLoginViewModelValue<T extends FieldValues> = {
    onLogin: SubmitHandler<T>;
    register: UseFormRegister<T>;
    handleSubmit: UseFormHandleSubmit<T>;
    formErrors: LoginPayload<Optional<string>>;
};

export const useLoginViewModel = (): UseLoginViewModelValue<LoginPayload> => {
    const {
            register,
            handleSubmit,
            formState: { errors }
        } = useForm<LoginPayload>({
            resolver: zodResolver(loginValidationSchema)
        }),
        [formErrors, setFormErrors] = useState<LoginPayload<Optional<string>>>({
            email: '',
            password: ''
        }),
        { toast } = useToast();

    const router = useRouter();

    console.log({ errors });
    useEffect(() => {
        setFormErrors(
            Object.keys(formErrors).reduce(
                (acc, key) => ({
                    ...acc,
                    [key]: errors[key as keyof LoginPayload]?.message ?? ''
                }),
                { ...formErrors }
            )
        );
    }, [errors]);

    const onSubmit: SubmitHandler<LoginPayload> = async (
        data: LoginPayload,
        e?: BaseSyntheticEvent
    ) => {
        e?.preventDefault();

        console.log(data);

        const res = await signIn('credentials', {
            ...data,
            redirect: false
        });

        if (res?.ok) {
            router.replace(ROUTE_HOME.DEFAULT);
            return;
        }
        toast({
            variant: 'destructive',
            title: res?.error as string
        });
    };

    return {
        onLogin: onSubmit,
        handleSubmit,
        register,
        formErrors
    };
};
