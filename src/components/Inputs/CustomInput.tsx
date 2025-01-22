import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

import { type InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    register: any;
};

export const CustomInput = ({
    error,
    register,
    className,
    ...props
}: InputProps) => {
    return (
        <div>
            <Input
                className={cn(
                    'mb-2 bg-foreground text-white focus:shadow-none sm:text-sm ring-transparent block w-full rounded-xl py-[25px] px-5',
                    className,
                    {
                        border: !error,
                        'border-red-500': error
                    }
                )}
                {...register}
                {...props}
            />
            {/* {error && (
                <div className="text-red-500 text-sm">
                    {error.charAt(0).toUpperCase() + error.slice(1)}
                </div>
            )} */}
        </div>
    );
};
