<template>
  <MazDialog
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template #title>
      <slot name="title" />
    </template>
    <template #default>
      <slot name="default" />
    </template>
    <template #footer>
      <slot name="footer">
        <MazBtn @click="confirm">
          <slot name="confirm-text"> Confirmer </slot>
        </MazBtn>
      </slot>
    </template>
  </MazDialog>
</template>

<script lang="ts" setup>
  import MazDialog from '@/components/lib/ui/MazDialog.vue'
  import MazBtn from './MazBtn.vue'

  defineProps({
    modelValue: { type: Boolean, default: false },
  })

  const emits = defineEmits(['update:modelValue', 'confirm'])

  const confirm = () => {
    emits('confirm')
    emits('update:modelValue', false)
  }
</script>
