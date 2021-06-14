import { useCallback, useMemo, useState } from 'react';
import { TabId } from '../consts';
import { useHistory } from './useHistory';
import { TabHash, buildTabHash, changeTabHash } from '../utils';
import { Book } from '../components/BookListItem/BookListItem';

type UseTabs = (
    books: Book[]
) => {
    tabs: TabHash,
    moveBook: (toTabId: TabId, fromTabId: TabId, bookId: string) => void,
    changeTab: (tabId: TabId) => void,
    addFilter: (tag: string) => void,
    clearFilter: () => void,
}

export const useTabs: UseTabs = (initialBooks) => {
    const tabHash = useMemo(() => buildTabHash(initialBooks), [initialBooks]);
    const [tabs, setTabs] = useState<TabHash>(tabHash);
    const { pushTab, pushTag } = useHistory();

    const moveBook = useCallback((toTabId: TabId, fromTabId: TabId, bookId) => {
        setTabs(prev => prev ? changeTabHash(prev, toTabId, fromTabId, bookId) : prev);
    }, []);

    const changeTab = useCallback((type) => pushTab(type), [pushTab]);
    const addFilter = useCallback((tag) => pushTag(tag), [pushTag]);
    const clearFilter = useCallback(() => pushTag(''), [pushTag])

    return {
        tabs,
        moveBook,
        addFilter,
        clearFilter,
        changeTab
    }
}
