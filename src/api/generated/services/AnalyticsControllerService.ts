/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DashboardAnalyticsResponse } from '../models/DashboardAnalyticsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AnalyticsControllerService {
    /**
     * @param processId
     * @returns DashboardAnalyticsResponse OK
     * @throws ApiError
     */
    public static dashboard(
        processId: number,
    ): CancelablePromise<DashboardAnalyticsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/processos/{processId}/analytics/dashboard',
            path: {
                'processId': processId,
            },
        });
    }
}
