import { CollectionSchema } from ".";
import Collection from "./Collection";

declare class Document<T extends CollectionSchema, R extends boolean = true> {
    private collection: Collection<T, R>;
    private key: string;
    private validate: (data: T) => true | LuaTuple<[false, string]>;
    private lockId: string;
    private data: T;
    private userIds?: number[];
    private lastKeyInfo: DataStoreKeyInfo;
    private closed: boolean;
    private callingBeforeClose: boolean;

    constructor(collection: Collection<T, R>, key: string, validate: (data: T) => true | LuaTuple<[false, string]>, lockId: string, data: T, keyInfo: DataStoreKeyInfo);

    read(): R extends true ? Readonly<T> : T;

    write(data: T): void;

    addUserId(userId: number): void;

    removeUserId(userId: number): void;

    keyInfo(): DataStoreKeyInfo;

    save(): Promise<void>;

    close(): Promise<void>;

    beforeSave(callback: () => void): void;

    beforeClose(callback: () => void): void;
}

export = Document;
