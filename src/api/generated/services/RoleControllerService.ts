/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Role } from '../models/Role';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RoleControllerService {
    /**
     * @returns Role OK
     * @throws ApiError
     */
    public static listAll(): CancelablePromise<Array<Role>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/roles',
        });
    }
}
