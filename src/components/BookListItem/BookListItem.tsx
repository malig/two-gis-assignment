import React, { FC } from 'react';
import { Tags } from '../ui/Tags/Tags';
import { TabId } from '../../consts';

import './BookListItem.css';

export type Book = {
    id: string,
    author: string,
    description: string,
    tags: string[],
    title: string,
    tabId: TabId
}

type BookListItemProps = Omit<Book, 'id'> & {
    onRender: () => JSX.Element | null;
    onAddFilter: (tag: string) => void;
};

export const BookListItem: FC<BookListItemProps> = (
    {
        author,
        description,
        tags,
        title,
        onRender,
        onAddFilter
    }
) => {
    return (
        <div className='book-list-item'>
            <div className='book-list-item__author'>{ author }</div>
            <div className='book-list-item__head'>
                <div className='book-list-item__name'>{ title }</div>

                { onRender() }
            </div>

            <div className='book-list-item__desc'>{ description }</div>

            <Tags tagList={tags} onSelect={ onAddFilter } />
        </div>
    )
}
