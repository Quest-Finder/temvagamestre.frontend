// TODO: move this data to '/constants/routes.ts' after define auth strategy and reorganize it

/* eslint-disable no-shadow */
export enum PublicRoutes {
  Home = '/',
  PlayerProfile = '/user/profile',
  SignIn = '/sign-in',
  SignUp = '/auth/sign-up',
}

export enum RegisterRoutes {
  Onboarding = '/register/onboarding',
  PlayerData = '/cadastro/dados-jogador',
  SocialNetworks = '/cadastro/redes-sociais',
  AboutYou = '/cadastro/sobre-voce',
  Adress = '/cadastro/local',
  StylesPlay = '/cadastro/estilos-de-jogo',
  PlayerProfile = '/cadastro/perfil-do-jogador',
  Sucess = '/cadastro/sucesso',
}

export const publicRoutes = [
  ...Object.values(PublicRoutes),
  ...Object.values(RegisterRoutes),
]
