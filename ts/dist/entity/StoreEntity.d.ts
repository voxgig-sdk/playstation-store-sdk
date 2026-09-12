import { PlaystationStoreEntityBase } from '../PlaystationStoreEntityBase';
import type { PlaystationStoreSDK } from '../PlaystationStoreSDK';
import type { Control } from '../types';
import type { Store, StoreLoadMatch } from '../PlaystationStoreTypes';
declare class StoreEntity extends PlaystationStoreEntityBase<Store> {
    constructor(client: PlaystationStoreSDK, entopts: any);
    make(this: StoreEntity): StoreEntity;
    load(this: any, reqmatch?: StoreLoadMatch, ctrl?: Control): Promise<StoreEntity>;
}
export { StoreEntity };
