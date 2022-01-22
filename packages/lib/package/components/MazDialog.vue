<template>
  <MazBackDrop
    v-bind="$attrs"
    transition="modal-anim"
    @update:model-value="$emit('update:model-value', $event)"
  >
    <template #default="{ close }">
      <div class="m-dialog-layout">
        <div
          class="m-dialog-layout-header"
          :class="{ '--has-title': $slots['title'] || title }"
        >
          <h2
            v-if="$slots['title'] || title"
            class="maz-font-semibold maz-text-xl"
          >
            <slot name="title">{{ title }}</slot>
          </h2>
          <MazBtn
            color="transparent"
            size="mini"
            class="m-dialog-layout-closebtn"
            @click="close"
          >
            <MazIcon name="X" class="maz-cursor-pointer" />
          </MazBtn>
        </div>
        <div class="m-dialog-layout-content">
          <slot />
        </div>
        <div v-if="$slots['footer']" class="m-dialog-layout-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </template>
  </MazBackDrop>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import MazBtn from './MazBtn.vue'
  import MazBackDrop from './MazBackDrop.vue'
  import MazIcon from './MazIcon.vue'

  export default defineComponent({
    components: { MazBtn, MazBackDrop, MazIcon },
    inheritAttrs: false,
    props: {
      title: { type: String, default: undefined },
    },
    emits: ['update:model-value'],
  })
</script>

<style lang="postcss" scoped>
  .m-dialog-layout {
    @apply maz-bg-color maz-rounded-lg;

    width: 500px;
    max-width: 95vw;

    &-header {
      @apply maz-pt-2 maz-pl-6 maz-pr-2 maz-flex maz-items-center maz-justify-end;

      &.--has-title {
        @apply maz-justify-between;
      }
    }

    &-footer {
      @apply maz-px-6 maz-pb-4 maz-flex maz-items-center maz-justify-end;
    }

    &-content {
      @apply maz-p-6;

      &-icon {
        flex: 0 0 auto;
      }
    }

    &-closebtn {
      @apply maz-p-2 !important;
    }
  }
</style>
