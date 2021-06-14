import { useEffect, useState } from 'react';

const step = 20;

export const useScroll = () => {
    const [limit, setLimit] = useState(step);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight) {
                setLimit((prev) => prev + step);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { limit };
  }
