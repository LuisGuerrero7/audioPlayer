import { useState, useEffect } from "react";

const useDebounce = (text, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(text);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(text);
        }, delay);

        return () => clearTimeout(timer);
    }, [text, delay]);

    return debouncedValue;
};

export default useDebounce;
