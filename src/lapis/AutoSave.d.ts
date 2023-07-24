import { CollectionSchema } from ".";
import Document from "./Document"
import Data from "./Data"

declare class AutoSave<T extends CollectionSchema> {
    private documents: Array<Document<T>>
    private data: Data

    constructor(data: Data);

    addDocument(document: Document<T>): void
    removeDocument(document: Document<T>): void

    start(): void
}

export = AutoSave;
