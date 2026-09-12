export interface Geo {
}
export interface GeoLoadMatch {
}
export interface Image {
}
export interface ImageLoadMatch {
    age: number;
    container_id: string;
    cusa: string;
    language: string;
    bg_color?: number;
    h?: number;
    opacity?: number;
    platform?: string;
    w?: number;
}
export interface Store {
    age_limit: number;
    attributes: Record<string, any>;
    container_type: string;
    content_origin: number;
    dob_required: boolean;
    id: string;
    images: any[];
    links: any[];
    long_desc: string;
    metadata: Record<string, any>;
    name: string;
    promomedia: any[];
    restricted: boolean;
    revision: number;
    scene_layout: Record<string, any>;
    size: number;
    sku_links: any[];
    sort: string;
    start: number;
    template_def: Record<string, any>;
    timestamp: number;
    total_results: number;
}
export interface StoreLoadMatch {
    age: number;
    country: string;
    cusa?: string;
    language: string;
    direction?: string;
    game_content_type?: string;
    game_demo?: boolean;
    game_type?: string;
    genre?: string;
    platform?: string;
    price?: string;
    relationship?: string;
    release_date?: string;
    size?: number;
    sort?: string;
    start?: number;
    subtitle_lang?: string;
    top_category?: string;
    voice_lang?: string;
    search_string?: string;
}
