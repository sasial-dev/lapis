import { CollectionSchema } from ".";
import Document from "./Document"
import Data from "./Data"

declare class AutoSave<T extends CollectionSchema, R extends boolean = true> {
    private documents: Array<Document<T, R>>
    private data: Data
    private gameClosed: boolean
    private ongoingLoads: number
    private ongoingRemoveLocks: number

    constructor(data: Data);

    addDocument(document: Document<T, R>): void
    removeDocument(document: Document<T, R>): void

    finishLoad(document: Document<T, R>): void
    onGameClose(): void

    start(): void
}

export = AutoSave;
