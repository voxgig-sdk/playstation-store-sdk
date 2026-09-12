import { GeoEntity } from './entity/GeoEntity';
import { ImageEntity } from './entity/ImageEntity';
import { StoreEntity } from './entity/StoreEntity';
export type * from './PlaystationStoreTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { PlaystationStoreEntityBase } from './PlaystationStoreEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class PlaystationStoreSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Geo(entopts?: Record<string, any>): GeoEntity;
    Image(entopts?: Record<string, any>): ImageEntity;
    Store(entopts?: Record<string, any>): StoreEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): PlaystationStoreSDK;
    tester(testopts?: any, sdkopts?: any): PlaystationStoreSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof PlaystationStoreSDK;
export { stdutil, config, BaseFeature, PlaystationStoreEntityBase, PlaystationStoreSDK, SDK, };
