<template>
  <MazBackDrop
    v-bind="$attrs"
    transition="bottom-sheet-anim"
    modal-class="--bottom-sheet"
    @update:model-value="(value: boolean) => { persistent ? undefined : closeDialog(value) }"
  >
    <template #default="{ close }">
      <div
        class="m-bottom-sheet__container maz-bg-color maz-relative maz-elevation"
        :class="{
          'maz-py-6': !noPadding,
        }"
      >
        <!-- Slot content -->
        <slot>
          <!-- `<h1>Default content</h1>` -->
          <div class="maz-flex maz-direction-column maz-flex-center">
            <h1>Default content</h1>
          </div>
        </slot>

        <MazBtn
          v-if="!noClose"
          size="mini"
          class="m-bottom-sheet__close"
          color="transparent"
          @click="close"
        >
          <MazIcon name="X" />
        </MazBtn>
      </div>
    </template>
  </MazBackDrop>
</template>

<script lang="ts" setup>
  import MazBtn from './MazBtn.vue'
  import MazBackDrop from './MazBackDrop.vue'
  import MazIcon from './MazIcon.vue'

  defineProps({
    persistent: { type: Boolean, default: false },
    noClose: { type: Boolean, default: false },
    noPadding: { type: Boolean, default: false },
  })

  const emits = defineEmits(['update:model-value'])

  const closeDialog = (value: boolean) => {
    emits('update:model-value', value)
  }
</script>

<style lang="postcss" scoped>
  .m-bottom-sheet {
    &__container {
      padding-left: 3rem;
      padding-right: 3rem;
      box-shadow: 0 -5px 20px rgb(0 0 0 / 20%);
    }

    &__close {
      @apply maz-absolute !important;

      @apply maz-top-4 maz-right-4;
    }
  }
</style>
