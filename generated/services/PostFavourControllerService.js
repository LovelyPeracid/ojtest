import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostFavourControllerService {
    /**
     * doPostFavour
     * @param postFavourAddRequest postFavourAddRequest
     * @returns BaseResponse_int_ OK
     * @returns any Created
     * @throws ApiError
     */
    static doPostFavourUsingPost(postFavourAddRequest) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post_favour/',
            body: postFavourAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listFavourPostByPage
     * @param postFavourQueryRequest postFavourQueryRequest
     * @returns BaseResponse_Page_PostVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    static listFavourPostByPageUsingPost(postFavourQueryRequest) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post_favour/list/page',
            body: postFavourQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listMyFavourPostByPage
     * @param postQueryRequest postQueryRequest
     * @returns BaseResponse_Page_PostVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    static listMyFavourPostByPageUsingPost(postQueryRequest) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post_favour/my/list/page',
            body: postQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
//# sourceMappingURL=PostFavourControllerService.js.map