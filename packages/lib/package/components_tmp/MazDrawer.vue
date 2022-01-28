<template>
  <MazBackDrop
    ref="backdropRef"
    v-bind="$attrs"
    :model-value="modelValue"
    :backdrop-class="['m-drawer', `-${variant}`, backdropClass]"
    @close="$emit('close', $event)"
    @open="$emit('open', $event)"
    @update:model-value="$emit('update:model-value', $event)"
  >
    <template #default="{ close }">
      <div :class="['m-drawer-content-wrap', `-${variant}`]">
        <header
          class="m-drawer-header"
          :class="[$slots['title'] ? 'maz-justify-between' : 'maz-justify-end']"
        >
          <h4 class="maz-text-2xl maz-font-semibold">
            <slot name="title" :close="close"></slot>
          </h4>
          <div v-if="!noCloseIcon" class="maz-flex maz-justify-end">
            <MazBtn size="sm" color="transparent" @click="close">
              <MazIcon name="x" class="maz-h-5 maz-w-5" />
            </MazBtn>
          </div>
        </header>
        <div class="m-drawer-body">
          <slot :close="close"></slot>
        </div>
      </div>
    </template>
  </MazBackDrop>
</template>

<script lang="ts">
  import MazBackDrop from './MazBackDrop.vue'

  import { defineComponent, ref } from 'vue'
  import { useDrawer } from '@/composables/drawer/drawer.composable'
  import MazBtn from './MazBtn.vue'
  import MazIcon from './MazIcon.vue'

  export default defineComponent({
    components: { MazBackDrop, MazIcon, MazBtn },

    inheritAttrs: false,

    props: {
      modelValue: { type: Boolean, default: false },
      noCloseIcon: { type: Boolean, default: false },
      title: { type: String, default: undefined },
      variant: {
        type: String,
        default: 'right',
        validator: (value: string) => {
          return ['right', 'top'].includes(value)
        },
      },
      backdropClass: { type: String, default: undefined },
    },

    emits: ['open', 'close', 'update:model-value'],

    setup() {
      const { closeDrawerOnRouteChange } = useDrawer()
      const backdropRef = ref<typeof MazBackDrop>()

      const closeDrawer = () => backdropRef.value?.close?.()

      closeDrawerOnRouteChange(backdropRef)

      return {
        backdropRef,
        closeDrawer,
      }
    },
  })
</script>

<style lang="postcss" scoped>
  .m-drawer-content-wrap {
    @apply maz-overflow-y-auto maz-bg-gray-100 maz-text-gray-900;
  }

  .m-drawer-content-wrap > .m-drawer-header {
    @apply maz-z-1 maz-flex maz-h-[64px] maz-flex-shrink-0 maz-items-center maz-bg-white maz-bg-clip-padding maz-px-4 maz-py-3 maz-drop-shadow;
  }

  .m-drawer-content-wrap > .m-drawer-body {
    @apply maz-z-0 maz-min-h-0 maz-flex-1 maz-overflow-x-auto maz-bg-gray-100 maz-bg-clip-padding;
  }
</style>
