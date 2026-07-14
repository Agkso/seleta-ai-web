/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Status } from './Status';
export type Candidate = {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    nome?: string;
    cpf?: string;
    email?: string;
    status?: Status;
    processoId?: number;
    cargoId?: number;
};

