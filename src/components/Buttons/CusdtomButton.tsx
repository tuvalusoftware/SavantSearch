import { type ButtonHTMLAttributes } from 'react';
import { Loading } from '../Icons/Loading';
import { Button } from '../ui/button';

export interface CustomButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
}

export default function CustomButton({ loading, ...props }: CustomButtonProps) {
    return (
        <Button
            disabled={loading}
            className="w-full text-buttonText dark:text-buttonText-dark bg-button dark:bg-button-dark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            {...props}
        >
            {loading && <Loading />}
            {props.children}
        </Button>
    );
}
