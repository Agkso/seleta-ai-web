/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthResponseDTO } from '../models/AuthResponseDTO';
import type { LoginRequestDTO } from '../models/LoginRequestDTO';
import type { RegisterRequestDTO } from '../models/RegisterRequestDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthControllerService {
    /**
     * @param requestBody
     * @returns AuthResponseDTO OK
     * @throws ApiError
     */
    public static register(
        requestBody: RegisterRequestDTO,
    ): CancelablePromise<AuthResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns string OK
     * @throws ApiError
     */
    public static refresh(
        requestBody: Record<string, string>,
    ): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/refresh',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns AuthResponseDTO OK
     * @throws ApiError
     */
    public static login(
        requestBody: LoginRequestDTO,
    ): CancelablePromise<AuthResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
