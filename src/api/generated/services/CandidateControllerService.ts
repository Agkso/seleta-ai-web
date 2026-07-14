/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Candidate } from '../models/Candidate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CandidateControllerService {
    /**
     * @param requestBody
     * @returns Candidate OK
     * @throws ApiError
     */
    public static create(
        requestBody: Candidate,
    ): CancelablePromise<Candidate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/candidates',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
