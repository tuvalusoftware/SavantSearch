import { cn } from '@/lib/utils';
import { type ButtonHTMLAttributes } from 'react';
import { Loading } from '../Icons/Loading';

export interface CustomIconButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    trailingIcon?: React.ReactNode;
}

export const CustomIconButton = ({
    className,
    loading,
    trailingIcon,
    ...props
}: CustomIconButtonProps) => {
    return (
        <button
            className={cn(
                'inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-3 py-2 text-sm font-medium leading-4 text-black shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                className
            )}
            disabled={loading}
            {...props}
        >
            {loading && <Loading className="mr-2 h-4 w-4" />}
            {props.children}
            {trailingIcon && <span className="ml-3">{trailingIcon}</span>}
        </button>
    );
};
