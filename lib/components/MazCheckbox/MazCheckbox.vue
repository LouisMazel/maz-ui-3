<template>
  <div class="maz-base-component maz-checkbox" :class="[`maz-checkbox--${color}`]">
    <input
      :id="id"
      :checked="value"
      v-bind="$attrs"
      :name="name"
      type="checkbox"
      class="maz-mr-2"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label :for="uniqueId" class="maz-m-0 maz-flex maz-align-center">
      <slot />
    </label>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'MazCheckbox',
    props: {
      modelValue: { type: Boolean, required: true },
      id: { type: String, default: '1' },
      color: { type: String, default: 'primary' },
      name: { type: String, default: 'maz-checkbox' },
    },
    emits: ['update:modelValue'],
  })
</script>
