/* eslint-disable no-shadow */
export enum PublicRoutes {
  Home = '/',
  PlayerProfile = '/user/profile',
  SignIn = '/sign-in',
}

export enum RegisterRoutes {
  PlayerData = '/cadastro/dados-jogador',
  SocialNetworks = '/cadastro/redes-sociais',
  AboutYou = '/cadastro/sobre-voce',
  Adress = '/cadastro/local',
  StylesPlay = '/cadastro/estilos-de-jogo',
  PlayerProfile = '/cadastro/perfil-do-jogador',
  Sucess = '/cadastro/sucesso',
}

export const publicRoutes = [...Object.values(PublicRoutes)]
