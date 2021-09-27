<template>
  <div class="n-input" :class="[`-${size}`, { '-is-focused': isFocused, '-should-up': shouldUp, '-has-label': hasLabel }]">
    <div
      class="n-input-wrapper"
      :class="[
        {
          'maz-mb-5': !hint && !noMargin,
          'maz-mt-3': !noMargin,
        },
      ]"
    >
      <input
        :id="id"
        ref="input"
        :value="modelValue"
        v-bind="$attrs"
        :type="inputType"
        :name="name"
        :placeholder="computedPlaceholder"
        :aria-label="label || placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        class="n-input-input maz-rounded"
        :class="[inputClasses, borderColor]"
        v-on="{
          input: (event) => $emit('update:modelValue', event.target.value),
          blur,
          focus,
        }"
      />

      <label v-if="label" ref="label" :for="id" class="n-input-label">
        {{ label }}
        <sup v-if="required">*</sup>
      </label>

      <i v-if="isPasswordType" class="n-input-password-icon" @click="hasPasswordVisible = !hasPasswordVisible">
        <!-- <NIcon :name="hasPasswordVisible ? 'invisible' : 'eye'" class="eye-icon" /> -->
      </i>

      <div v-if="$slots['right-icon']" class="n-input-right-icon">
        <slot name="right-icon"></slot>
      </div>
    </div>

    <div
      v-if="hint"
      class="n-input-message maz-text-xs maz-h-4 maz-mt-1"
      :class="{
        'maz-text-danger-700': error,
        'maz-text-success-700': success,
        'maz-text-warning-700': warning,
      }"
    >
      {{ hint }}
    </div>
  </div>
</template>

<script lang="ts">
  /**
   * # Composent input wrapper
   */

  import { computed, defineComponent, PropType, ref } from 'vue'

  export default defineComponent({
    name: 'MazInput2',
    inheritAttrs: false,
    props: {
      modelValue: { type: [String, Number], default: null },
      placeholder: { type: String, default: null },
      label: { type: String, default: null },
      name: { type: String, default: 'input' },
      type: {
        type: String as PropType<HTMLInputElement['type']>,
        default: 'text',
        validator: (value: string) => {
          return ['text', 'date', 'number', 'tel', 'search', 'url', 'password', 'month', 'time', 'week', 'email'].includes(value)
        },
      },
      required: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      readonly: { type: Boolean, default: false },
      id: { type: String, default: null },
      error: { type: Boolean, default: false },
      success: { type: Boolean, default: false },
      warning: { type: Boolean, default: false },
      hint: { type: String, default: null },
      inputClasses: { type: String, default: null },
      noBorder: { type: Boolean, default: false },
      noMargin: { type: Boolean, default: false },
      size: {
        type: String,
        default: 'md',
        validator: (value: string) => {
          return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
        },
      },
    },
    emits: ['update:modelValue', 'focus', 'blur'],
    setup(props, { emit }) {
      const hasPasswordVisible = ref(false)
      const isFocused = ref(false)

      const isPasswordType = computed(() => props.type === 'password')
      const inputType = computed(() => (hasPasswordVisible.value ? 'text' : props.type))
      const borderColor = computed(() => {
        if (props.noBorder) return null
        if (props.error) return 'maz-border-2 maz-border-danger'
        if (props.success) return 'maz-border-2 maz-border-success'
        if (props.warning) return 'maz-border-2 maz-border-warning'
        return isFocused.value ? 'maz-border-2 maz-border-blue-700' : 'maz-border-2 maz-border-gray-400'
      })
      const computedPlaceholder = computed(() => {
        const { required, placeholder } = props
        if (!placeholder) return null
        return required ? `${placeholder} *` : placeholder
      })
      const shouldUp = computed(() => {
        return (
          !!props.label &&
          (isFocused.value || !!props.modelValue || !!props.placeholder || ['date', 'month', 'week'].includes(props.type))
        )
      })
      const hasLabel = computed(() => !!props.label)

      const focus = (event: Event) => {
        emit('focus', event)
        isFocused.value = true
      }

      const blur = (event: Event) => {
        emit('blur', event)
        isFocused.value = false
      }

      return {
        shouldUp,
        hasLabel,
        computedPlaceholder,
        isPasswordType,
        inputType,
        isFocused,
        hasPasswordVisible,
        borderColor,
        focus,
        blur,
      }
    },
  })
</script>

<style lang="postcss" scoped>
  /* stylelint-disable no-descending-specificity */
  .n-input {
    @apply maz-flex maz-flex-col;

    &-wrapper {
      @apply maz-flex maz-items-center maz-relative maz-flex-1;
    }

    &-input {
      @apply maz-w-full maz-block maz-outline-none maz-bg-white maz-shadow-none maz-appearance-none maz-m-0 maz-box-border;

      padding: 0 1rem;
      transition: all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    }

    &.-has-label {
      .n-input-input {
        padding: 0.75rem 1rem 0;
      }
    }

    &-label {
      @apply maz-absolute maz-block maz-pointer-events-none maz-origin-top-left maz-text-gray-500;

      transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    }

    &-password-icon {
      @apply maz-absolute maz-right-3 maz-cursor-pointer maz-text-2xl maz-text-gray-400;
    }

    &-right-icon {
      @apply maz-absolute maz-right-2;
    }

    &.-xs {
      .n-input-input {
        @apply maz-text-sm maz-h-10;
      }

      .n-input-label {
        @apply maz-text-sm maz-left-4 maz-leading-4;
      }

      &.-should-up {
        & .n-input-label {
          transform: scale(0.625) translateY(-0.6rem);
        }
      }
    }

    &.-sm {
      .n-input-input {
        @apply maz-text-sm maz-h-11;
      }

      .n-input-label {
        @apply maz-text-sm maz-left-4 maz-leading-5;
      }

      &.-should-up {
        & .n-input-label {
          transform: scale(0.625) translateY(-0.6rem);
        }
      }
    }

    &.-md {
      .n-input-input {
        @apply maz-text-base maz-h-12;
      }

      .n-input-label {
        @apply maz-text-base maz-left-4 maz-leading-6;
      }

      &.-should-up {
        & .n-input-label {
          transform: scale(0.625) translateY(-0.625rem);
        }
      }
    }

    &.-lg {
      .n-input-input {
        @apply maz-text-base maz-h-14;
      }

      .n-input-label {
        @apply maz-text-base maz-left-4 maz-leading-7;
      }

      &.-should-up {
        & .n-input-label {
          transform: scale(0.725) translateY(-0.725rem);
        }
      }
    }

    &.-xl {
      .n-input-input {
        @apply maz-text-base maz-h-16;
      }

      .n-input-label {
        @apply maz-text-base maz-left-4 maz-leading-8;
      }

      &.-should-up {
        & .n-input-label {
          transform: scale(0.825) translateY(-0.925rem);
        }
      }
    }
    /* stylelint-enable no-descending-specificity */
  }
</style>
