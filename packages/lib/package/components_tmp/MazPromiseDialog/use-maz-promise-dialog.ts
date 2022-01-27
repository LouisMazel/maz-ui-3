import { ref } from 'vue'

export interface ModalState {
  id: string
  isActive: boolean
  resolve: (value: any) => void
  reject?: (reason?: any) => void
}

export interface ModalData {
  title: string
  message: string
}

const confirmDialogData = ref<ModalData>()

const modalState = ref<ModalState[]>([])

const showModalAndWaitChoice = (identifier: string, callback?: () => any) => {
  return new Promise((resolve, reject) => {
    modalState.value = [
      ...modalState.value,
      {
        id: identifier,
        isActive: true,
        resolve: async () => {
          await callback?.()
          resolve(true)
        },
        reject,
      },
    ]
  })
}

const removeModalFromState = (identifier: string) => {
  modalState.value = modalState.value.filter(({ id }) => id !== identifier)
  return modalState.value
}

const rejectModal = (currentModal: ModalState) => {
  if (currentModal) {
    currentModal.reject?.(false)
    currentModal.isActive = false

    setTimeout(() => {
      removeModalFromState(currentModal.id)
    }, 500)
  }
}

const resolveModal = (currentModal: ModalState) => {
  if (currentModal) {
    currentModal.resolve?.(true)
    currentModal.isActive = false

    setTimeout(() => {
      removeModalFromState(currentModal.id)
    }, 500)
  }
}

export const useMazPromiseDialog = () => ({
  confirmDialogData,
  modalState,
  showModalAndWaitChoice,
  removeModalFromState,
  rejectModal,
  resolveModal,
})
