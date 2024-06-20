export const getData = (key) => {
    if (!localStorage) return;

    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (error) {
        console.error(`error getting item ${key} from local storage`.error);
    }
}

export const storeData = (key, item) => {
    if (!localStorage) return;

    try {
        return localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
        console.error(` error storting item ${key} to local storage`, error);
    }
}