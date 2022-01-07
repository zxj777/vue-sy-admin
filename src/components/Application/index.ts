import { withInstall } from '/@/utils'
import appProvider from './src/AppProvider.vue'

console.log(withInstall, 999)

export const AppProvider = withInstall(appProvider)
