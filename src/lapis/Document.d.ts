import { CollectionSchema } from ".";
import Collection from "./Collection";

declare class Document<T extends CollectionSchema> {
    private collection: Collection<T>;
    private key: string;
    private validate: (data: T) => true | LuaTuple<[false, string]>;
    private lockId: string;
    private data: T;
    private closed: boolean;

    constructor(collection: Collection<T>, key: string, validate: (data: T) => true | LuaTuple<[false, string]>, lockId: string, data: T);

    read(): T;

    write(data: T): void;

    save(): Promise<void>;

    close(): Promise<void>;
}

export = Document;
