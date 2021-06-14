export const pushAndGo = (url: string) => {
    window.history?.pushState({}, '', url || '/');
    window.onpopstate && window.onpopstate({} as PopStateEvent)
}
