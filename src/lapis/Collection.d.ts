import { CollectionOptions, CollectionSchema } from ".";
import Document from "./Document";

declare class Collection<T extends CollectionSchema> {
    private dataStore: DataStore
    private options: CollectionOptions<T> 
    private openDocuments: { [index: string]: Promise<Document<T>> }

    // as I'm using export =, I can only export one thing.
    // therefore, I'm importing CollectionOptions from index.d.ts where it is also referenced
    constructor(name: string, options: CollectionOptions<T>)

    load(key: string): Promise<Document<T>>
}

export = Collection;
