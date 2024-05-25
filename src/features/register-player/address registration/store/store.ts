import { create } from 'zustand'

type Store = {
  isDisabled: boolean
  setIsDisabled: (value: boolean) => void
}

export const useIsDisabled = create<Store>()(set => ({
  isDisabled: true,
  setIsDisabled: value => set(() => ({ isDisabled: value })),
}))
