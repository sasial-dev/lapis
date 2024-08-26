import Config from "../Config";
import Throttle from "./Throttle";

declare class Data {
    private config: Config;
    private throttle: Throttle;
    private ongoingSaves: Map<DataStore, Map<string, { promise: Promise<void> }>>;

    constructor(config: Config)

    // Promise.allSettled result
    waitForOngoingSave(dataStore: DataStore, key: string): Promise<Array<Promise.Status>>
    waitForOngoingSaves(): Promise<Array<Promise.Status>>

    read<T>(dataStore: DataStore, key: string): Promise<T>
    load<T>(dataStore: DataStore, key: string, transform: (value: unknown, keyInfo: unknown) => T): Promise<T>
    save<T>(dataStore: DataStore, key: string, transform: (value: unknown, keyInfo: unknown) => T): Promise<T>
    remove(dataStore: DataStore, key: string): Promise<void>

    removeLock<T>(dataStore: DataStore, key: string, lockIdToRemove: string): Promise<T>;
}

export = Data;
