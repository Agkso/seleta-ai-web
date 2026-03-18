// AUTO-GENERATED FILE

import { AuthControllerService } from "../generated/services/AuthControllerService";
import { RoleControllerService } from "../generated/services/RoleControllerService";

export const myApi = {

  auth: {
    register: (
      params: Parameters<typeof AuthControllerService.register>[0]
    ): ReturnType<typeof AuthControllerService.register> =>
      AuthControllerService.register(params)
    ,
    refresh: (
      params: Parameters<typeof AuthControllerService.refresh>[0]
    ): ReturnType<typeof AuthControllerService.refresh> =>
      AuthControllerService.refresh(params)
    ,
    login: (
      params: Parameters<typeof AuthControllerService.login>[0]
    ): ReturnType<typeof AuthControllerService.login> =>
      AuthControllerService.login(params)
    
  },
  
  role: {
    listAll: (): ReturnType<typeof RoleControllerService.listAll> =>
      RoleControllerService.listAll()
    
  },
  };
