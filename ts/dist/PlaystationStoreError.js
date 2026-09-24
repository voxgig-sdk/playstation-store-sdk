"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaystationStoreError = void 0;
class PlaystationStoreError extends Error {
    isPlaystationStoreError = true;
    sdk = 'PlaystationStore';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.PlaystationStoreError = PlaystationStoreError;
//# sourceMappingURL=PlaystationStoreError.js.map