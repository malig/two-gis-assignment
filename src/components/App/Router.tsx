import React, { FC  } from 'react';
import { useParams, Params } from '../../hooks/useParams';

type RouteProps = {
    children: FC<Params>
}

export const Router: FC<RouteProps> = ({ children: Children }) => {
    const { params } = useParams();
    return <Children key={params.tab + params.tags} {...params} />;
}
