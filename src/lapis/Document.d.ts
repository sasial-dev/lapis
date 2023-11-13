import { CollectionSchema } from ".";
import Collection from "./Collection";

declare class Document<T extends CollectionSchema> {
    private collection: Collection<T>;
    private key: string;
    private validate: (data: T) => true | LuaTuple<[false, string]>;
    private lockId: string;
    private data: T;
    private userIds?: number[]
    private closed: boolean;
    private callingBeforeClose: boolean;

    constructor(collection: Collection<T>, key: string, validate: (data: T) => true | LuaTuple<[false, string]>, lockId: string, data: T, userIds?: number[]);

    read(): Readonly<T>;

    write(data: T): void;

    addUserId(userId: number): void;

    removeUserId(userId: number): void;

    save(): Promise<void>;

    close(): Promise<void>;

    beforeSave(callback: () => void): void;

    beforeClose(callback: () => void): void;
}

export = Document;
