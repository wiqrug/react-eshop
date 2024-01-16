const setItem = (key, value) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
};

const getItem = (key) => {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
    } catch (error) {
        console.log(error);
    }
};

const removeItem = (key) => {
    try {
        window.localStorage.removeItem(key);
    } catch (error) {
        console.log(error);
    }
};

export const useLocalStorage = () => {
    return { getItem, setItem, removeItem }
}
