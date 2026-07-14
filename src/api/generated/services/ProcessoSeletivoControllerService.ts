/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdicionarCargoRequest } from '../models/AdicionarCargoRequest';
import type { ProcessoCargo } from '../models/ProcessoCargo';
import type { ProcessoSeletivo } from '../models/ProcessoSeletivo';
import type { ProcessoSeletivoRequest } from '../models/ProcessoSeletivoRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProcessoSeletivoControllerService {
    /**
     * @param requestBody
     * @returns ProcessoSeletivo OK
     * @throws ApiError
     */
    public static criarProcesso(
        requestBody: ProcessoSeletivoRequest,
    ): CancelablePromise<ProcessoSeletivo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/processos',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns ProcessoSeletivo OK
     * @throws ApiError
     */
    public static publicar(
        id: number,
    ): CancelablePromise<ProcessoSeletivo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/processos/{id}/publicar',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns ProcessoSeletivo OK
     * @throws ApiError
     */
    public static iniciar(
        id: number,
    ): CancelablePromise<ProcessoSeletivo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/processos/{id}/iniciar',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns ProcessoSeletivo OK
     * @throws ApiError
     */
    public static encerrar(
        id: number,
    ): CancelablePromise<ProcessoSeletivo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/processos/{id}/encerrar',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns ProcessoCargo OK
     * @throws ApiError
     */
    public static adicionarCargo(
        id: number,
        requestBody: AdicionarCargoRequest,
    ): CancelablePromise<ProcessoCargo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/processos/{id}/cargos',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns ProcessoSeletivo OK
     * @throws ApiError
     */
    public static cancelar(
        id: number,
    ): CancelablePromise<ProcessoSeletivo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/processos/{id}/cancelar',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns ProcessoSeletivo OK
     * @throws ApiError
     */
    public static listarProcessosPublicos(): CancelablePromise<Array<ProcessoSeletivo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/processos/publicos',
        });
    }
}
