import { TabId } from '../consts';

export const buildParamString = (tabId: TabId | null, tags: string[]) => {
    let tagStr = tags.join(',');
    tagStr = tagStr && `tags=${tagStr}`;

    let paramString = !tabId || tabId === TabId.ToRead ? '' : `?tab=${tabId}`;

    if (tagStr) {
        paramString += paramString ? `&${tagStr}` : `?${tagStr}`;
    }

    return paramString;
}
