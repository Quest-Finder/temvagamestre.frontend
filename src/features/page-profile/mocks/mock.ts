import img from '@/assets/badge1.svg'
import img2 from '@/assets/badge2.svg'

import { User } from '../types/user'

export const userMock: User = {
  user: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '11912345678',
    dateOfBirth: 'DD/MM/YYYY',
  },
  address: {
    country: 'Brasil',
    state: 'São Paulo',
    city: 'Santos',
  },
  badges: [
    {
      id: '4d32515f-3654-4cf5-8d2d-c817f83f243b',
      name: 'Rei das rolagens',
      type: 'Bronze',
      description: 'Awarded for achieving a milestone',
      criteria: 'Complete 100 quests',
      icon: img,
    },
    {
      id: '4d32515f-3654-4cf5-8d2d-c817f83f243c',
      name: 'Mestre raiz',
      type: 'Bronze',
      description: 'Awarded for achieving a milestone',
      criteria: 'Complete 100 quests',
      icon: img2,
    },
  ],
  preferences: {
    frequency: 'weekly',
    activeType: 'player',
    dayPeriod: {
      night: true,
      morning: false,
      afternoon: true,
    },
    playersRange: {
      minPlayers: 5,
      maxPlayers: 10,
    },
    rpgStyles: [
      {
        id: '1',
        name: 'Fantasia heroica',
      },
      {
        id: '2',
        name: 'Ninja vs Samurai',
      },
      {
        id: '3',
        name: 'Espada e feitiçaria',
      },
    ],
  },
  socialMedias: [
    {
      id: 'eb81464e-3b23-475f-9db0-e0579853186c',
      name: 'Twitter',
      link: 'https://twitter.com/johndoe',
    },
    {
      id: 'ee93cdf2-2dc0-4f0b-9585-e6b8c112ad6f',
      name: 'Instagram',
      link: 'https://www.instagram.com/johndoe/',
    },
  ],
  config: {
    allowMessage: true,
  },
}
