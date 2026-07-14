/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Instituicao } from './Instituicao';
import type { Status } from './Status';
export type ProcessoSeletivo = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    instituicao?: Instituicao;
    titulo?: string;
    numeroEdital?: string;
    dataInicioInscricao?: string;
    dataFimInscricao?: string;
    tipoProcesso?: ProcessoSeletivo.tipoProcesso;
    status?: Status;
};
export namespace ProcessoSeletivo {
    export enum tipoProcesso {
        PUBLICO = 'PUBLICO',
        UNIVERSIDADE = 'UNIVERSIDADE',
        EMPRESA = 'EMPRESA',
    }
}

