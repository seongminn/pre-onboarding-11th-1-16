export const getToken = (key: string) => localStorage.getItem(key);

export const setToken = (key: string, token: string) => localStorage.setItem(key, token);

export const removeToken = (key: string) => localStorage.removeItem(key);
