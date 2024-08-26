import { CollectionOptions, CollectionSchema } from ".";
import Document from "./Document";
import Data from "./Data";
import AutoSave from "./AutoSave";
import Config from "./Config";

declare class Collection<T extends CollectionSchema, R extends boolean = true> {
    private dataStore: DataStore;
    private options: CollectionOptions<T, R>;
    private openDocuments: { [index: string]: Promise<Document<T, R>> };
    private data: Data;
    private autoSave: AutoSave<T>;

    constructor(name: string, options: CollectionOptions<T, R>, data: Data, autoSave: AutoSave<T>, config: Config);

    load(key: string, defaultUserIds?: number[]): Promise<Document<T, R>>;
    read(key: string): Promise<R extends true ? Readonly<T> : T>;
    remove(key: string): Promise<void>;
}

export = Collection;
