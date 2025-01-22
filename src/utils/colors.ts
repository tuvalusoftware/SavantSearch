export const colorMapper = (error?: string): string => {
    if (error === '') {
        return '#006b0c';
    }
    if (error) {
        return '#860404';
    }
    return '#C4C4C4';
};
