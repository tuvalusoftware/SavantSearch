/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';

import useRegister from '@/hooks/queries/auth/useRegister';
import { useQuery } from '@/hooks/queries/useQuery';
import { useToast } from '@/hooks/shared/useToast';
import { loginValidationSchema } from '@/schema/auth';
import { RegisterPayload } from '@/types/auth';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm,
    UseFormHandleSubmit,
    UseFormRegister
} from 'react-hook-form';
// type Props = {};
export type UseRegisterViewModelValue<T extends FieldValues> = {
    onRegister: SubmitHandler<T>;
    register: UseFormRegister<T>;
    handleSubmit: UseFormHandleSubmit<T>;
    formErrors: T;
};

export const useRegisterViewModel =
    (): UseRegisterViewModelValue<RegisterPayload> => {
        const {
                register,
                handleSubmit,
                formState: { errors }
            } = useForm<RegisterPayload>({
                resolver: zodResolver(loginValidationSchema)
            }),
            [formErrors, setFormErrors] = useState<RegisterPayload>({
                email: '',
                password: '',
                confirmPassword: ''
            }),
            { toast } = useToast(),
            { execute } = useQuery<RegisterPayload>(useRegister);

        useEffect(() => {
            const newErrors = { ...formErrors };
            Object.keys(errors).forEach((errKey) => {
                newErrors[errKey as keyof RegisterPayload] = errors[
                    errKey as keyof RegisterPayload
                ]?.message as string;
            });
            setFormErrors(newErrors);
        }, [errors]);

        const onSubmit: SubmitHandler<RegisterPayload> = async (
            data: RegisterPayload,
            e?: BaseSyntheticEvent
        ) => {
            try {
                e?.preventDefault();
                setFormErrors({
                    email: '',
                    password: '',
                    confirmPassword: ''
                });

                delete data.confirmPassword;
                const res = await execute(data);

                if (res.error) {
                    toast({
                        title: res.error?.message as string
                    });
                }
            } catch (err: unknown) {
                console.log(err);
                toast({
                    variant: 'destructive',
                    title: err?.toString()
                });
            }
        };

        return {
            onRegister: onSubmit,
            handleSubmit,
            register,
            formErrors
        };
    };
