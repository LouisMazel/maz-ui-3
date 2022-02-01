<template>
  <MazDialog
    v-if="currentModal"
    v-bind="$attrs"
    :model-value="currentModal?.isActive"
    @update:model-value="rejectModal(currentModal)"
  >
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #default>
      <slot></slot>
    </template>
    <template #footer>
      <div class="maz-space-x-2">
        <MazBtn color="success" pastel @click="rejectModal(currentModal)">
          <slot name="cancel-text"> Cancel </slot>
        </MazBtn>
        <MazBtn color="danger" @click="resolveModal(currentModal)">
          <slot name="confirm-text"> Confirm </slot>
        </MazBtn>
      </div>
    </template>
  </MazDialog>
</template>

<script lang="ts">
  export {
    useMazPromiseDialog,
    ModalState,
    ModalData,
  } from './use-maz-promise-dialog'
</script>

<script lang="ts" setup>
  import { PropType, computed } from 'vue'
  import MazDialog from '../MazDialog.vue'
  import MazBtn from '../MazBtn.vue'
  import {
    useMazPromiseDialog,
    ModalState,
    ModalData,
  } from './use-maz-promise-dialog'

  const props = defineProps({
    data: { type: Object as PropType<ModalData>, required: true },
    identifier: { type: String, required: true },
  })

  const { modalState, rejectModal, resolveModal } = useMazPromiseDialog()

  const currentModal = computed(() => {
    return modalState.value.find(
      ({ id }) => id === props.identifier,
    ) as ModalState
  })
</script>
