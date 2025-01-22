import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export class ClassNameMode {
    static button = (...inputs: string[]) => {
        return `text-button dark:text-button-dark ${inputs.join(' ')}`;
    };

    static buttonText = (...inputs: string[]) => {
        return `text-buttonText dark:text-buttonText-dark ${inputs.join(' ')}`;
    };

    static text = (...inputs: string[]) => {
        return `text-text dark:text-text-dark ${inputs.join(' ')}`;
    };

    static form = (...inputs: string[]) => {
        return `!bg-form !dark:bg-form-dark ${inputs.join(' ')}`;
    };

    static background = (...inputs: string[]) => {
        return `bg-background dark:bg-background-dark ${inputs.join(' ')}`;
    };
}
