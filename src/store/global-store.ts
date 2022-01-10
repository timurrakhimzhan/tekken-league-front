import UserStore from "./user/user-store";
import {LS_CACHE_KEY} from "../constants";
import BaseStore from "./base-store";
import {ToasterStore} from "./toaster/toaster-store";
import {ModalsStore} from "./modals/modals-store";

export default class GlobalStore extends BaseStore {
    readonly user: UserStore = new UserStore();
    readonly toaster: ToasterStore = new ToasterStore();
    readonly modals: ModalsStore = new ModalsStore();

    constructor() {
        super();
        this.loadFromCache();
    }

    cache() {
        const cached = JSON.stringify(this);
        localStorage.setItem(LS_CACHE_KEY, cached);
    }

    loadFromCache() {
        const cached = localStorage.getItem(LS_CACHE_KEY);
        if(!cached) {
            return;
        }
        const cachedObj = JSON.parse(cached);
        this.assignStoreToCache(this, cachedObj);
    }

    assignStoreToCache(store: BaseStore, cachedStore: any) {
        Object.entries(cachedStore).forEach(([key, valueCached]: [string, any]) => {
            if (!store.hasOwnProperty(key) || store.dontCache.includes(key)) {
                return;
            }
            const valueInStore = (store as any)[key]
            if (valueInStore instanceof BaseStore) {
                return this.assignStoreToCache(valueInStore, valueCached);
            }
            (store as any)[key] = valueCached;
        })
    }

    removeFromCache() {
        localStorage.removeItem(LS_CACHE_KEY);
    }
}