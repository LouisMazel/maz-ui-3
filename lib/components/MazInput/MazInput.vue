<template>
  <div
    class="m-input"
    :class="[
      {
        '-is-focused': isFocused,
        '-should-up': shouldUp,
        '-has-label': hasLabel,
        '-is-disabled': disabled,
        '-is-readonly': readonly,
        '-has-z-2': error || warning || success,
      },
      $attrs.class,
    ]"
    :style="{ fontSize: size }"
  >
    <div class="m-input-wrapper" :class="[inputClasses, borderStyle, { 'maz-rounded-lg': !noRadius }]">
      <div v-if="hasLeftPart()" class="m-input-wrapper-left">
        <slot v-if="$slots['left-icon']" name="left-icon"></slot>
      </div>

      <div class="m-input-wrapper-input">
        <input
          :id="id"
          ref="input"
          :value="modelValue"
          :type="inputType"
          :name="name"
          v-bind="$attrs"
          :placeholder="computedPlaceholder"
          :aria-label="label || placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :required="required"
          class="m-input-input"
          v-on="{
            input: (event: Event) => emitValue((event.target as HTMLInputElement).value),
            blur,
            focus,
          }"
        />

        <label
          v-if="label || hint"
          ref="label"
          :for="id"
          class="m-input-label"
          :class="[
            {
              '!maz-text-danger-600': error,
              '!maz-text-success-600': success,
              '!maz-text-warning-600': warning,
            },
          ]"
        >
          {{ hint || label }}
          <sup v-if="required">*</sup>
        </label>
      </div>

      <div v-if="hasRightPart()" class="m-input-wrapper-right">
        <slot v-if="$slots['right-icon']" name="right-icon"></slot>

        <MazBtn
          v-if="isPasswordType"
          color="transparent"
          tabindex="-1"
          :size="size"
          class="!maz-p-[0.5em]"
          @click.stop="hasPasswordVisible = !hasPasswordVisible"
        >
          <MazIcon v-if="hasPasswordVisible" name="EyeOff" class="maz-text-gray-400 maz-h-[1.5em] maz-w-[1.5em]" />
          <MazIcon v-else name="Eye" class="maz-text-gray-400 maz-h-[1.5em] maz-w-[1.5em]" />
        </MazBtn>

        <slot v-if="$slots['valid-button'] || validButton" name="valid-button">
          <MazBtn
            color="transparent"
            :disabled="disabled"
            tabindex="-1"
            :loading="validButtonLoading"
            class="m-input-valid-button !maz-p-[0.5em]"
            :size="size"
            type="submit"
          >
            <MazIcon class="maz-text-gray-400 maz-h-[1.5em] maz-w-[1.5em]" name="Check" />
          </MazBtn>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  /**
   * # Composent input wrapper
   */

  import { computed, defineComponent, onMounted, ref, PropType } from 'vue'
  import { debounce } from '~utils/debounce'
  import MazBtn from '@/components/lib/ui/MazBtn.vue'
  import MazIcon from '../ui/MazIcon.vue'

  export default defineComponent({
    components: { MazBtn, MazIcon },
    inheritAttrs: false,
    props: {
      modelValue: {
        type: [String, Number] as PropType<string | number | null | undefined | boolean>,
        default: undefined,
      },
      placeholder: { type: String, default: undefined },
      label: { type: String, default: undefined },
      name: { type: String, default: 'input' },
      type: {
        type: String,
        default: 'text',
        validator: (value: string) => {
          return ['text', 'date', 'number', 'tel', 'search', 'url', 'password', 'month', 'time', 'week', 'email'].includes(value)
        },
      },
      required: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      readonly: { type: Boolean, default: false },
      id: { type: String, default: 'MazInput' },
      error: { type: Boolean, default: false },
      success: { type: Boolean, default: false },
      warning: { type: Boolean, default: false },
      hint: { type: String, default: undefined },
      inputClasses: { type: String, default: undefined },
      noBorder: { type: Boolean, default: false },
      noRadius: { type: Boolean, default: false },
      size: { type: String, default: undefined },
      debounce: { type: Boolean, default: false },
      debounceDelay: { type: Number, default: 500 },
      validButton: { type: Boolean, default: false },
      validButtonLoading: { type: Boolean, default: false },
      autoFocus: { type: Boolean, default: false },
    },
    emits: ['focus', 'blur', 'update:modelValue'],
    setup(props, { emit, slots }) {
      const hasPasswordVisible = ref(false)
      const isFocused = ref(false)
      const input = ref<HTMLElement | undefined>()

      onMounted(() => {
        if (props.autoFocus) {
          input.value?.focus()
        }
      })

      const isPasswordType = computed(() => props.type === 'password')

      const inputType = computed(() => (hasPasswordVisible.value ? 'text' : props.type))

      const borderStyle = computed(() => {
        if (props.noBorder) return null
        if (props.error) return 'maz-border maz-border-danger'
        if (props.success) return 'maz-border maz-border-success'
        if (props.warning) return 'maz-border maz-border-warning'
        return isFocused.value ? 'maz-border maz-border-primary' : 'maz-border maz-border-gray-200'
      })

      const computedPlaceholder = computed(() => {
        const { required, placeholder } = props
        if (!placeholder) return undefined
        return required ? `${placeholder} *` : placeholder
      })

      const hasValue = computed(() => props.modelValue !== undefined && props.modelValue !== '')

      const shouldUp = computed(() => {
        return (
          (!!props.label || !!props.hint) &&
          (isFocused.value || !!hasValue.value || !!props.placeholder || ['date', 'month', 'week'].includes(props.type))
        )
      })

      const hasLabel = computed(() => !!props.label || !!props.hint)

      const hasRightPart = (): boolean =>
        !!slots['right-icon'] || isPasswordType.value || !!slots['valid-button'] || props.validButton

      const hasLeftPart = (): boolean => !!slots['left-icon']

      const focus = (event: Event) => {
        emit('focus', event)
        isFocused.value = true
      }

      const blur = (event: Event) => {
        emit('blur', event)
        isFocused.value = false
      }

      const debounceEmitValue = debounce((value: string | number) => {
        emit('update:modelValue', value)
      }, props.debounceDelay)

      const emitValue = (value: string | number) => {
        if (props.debounce) return debounceEmitValue(value)

        emit('update:modelValue', value)
      }

      return {
        shouldUp,
        hasLabel,
        computedPlaceholder,
        isPasswordType,
        inputType,
        input,
        isFocused,
        hasPasswordVisible,
        borderStyle,
        focus,
        blur,
        emitValue,
        hasRightPart,
        hasLeftPart,
      }
    },
  })
</script>

<style lang="postcss" scoped>
  .m-input {
    @apply maz-flex maz-flex-col;

    &-wrapper {
      @apply maz-relative maz-flex-1 maz-flex maz-overflow-hidden maz-bg-white maz-z-1;

      &-input {
        @apply maz-flex maz-items-center maz-relative maz-flex-1;
      }

      &-right,
      &-left {
        @apply maz-flex maz-relative maz-space-x-[0.25em] maz-z-1;
      }

      &-right {
        @apply maz-px-[0.25em];
      }

      &-left {
        @apply maz-left-[0.25em];
      }
    }

    &-input {
      @apply maz-w-full maz-block maz-outline-none maz-shadow-none maz-appearance-none maz-m-0 maz-box-border;

      @apply maz-text-[1em] maz-h-[3em] maz-py-0 maz-px-[1em];
    }

    &-label {
      @apply maz-absolute maz-block maz-pointer-events-none maz-origin-top-left maz-text-gray-500 maz-truncate maz-w-max;

      @apply maz-text-[1em] maz-left-[1em] maz-leading-[1.5em];

      transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    }

    &.-has-z-2 {
      & .m-input-wrapper {
        @apply maz-z-2;
      }
    }

    &.-should-up {
      & .m-input-label {
        transform: scale(0.8) translateY(-0.75rem);
      }
    }

    &.-is-disabled {
      & .m-input-wrapper {
        @apply maz-text-gray-500 maz-bg-gray-50;
      }

      & .m-input-input {
        @apply maz-cursor-not-allowed maz-bg-gray-50;
      }

      & .m-input-label {
        @apply maz-text-gray-300;
      }
    }

    &.-is-focused {
      & .m-input-wrapper {
        @apply maz-z-3;
      }
    }

    &.-has-label {
      .m-input-input {
        @apply maz-px-[1em] maz-pt-[1em];
      }
    }
  }
</style>
