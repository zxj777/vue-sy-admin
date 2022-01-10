<script lang="ts">
import { defineComponent, ref } from 'vue'
import { prefixCls } from '@/settings/designSetting'

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
  },
})
</script>
