import { t } from "@rbxts/t";
import Collection from "./Collection";
import Document from "./Document";
import Internal from "./Internal";

export type { Collection, Document };

// we do not want mixed tables
export type CollectionSchema = Record<string, any>;

type Migrate<T> = (data: unknown) => T
type Migration<T = unknown> = Migrate<T> | { backwardsCompatible?: boolean, migrate: Migrate<T> }

export interface LapisConfig {
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

export const setConfig: Internal["setConfig"]

export interface CollectionOptions<T extends CollectionSchema, R extends boolean = true> {
    /** Takes a document's data and returns true on success or false and an error on fail. */
    validate?: t.check<T>;
    defaultData: T | ((key: string) => T);
    /** Migrations take old data and return new data. Order is first to last. */
    migrations?: [...Array<Migration>, Migration<T>];
    freezeData?: R;
}

export const createCollection: Internal["createCollection"] 
