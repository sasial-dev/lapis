import { LapisConfig } from ".";

declare class Config {
    private config: LapisConfig

    constructor()

    get<K extends keyof LapisConfig>(key: K): LapisConfig[K];
    set(values: Partial<LapisConfig>): void;
}

export = Config;
