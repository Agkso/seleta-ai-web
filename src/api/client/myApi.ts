// AUTO-GENERATED FILE

import { AnalyticsControllerService } from "../generated/services/AnalyticsControllerService";
import { AuthControllerService } from "../generated/services/AuthControllerService";
import { CandidateControllerService } from "../generated/services/CandidateControllerService";
import { ProcessoSeletivoControllerService } from "../generated/services/ProcessoSeletivoControllerService";
import { RoleControllerService } from "../generated/services/RoleControllerService";

export const myApi = {

  analytics: {
    dashboard: (
      ...args: Parameters<typeof AnalyticsControllerService.dashboard>
    ): ReturnType<typeof AnalyticsControllerService.dashboard> =>
      AnalyticsControllerService.dashboard(...args)
    
  },
  
  auth: {
    register: (
      ...args: Parameters<typeof AuthControllerService.register>
    ): ReturnType<typeof AuthControllerService.register> =>
      AuthControllerService.register(...args)
    ,
    refresh: (
      ...args: Parameters<typeof AuthControllerService.refresh>
    ): ReturnType<typeof AuthControllerService.refresh> =>
      AuthControllerService.refresh(...args)
    ,
    login: (
      ...args: Parameters<typeof AuthControllerService.login>
    ): ReturnType<typeof AuthControllerService.login> =>
      AuthControllerService.login(...args)
    
  },
  
  candidate: {
    create: (
      ...args: Parameters<typeof CandidateControllerService.create>
    ): ReturnType<typeof CandidateControllerService.create> =>
      CandidateControllerService.create(...args)
    
  },
  
  processo: {
    criarProcesso: (
      ...args: Parameters<typeof ProcessoSeletivoControllerService.criarProcesso>
    ): ReturnType<typeof ProcessoSeletivoControllerService.criarProcesso> =>
      ProcessoSeletivoControllerService.criarProcesso(...args)
    ,
    publicar: (
      ...args: Parameters<typeof ProcessoSeletivoControllerService.publicar>
    ): ReturnType<typeof ProcessoSeletivoControllerService.publicar> =>
      ProcessoSeletivoControllerService.publicar(...args)
    ,
    iniciar: (
      ...args: Parameters<typeof ProcessoSeletivoControllerService.iniciar>
    ): ReturnType<typeof ProcessoSeletivoControllerService.iniciar> =>
      ProcessoSeletivoControllerService.iniciar(...args)
    ,
    encerrar: (
      ...args: Parameters<typeof ProcessoSeletivoControllerService.encerrar>
    ): ReturnType<typeof ProcessoSeletivoControllerService.encerrar> =>
      ProcessoSeletivoControllerService.encerrar(...args)
    ,
    adicionarCargo: (
      ...args: Parameters<typeof ProcessoSeletivoControllerService.adicionarCargo>
    ): ReturnType<typeof ProcessoSeletivoControllerService.adicionarCargo> =>
      ProcessoSeletivoControllerService.adicionarCargo(...args)
    ,
    cancelar: (
      ...args: Parameters<typeof ProcessoSeletivoControllerService.cancelar>
    ): ReturnType<typeof ProcessoSeletivoControllerService.cancelar> =>
      ProcessoSeletivoControllerService.cancelar(...args)
    ,
    listarProcessosPublicos: (): ReturnType<typeof ProcessoSeletivoControllerService.listarProcessosPublicos> =>
      ProcessoSeletivoControllerService.listarProcessosPublicos()
    
  },
  
  role: {
    listAll: (): ReturnType<typeof RoleControllerService.listAll> =>
      RoleControllerService.listAll()
    
  },
  };
