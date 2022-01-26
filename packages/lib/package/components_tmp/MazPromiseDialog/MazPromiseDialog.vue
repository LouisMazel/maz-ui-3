<template>
  <MazDialog
    v-if="currentModal"
    v-bind="$attrs"
    :title="data.title"
    :model-value="currentModal?.isActive"
    @update:model-value="rejectModal(currentModal)"
  >
    <template #default>
      <p>{{ data.message }}</p>
    </template>
    <template #footer>
      <div class="maz-space-x-2">
        <MazBtn color="secondary" pastel @click="rejectModal(currentModal)">
          Annuler
        </MazBtn>
        <MazBtn color="danger" @click="resolveModal(currentModal)">
          Confirmer
        </MazBtn>
      </div>
    </template>
  </MazDialog>
</template>

<script lang="ts" setup>
  import { PropType, computed } from 'vue'
  import MazDialog from '../MazDialog.vue'
  import MazBtn from '../MazBtn.vue'
  import { useMazPromiseDialog, ModalState } from './use-maz-promise-dialog'

  export interface ModalData {
    title: string
    message: string
  }
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
