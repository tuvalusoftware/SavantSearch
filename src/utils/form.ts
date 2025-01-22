import { FieldErrors, GlobalError } from 'react-hook-form';

export const formMessageMapper = (
    errors: FieldErrors,
    customMessage = ''
): string => {
    if (customMessage) return customMessage;
    let message = 'This field is invalid.';
    Object.keys(errors).forEach((field) => {
        const { type } = errors[field] as GlobalError;

        switch (type) {
            case 'required':
                message = `${field} is required.`;
                break;
            case 'minLength':
                message = `${field} must be at least characters.`;
                break;
            case 'maxLength':
                message = `${field} must be at most characters.`;
                break;
            case 'pattern':
                message = `${field} must match the required pattern.`;
                break;
            case 'validate':
                message = `${field} does not match the required validation.`;
                break;
            case 'minValue':
                message = `${field} must be at least.`;
                break;
            case 'maxValue':
                message = `${field} must be at most.`;
                break;
            case 'min':
                message = `${field} must be at least.`;
                break;
            case 'max':
                message = `${field} must be at most.`;
                break;
        }
    });
    return message;
};
