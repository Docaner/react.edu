
import { useState, useEffect } from 'react';

export const useDebounce = <T>(currentValue: T, delay: number) => {
    const [value, setValue] = useState<T>(currentValue);

    useEffect(() => {
        const timerId = setTimeout(() => setValue(currentValue), delay);
        return () => clearTimeout(timerId);
    }, [currentValue, delay]);

    return value;
}