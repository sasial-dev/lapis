import { t } from "@rbxts/t";
import Collection from "./Collection";
import Document from "./Document";

export type { Collection, Document };

// we do not want mixed tables
export type CollectionSchema = Record<string, unknown>;

interface LapisConfig {
    /** Max save/close retry attempts */
    saveAttempts: number;
    /** Max lock acquire retry attempts */
	loadAttempts: number;
    /** Seconds between lock acquire attempts */
    loadRetryDelay: number;
    /** Show warning on retry */
	showRetryWarnings: boolean;
    // only require 2 methods for mocking :)
    /** Useful for mocking DataStoreService, especially in a local place */
	dataStoreService: Pick<DataStoreService, "GetDataStore" | "GetRequestBudgetForRequestType">;
}

export function setConfig(config: Partial<LapisConfig>): void;

export interface CollectionOptions<T extends CollectionSchema> {
    /** Takes a document's data and returns true on success or false and an error on fail. */
    validate: t.check<T>;
    defaultData: T;
    /** Migrations take old data and return new data. Order is first to last. */
    migrations?: [...Array<(data: unknown) => unknown>, (data: unknown) => T];
}

export function createCollection<T extends CollectionSchema>(name: string, options: CollectionOptions<T>): Collection<T>;
