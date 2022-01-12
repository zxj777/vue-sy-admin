import { defineStore } from 'pinia'
import { ThemeEnum } from '@/enums/appEnum'

interface AppState {
  darkMode?: ThemeEnum
  pageLoading: boolean
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    darkMode: undefined,
    pageLoading: false,
  }),
  getters: {},
  actions: {},
})
