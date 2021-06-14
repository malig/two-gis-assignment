import { useEffect, useState } from 'react';
import { getUrlParams } from '../utils'

export type Params = ReturnType<typeof getUrlParams>;

export const useParams = () => {
    const [params, setParams] = useState<Params>(getUrlParams());

    useEffect(() => {
        window.onpopstate = () => setParams(getUrlParams());

        return () => {
            window.onpopstate = () => {}
        };
    }, []);

    return { params };
}
