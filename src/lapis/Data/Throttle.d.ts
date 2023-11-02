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

    constructor(config: Config)

    start(): void;
    updateAsync<T>(dataStore: DataStore, key: string, transform: (value: unknown, keyInfo: unknown) => T, retryAttempts: number, retryDelay: number): Promise<T>;
}

export = Throttle;
