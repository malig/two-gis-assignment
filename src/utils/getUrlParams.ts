import { TabId } from '../consts';

type Params = {
    tab: TabId,
    tags: string[]
};

const getParameterByName = (name: string, url = window.location.href): string => {
    const regex = new RegExp('[?&]' + name + '(=([^&]*)|&|$)');
    const results = regex.exec(url);

    return (results && results[2]) ? decodeURIComponent(results[2]) : '';
}

export const getUrlParams = (): Params => {
    const tab = (getParameterByName('tab') || TabId.ToRead) as TabId;
    const tags = getParameterByName('tags');

    return { tab, tags: tags ? tags.split(',') : [] };
}
