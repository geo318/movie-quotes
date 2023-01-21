import { LocalData } from 'types';

export const localStore = {
  set(name: string, data: LocalData) {
    localStorage.setItem(name, JSON.stringify(data));
    return true;
  },

  clear(name: string) {
    localStorage.removeItem(name);
    return true;
  },
  get(name: string) {
    try {
      const item = localStorage.getItem(name);
      return item ? JSON.parse(item) : false;
    } catch (e) {
      return { error: e };
    }
  },
};
