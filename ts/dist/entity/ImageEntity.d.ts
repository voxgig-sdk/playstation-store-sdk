import { PlaystationStoreEntityBase } from '../PlaystationStoreEntityBase';
import type { PlaystationStoreSDK } from '../PlaystationStoreSDK';
import type { Control } from '../types';
import type { Image, ImageLoadMatch } from '../PlaystationStoreTypes';
declare class ImageEntity extends PlaystationStoreEntityBase<Image> {
    constructor(client: PlaystationStoreSDK, entopts: any);
    make(this: ImageEntity): ImageEntity;
    load(this: any, reqmatch?: ImageLoadMatch, ctrl?: Control): Promise<ImageEntity>;
}
export { ImageEntity };
