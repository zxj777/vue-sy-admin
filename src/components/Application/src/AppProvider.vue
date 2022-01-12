<script lang="ts">
import { defineComponent, ref } from 'vue'
import { prefixCls } from '@/settings/designSetting'
import { useAppStore } from '@/store/modules/app'

const props = {
  prefixCls: { type: String, default: prefixCls },
}

export default defineComponent({
  name: 'AppProvider',
  inheritAttrs: false,
  props,
  setup(props, { slots }) {
    const isMobile = ref(false)
    const isSetState = ref(false)

    const appStore = useAppStore()

    console.log(slots.default?.(), 99)

    return () => slots.default?.()
  },
})
</script>
