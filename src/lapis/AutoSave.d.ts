import { CollectionSchema } from ".";
import Document from "./Document"
import Data from "./Data"

declare class AutoSave<T extends CollectionSchema> {
    private documents: Array<Document<T>>
    private data: Data
    private gameClosed: boolean
    private ongoingLoads: number

    constructor(data: Data);

    addDocument(document: Document<T>): void
    removeDocument(document: Document<T>): void

    finishLoad(document: Document<T>): void
    onGameClose(): void

    start(): void
}

export = AutoSave;
