export const getQuery = (key: string, defaultValue: string = '') => {
    const url = new URL(window.location.href);
    return url.searchParams.get(key) || defaultValue;
}

export const setQuery = (key: string, value: string) => {
    // @ts-ignore
    const url = new URL(window.location);
    url.searchParams.set(key, value);
    window.history.pushState(null, '', url.toString());
}