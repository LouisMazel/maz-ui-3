<template>
  <MazBackDrop
    v-bind="$attrs"
    modal-class="maz--fullscreen"
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
            color="white"
            no-bordered
            class="m-dialog-layout-closebtn"
            @click="close"
          >
            <!-- <MazIcon name="X" class="maz-cursor-pointer maz-w-5 maz-h-5" /> -->
          </MazBtn>
        </div>
        <div class="m-dialog-layout-content">
          <slot />
        </div>
        <div class="m-dialog-layout-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </template>
  </MazBackDrop>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import MazBtn from './../MazBtn/MazBtn.vue'
  import MazBackDrop from './../MazBackDrop/MazBackDrop.vue'
  // import MazIcon from './../MazIcon/MazIcon.vue'

  export default defineComponent({
    components: { MazBtn, MazBackDrop },
    inheritAttrs: false,
    props: {
      title: { type: String, default: undefined },
    },
    emits: ['update:model-value'],
  })
</script>

<style lang="postcss" scoped>
  .m-dialog-layout {
    @apply maz-bg-white maz-rounded-lg;

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
      @apply !maz-p-2;
    }
  }
</style>
