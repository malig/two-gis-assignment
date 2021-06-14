import React, { FC } from 'react';
import { Params } from '../../hooks/useParams';
import { useTabs } from '../../hooks/useTabs';
import { tabList } from '../../consts';
import { Tabs } from '../../components/ui/Tabs/Tabs';
import { BookList } from '../../components/BookList/BookList';
import { Book } from '../../components/BookListItem/BookListItem';

import './BookPage.css';

export const BookPage: FC<Params & { books: Book[] }> = (
    {
        tab: tabId,
        books: initialBooks,
        tags
    }
) => {
    const { tabs, moveBook, addFilter, clearFilter, changeTab } = useTabs(initialBooks);

    return (
        <div className='book-page'>
            <Tabs
                tabList={tabList}
                selectedId={tabId}
                onChange={changeTab}
                onRender={(tab) => `${tab.label} (${tabs[tab.id].length})`}
            />

            <BookList
                tags={tags}
                books={tabs[tabId]}
                tabId={tabId}
                onChange={moveBook}
                onAddFilter={addFilter}
                onClearFilter={clearFilter}
                className='book-page__book-list'
            />
        </div>
    )
}
