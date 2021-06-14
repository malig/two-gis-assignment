import { Tab } from './components/ui/Tabs/Tabs';

export enum TabId {
    ToRead = 'read',
    InProgress = 'progress',
    Done = 'done',
}

export enum TabLabel {
    ToRead = 'To read',
    InProgress = 'In progress',
    Done = 'Done',
}

export const tabList: Tab[] = [
    { id: TabId.ToRead, label: TabLabel.ToRead },
    { id: TabId.InProgress, label: TabLabel.InProgress },
    { id: TabId.Done, label: TabLabel.Done },
];
