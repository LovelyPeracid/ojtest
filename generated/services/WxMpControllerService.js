import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WxMpControllerService {
    /**
     * check
     * @param echostr echostr
     * @param nonce nonce
     * @param signature signature
     * @param timestamp timestamp
     * @returns string OK
     * @throws ApiError
     */
    static checkUsingGet(echostr, nonce, signature, timestamp) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/',
            query: {
                'echostr': echostr,
                'nonce': nonce,
                'signature': signature,
                'timestamp': timestamp,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * receiveMessage
     * @returns any OK
     * @throws ApiError
     */
    static receiveMessageUsingPost() {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * setMenu
     * @returns string OK
     * @throws ApiError
     */
    static setMenuUsingGet() {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/setMenu',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
//# sourceMappingURL=WxMpControllerService.js.map