import React, { FC, useMemo } from 'react';

import './Tags.css';

type TagsProps = {
    tagList: string[],
    onSelect?: (tag: string) => void;
}

export const Tags: FC<TagsProps> = (
    {
        tagList,
        onSelect = () => {}
    }
) => {
     const list = useMemo(() => {
         return tagList.map((tag, idx) => {
             return <div key={idx} className='tags__tag' onClick={() => onSelect(tag)}>#{ tag }</div>
         })
     }, [tagList, onSelect]);

    return (
        <div className='tags'>
            { list }
        </div>
    )
}
