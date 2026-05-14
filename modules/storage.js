// src/modules/storage.js
/**
 * Módulo para manejar el almacenamiento local.
 */
export const storage = {
    get(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Error parsing storage item', e);
            return null;
        }
    },
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Error saving storage item', e);
        }
    },
    remove(key) {
        localStorage.removeItem(key);
    }
};
