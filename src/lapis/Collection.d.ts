import { CollectionOptions, CollectionSchema } from ".";
import Document from "./Document";
import Data from "./Data";
import AutoSave from "./AutoSave";
import Config from "./Config";

declare class Collection<T extends CollectionSchema> {
    private dataStore: DataStore;
    private options: CollectionOptions<T>;
    private openDocuments: { [index: string]: Promise<Document<T>> };
    private data: Data;
    private autoSave: AutoSave<T>;

    constructor(name: string, options: CollectionOptions<T>, data: Data, autoSave: AutoSave<T>, config: Config);

    load(key: string, defaultUserIds?: number[]): Promise<Document<T>>;
}

export = Collection;
