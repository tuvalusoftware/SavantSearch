'use client';

import CustomButton from '@/components/Buttons/CusdtomButton';
import { CustomFormInput } from '@/components/Inputs/CustomFormInput';
import { ROUTE_AUTH } from '@/enums/router';
import { useRegisterViewModel } from '@/hooks/view-models/auth/useRegisterViewModel';
import Link from 'next/link';

export default function RegisterPage() {
    const { register, formErrors, handleSubmit, onRegister } =
        useRegisterViewModel();
    return (
        <div
            className={
                'flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/6 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 rounded-2xl shadow-xl bg-form dark:bg-form-dark'
            }
        >
            <div className="flex flex-col justify-center mx-auto items-center gap-3 pb-4">
                {/* <div>
                    <img src="/favicon.svg" width="50" alt="Logo" />
                </div> */}
                <h1 className="text-3xl font-bold text-form-dark dark:text-form my-auto">
                    Register
                </h1>
            </div>
            <div className="text-sm font-light text-[#6B7280] pb-8 mx-auto"></div>
            <form className="flex flex-col" onSubmit={handleSubmit(onRegister)}>
                <CustomFormInput
                    register={register('email')}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="username@gmail.com"
                    autoComplete="off"
                    label="Email"
                    error={formErrors['email']}
                />

                <CustomFormInput
                    register={register('password')}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••••"
                    label="Password"
                    autoComplete="current-password"
                    error={formErrors['password']}
                />

                <CustomFormInput
                    register={register('confirmPassword')}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••••"
                    label="Confirm Password"
                    autoComplete="current-password"
                    error={formErrors['password']}
                />
                <CustomButton type="submit">Register</CustomButton>
                <div className="text-sm font-light text-[#6B7280] text-center">
                    Do not have an account?
                    <Link
                        href={ROUTE_AUTH.LOGIN}
                        className="font-medium text-white dark:text-primary ml-2"
                    >
                        Login
                    </Link>
                </div>
            </form>
        </div>
    );
}
