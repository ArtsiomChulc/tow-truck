import { useEffect } from 'react';

const useOnClickOutside = (ref: unknown, handler: unknown) => {
    useEffect(() => {
        const listener = (event: { target: any; }) => {
            // @ts-ignore
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            // @ts-ignore
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};

export default useOnClickOutside;