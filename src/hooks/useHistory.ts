import { useCallback } from 'react';
import { buildParamString, getUrlParams, pushAndGo } from '../utils';
import { TabId } from '../consts';

export const useHistory = () => {
    const pushTab =  useCallback((tabId: TabId) => {
        const paramString = buildParamString(tabId, []);
        pushAndGo(paramString);
    }, []);

    const pushTag =  useCallback((tag: string) => {
        const { tab, tags } = getUrlParams();

        if (tag) {
            if (!tags.includes(tag)) {
                const paramString = buildParamString(tab, [...tags, tag]);
                pushAndGo(paramString);
            }
        } else {
            const paramString = buildParamString(tab, []);
            pushAndGo(paramString);
        }

    }, []);

    return { pushTab,  pushTag};
}
