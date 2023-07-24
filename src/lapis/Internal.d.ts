import { CollectionOptions, CollectionSchema, LapisConfig } from ".";
import Collection from "./Collection"

declare class Internal {
    constructor(enableAutoSave: boolean)

    setConfig(config: Partial<LapisConfig>): void;

    createCollection<T extends CollectionSchema>(name: string, options: CollectionOptions<T>): Collection<T>;
}

export = Internal;
