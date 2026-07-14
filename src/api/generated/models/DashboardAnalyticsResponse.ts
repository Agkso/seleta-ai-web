/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlertDTO } from './AlertDTO';
import type { InsightDTO } from './InsightDTO';
import type { SerieDTO } from './SerieDTO';
export type DashboardAnalyticsResponse = {
    totalInscricoes?: number;
    totalAprovado?: number;
    taxaAprovacao?: number;
    serie?: Array<SerieDTO>;
    insights?: Array<InsightDTO>;
    alerts?: Array<AlertDTO>;
};

