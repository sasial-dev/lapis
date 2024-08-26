import Config from "../Config";

interface QueueItem<T extends defined> {
    dataStore: DataStore;
    key: string;
    transform: (value: T, keyInfo: DataStoreKeyInfo) => T;
    retryAttempts: number;
    retryDelay: number;
    resolve: (value: T | Promise<T>) => void,
    reject: (reason?: unknown) => void,
}

declare class Throttle {
    private config: Config;
    private queue: Array<QueueItem<defined>>;
    private gameClosed: boolean;

    constructor(config: Config)

    start(): void;

    getGetAsyncBudget(): number;
    getUpdateAsyncBudget(): number;

    updateAsync<T>(dataStore: DataStore, key: string, transform: (value: unknown, keyInfo: unknown) => T, cancelOnGameClose: boolean, retryAttempts: number, retryDelay: number): Promise<T>;
    getAsync<T>(dataStore: DataStore, key: string): Promise<T>;
    removeAsync(dataStore: DataStore, key: string): Promise<void>;
}

export = Throttle;
