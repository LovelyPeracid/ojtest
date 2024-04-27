import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FileControllerService {
    /**
     * uploadFile
     * @param file file
     * @param biz
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    static uploadFileUsingPost(file, biz) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/file/upload',
            query: {
                'biz': biz,
            },
            formData: {
                'file': file,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
//# sourceMappingURL=FileControllerService.js.map