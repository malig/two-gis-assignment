import React, { FC, useMemo, useState } from 'react';
import { TabId } from '../../../consts';

import './Tabs.css';

export type Tab = {
    id: TabId;
    label: string;
};

type TabsProps = {
    tabList: Tab[];
    selectedId: TabId;
    onRender: (tab: Tab) => string;
    onChange?: (tabId: TabId) => void;
}

export const Tabs: FC<TabsProps> = (
    {
        tabList,
        onRender,
        onChange = () => {},
        selectedId: initialSelectedId,
    }
) => {
    const [selectedId, setSelectedId] = useState(initialSelectedId);

    const list = useMemo(() => {
        return tabList.map((tab) => {
            const { id } = tab;
            const className=`tabs__tab${selectedId === id ? ' tabs__tab_selected' : ''}`;

            const onClick = () => {
                setSelectedId(id);
                onChange(id);
            };

            return (
                <div key={id} className={className} onClick={onClick}>
                    { onRender(tab) }
                </div>
            )
        })
    }, [tabList, selectedId, onRender, onChange])

    return (
        <div className='tabs'>
            <div className='tabs__head'>
                { list }
            </div>
        </div>
    )
}
