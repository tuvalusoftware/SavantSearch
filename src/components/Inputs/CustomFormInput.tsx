import { InputHTMLAttributes } from 'react';
import { Label } from '../ui/label';
import { CustomInput } from './CustomInput';
import { UseFormRegisterReturn } from 'react-hook-form';

export type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    register: UseFormRegisterReturn;
    label?: string;
    prefixIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
};

export const CustomFormInput = ({
    label,
    error,
    register,
    prefixIcon,
    trailingIcon,
    ...props
}: FormInputProps) => {
    return (
        <div className="pb-3">
            {label && (
                <Label
                    htmlFor={props?.name}
                    className="block mb-2 text-sm font-medium text-form-dark dark:text-primary"
                >
                    {label}
                </Label>
            )}

            <div className="text-gray-400 relative">
                {prefixIcon && (
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
                        {prefixIcon}
                        <div className="h-[15px] w-[.5px] bg-[#C3CDDB] mx-2"></div>
                    </div>
                )}
                <CustomInput
                    register={register}
                    id={props.id}
                    error={error}
                    {...props}
                    className={`pl-4 ${prefixIcon ? 'pl-12' : ''} ${
                        trailingIcon ? 'pr-4' : ''
                    }`}
                />
                {trailingIcon && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {trailingIcon}
                    </div>
                )}
            </div>
        </div>
    );
};
