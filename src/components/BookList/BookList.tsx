import React, { FC, useMemo } from 'react';
import { BookListItem, Book } from '../BookListItem/BookListItem';
import { TabId } from '../../consts';
import { Btn } from '../ui/Btn/Btn';
import { Tags } from '../ui/Tags/Tags';
import { useScroll } from '../../hooks/useScroll';
import { filterBooks } from '../../utils/filterBooks';

import './BookList.css';

type BookListProps = {
    books: Book[];
    onChange: (toTabId: TabId, fromTabId: TabId, bookId: string) => void;
    onAddFilter: (tag: string) => void;
    onClearFilter: () => void;
    tabId: TabId,
    tags: string[],
    className?: string,
}

export const BookList: FC<BookListProps> = (
    {
        books,
        onChange,
        onAddFilter,
        onClearFilter,
        tabId,
        tags,
        className = ''
    }
) => {
    className = ['book-list', className].join(' ');

    const { limit } = useScroll();

    const list = useMemo(() => {
        if (!books.length) {
            return null;
        }

        const renderStatusButton = (bookId: string) => {
            return () => {
                const onClick = (toTabId: TabId) => () => onChange(toTabId, tabId, bookId);

                switch (tabId) {
                    case TabId.ToRead:
                        return <Btn ico='→' onClick={onClick(TabId.InProgress)}>start reading</Btn>;
                    case TabId.InProgress:
                        return <Btn ico='→' onClick={onClick(TabId.Done)}>finish reading</Btn>;
                    case TabId.Done:
                        return <Btn ico='↲' onClick={onClick(TabId.ToRead)}>return in «to read»</Btn>;
                    default:
                        return null;
                }
            }
        }

        return filterBooks(books, tags, limit)
                .slice(0, limit)
                .reduce<JSX.Element[]>((acc, book) => {
                    acc.push(<BookListItem
                        key={book.id}
                        { ...book }
                        onRender={renderStatusButton(book.id)}
                        onAddFilter={onAddFilter}
                    />)

                    return acc;
                }, []);
    }, [books, onAddFilter, onChange, tabId, tags, limit]);

    return (
        <div className={className}>
            {!!tags.length && (
                <div className='book-list__filter'>
                    Filtered by tags:
                    <Tags tagList={tags}/>
                    <Btn onClick={onClearFilter}>(clear)</Btn>
                </div>
            )}

            { list?.length ? list : <div className='book-list__empty'>List is empty</div> }
        </div>
    )
}
