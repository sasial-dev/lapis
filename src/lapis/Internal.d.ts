import { CollectionOptions, CollectionSchema, LapisConfig } from ".";
import Collection from "./Collection"

declare class Internal {
    constructor(enableAutoSave: boolean)

    setConfig(this: void, config: Partial<LapisConfig>): void;

    createCollection<T extends CollectionSchema, R extends boolean = true>(this: void, name: string, options: CollectionOptions<T, R>): Collection<T, R>;
}

export = Internal;
