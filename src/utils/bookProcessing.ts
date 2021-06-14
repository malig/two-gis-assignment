import { TabId } from '../consts';
import { Book } from '../components/BookListItem/BookListItem';
import { loadBookHash, saveBookHash } from './bookHash';

export type TabHash = Record<TabId, Book[]>

export const buildTabHash = (books: Book[]): TabHash => {
    const bookHash = loadBookHash();

    const tabHash = books.reduce<TabHash>((acc, book: Book) => {
        const tabId = bookHash[book.id] = bookHash[book.id] || TabId.ToRead;
        acc[tabId].push(book);

        return acc;
    }, {
        [TabId.ToRead]: [],
        [TabId.InProgress]: [],
        [TabId.Done]: [],
    })

    saveBookHash(bookHash);

    return tabHash;
}

export const changeTabHash = (tabHash: TabHash, toTabId: TabId, fromTabId: TabId, bookId: string): TabHash => {
    let foundIdx = null;
    const fromTabData = Array.from(tabHash[fromTabId]);

    const foundBook: Book | undefined = fromTabData.find((book, idx) => {
        foundIdx = idx;
        return book.id === bookId
    });

    if (foundBook && foundIdx !== null) {
        const toTabData = Array.from(tabHash[toTabId]);

        toTabData.push(foundBook);
        fromTabData.splice(foundIdx, 1);

        const bookHash = loadBookHash();
        bookHash[bookId] = toTabId;
        saveBookHash(bookHash);

        return { ...tabHash, [toTabId]: toTabData, [fromTabId]: fromTabData };
    }

    return tabHash;
}
