import { PlaystationStoreEntityBase } from '../PlaystationStoreEntityBase';
import type { PlaystationStoreSDK } from '../PlaystationStoreSDK';
import type { Control } from '../types';
import type { Geo, GeoLoadMatch } from '../PlaystationStoreTypes';
declare class GeoEntity extends PlaystationStoreEntityBase<Geo> {
    constructor(client: PlaystationStoreSDK, entopts: any);
    make(this: GeoEntity): GeoEntity;
    load(this: any, reqmatch?: GeoLoadMatch, ctrl?: Control): Promise<GeoEntity>;
}
export { GeoEntity };
