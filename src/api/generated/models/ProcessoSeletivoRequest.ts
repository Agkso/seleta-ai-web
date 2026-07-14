/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProcessoSeletivoRequest = {
    instituicaoId?: number;
    titulo?: string;
    numeroEdital?: string;
    dataInicioInscricao?: string;
    dataFimInscricao?: string;
    tipoProcesso?: ProcessoSeletivoRequest.tipoProcesso;
};
export namespace ProcessoSeletivoRequest {
    export enum tipoProcesso {
        PUBLICO = 'PUBLICO',
        UNIVERSIDADE = 'UNIVERSIDADE',
        EMPRESA = 'EMPRESA',
    }
}

