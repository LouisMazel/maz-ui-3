<template>
  <div
    ref="parent"
    :class="[
      {
        'is-focused': isFocus || focus,
        'is-valid': success,
        'has-value': modelValue,
        'is-textarea': textarea,
        'has-error': error,
        'has-warning': warning,
        'is-disabled': disabled,
        'maz-is-dark': dark,
        'has-hint': hint,
        'has-no-label': !hasLabel && !hint,
        'has-left-icon': hasLeftIcon(),
      },
      `maz-input--${size}`,
      `has-${leftNumberIcon}-right-icon`,
      `maz-input--${color}`,
    ]"
    class="maz-base-component maz-input maz-border maz-border-color maz-border-color-hover maz-border-solid maz-border-radius"
    @click="focusInput"
  >
    <div
      v-if="hasLeftIcon()"
      class="maz-input__icon maz-flex left"
      :class="[textarea ? 'maz-align-start maz-pt-2' : 'maz-align-center']"
    >
      <!-- Icon slot (`icon-left`) -->
      <slot :name="`icon-left`">
        <!-- none -->
        <i class="material-icons">{{ leftIconName }}</i>
      </slot>
    </div>

    <div
      v-if="hasRightIcon()"
      class="maz-input__icon maz-flex right"
      :class="[textarea ? 'maz-align-start maz-pt-2' : 'maz-align-center']"
    >
      <!-- Icon slot (`icon-right`) -->
      <slot :name="`icon-right`">
        <!-- none -->
        <i class="material-icons">{{ rightIconName }}</i>
      </slot>
    </div>

    <input
      v-if="!textarea"
      :id="id"
      ref="MazInput"
      :value="modelValue"
      v-bind="$attrs"
      :placeholder="placeholderValue"
      :type="inputType"
      class="maz-input__input maz-border-radius"
      :aria-label="placeholder"
      :class="{
        'has-right-icon': hasClearBtn || hasPasswordBtn || hasRightIcon(),
      }"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      @keydown="onKeyDown"
      @keyup="onKeyUp"
      @focus="onFocus"
      @blur="onBlur"
      @paste="onPaste"
      @change="onChange"
      @input="emitValue"
      @click="$emit('click', $event)"
    />
    <textarea
      v-else
      :id="id"
      ref="MazInput"
      :value="modelValue"
      v-bind="$attrs"
      :placeholder="placeholderValue"
      :type="type"
      :required="required"
      :readonly="readonly"
      class="maz-input__input maz-textarea"
      @keydown="onKeyDown"
      @keyup="onKeyUp"
      @focus="onFocus"
      @blur="onBlur"
      @paste="onPaste"
      @change="onChange"
      @input="emitValue"
      @click="$emit('click', $event)"
    />
    <label
      v-if="hasLabel || hint"
      ref="label"
      :for="id"
      :class="error ? 'maz-text-danger' : null"
      class="maz-input__label"
      tabindex="-1"
      @click="focusInput"
    >
      {{ hintValue || placeholderValue }}
    </label>
    <transition-group name="maz-scale">
      <button
        v-if="hasClearBtn"
        key="clear-button"
        class="maz-input__toggle-btn --clear maz-flex maz-flex-center"
        title="clear"
        type="button"
        tabindex="-1"
        :class="{ 'has-right-icon': hasRightIcon() }"
        @click.stop="clear"
      >
        <i class="maz-input__toggle-btn__icon material-icons"> close </i>
      </button>

      <button
        v-if="hasPasswordBtn"
        key="password-button"
        class="maz-input__toggle-btn password maz-flex maz-flex-center"
        :class="{
          'has-clear-btn': hasClearBtn,
          'has-right-icon': hasRightIcon(),
        }"
        title="clear"
        type="button"
        tabindex="-1"
        @click="showPassword = !showPassword"
      >
        <i class="maz-input__toggle-btn__icon material-icons">
          {{ showPassword ? 'visibility_off' : 'visibility' }}
        </i>
      </button>
    </transition-group>

    <div v-if="loading" class="maz-input__loader" :class="{ textarea }">
      <div class="maz-input__loader__progress-bar" />
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType, ref } from 'vue'
  import { debounce } from '../../utils'

  /**
   * > Beautiful input UI with loading & error manager
   */

  export default defineComponent({
    name: 'MazInput',
    props: {
      // value of the input
      modelValue: {
        type: [String, Number] as PropType<string | number>,
        default: null,
        validator: (value: string | number | null) => {
          return ['string', 'number'].includes(typeof value) || value === null
        },
      },
      // input id
      id: { type: String, default: null },
      // value of the input
      placeholder: { type: String, default: 'Enter text' },
      // replace the label if is present
      hint: { type: String, default: null },
      // input size (`'lg'` / `'sm'`)
      size: { type: String, default: null },
      // is the input size (`text` or `number` or `password`)
      type: { type: String as PropType<'text' | 'number' | 'password'>, default: 'text' },
      // should be a [material icon](https://material.io/resources/icons/) name
      leftIconName: { type: String, default: null },
      // should be a [material icon](https://material.io/resources/icons/) name
      rightIconName: { type: String, default: null },
      // When is `true` the input has the error style
      error: { type: Boolean, default: false },
      // When is `true` the input has the warning style
      warning: { type: Boolean, default: false },
      // When is `true` the input is disable
      disabled: { type: Boolean, default: false },
      // When is `true` the input has the dark theme
      dark: { type: Boolean, default: false },
      // When is `true` the input is on readonly mode
      readonly: { type: Boolean, default: false },
      // When is `true` the input has the valid style
      success: { type: Boolean, default: false },
      // When is `true` the input become required & has the `*` symbol
      required: { type: Boolean, default: false },
      // When is `true` the input is a textarea
      textarea: { type: Boolean, default: false },
      // When is `true` the input has a progress bar animated
      loading: { type: Boolean, default: false },
      // When is `true` the input can be clear with a button on the right
      clearable: { type: Boolean, default: false },
      // When is `true` the input has not label (top placeholder when value is not empty)
      noLabel: { type: Boolean, default: false },
      // When is `true` and is `required`, the `*` symbol is not showing
      noRequiredSymbol: { type: Boolean, default: false },
      // force focus style input
      focus: { type: Boolean, default: false },
      // color name in basic colors
      color: { type: String, default: 'primary' },
      // Add a debounce of 500ms to emit the value
      debounce: { type: Boolean, default: false },
      // Set the delay of the debounce in ms
      debounceDelay: { type: Number, default: 500 },
    },
    emits: ['update:modelValue', 'focus', 'click', 'blur', 'paste', 'change', 'clear', 'keyup', 'keydown'],
    setup(props, { emit, slots }) {
      const isFocus = ref(false)
      const MazInput = ref<HTMLElement>()
      const showPassword = ref(false)

      const debounceValue = debounce((value: string | number) => {
        // return the input value (in `@input` or `v-model`)
        // @arg input
        emit('update:modelValue', value)
      }, props.debounceDelay)

      const emitValue = (event: { target: HTMLInputElement | HTMLTextAreaElement }) => {
        const value = event.target?.value
        const valueToEmit = props.type === 'number' ? (!value ? 0 : Number(value)) : value
        if (props.debounce) return debounceValue(valueToEmit)
        emit('update:modelValue', valueToEmit)
      }

      const placeholderValue = computed(() => {
        const { placeholder, required, noRequiredSymbol } = props
        return required && placeholder && !noRequiredSymbol ? `${placeholder} *` : placeholder
      })
      const hintValue = computed(() => {
        const { hint, required } = props
        return required && hint ? `${hint} *` : hint
      })
      const hasLabel = computed(() => !props.noLabel)
      const inputType = computed(() => (showPassword.value ? 'text' : props.type))
      const hasPasswordBtn = computed(() => props.type === 'password' && props.modelValue)
      const hasClearBtn = computed(() => props.clearable && props.modelValue && !props.textarea)
      const leftNumberIcon = computed(() => {
        const array = [!!hasRightIcon(), !!hasClearBtn.value, !!hasPasswordBtn.value]
        return array.filter((a) => a).length
      })

      const hasLeftIcon = () => props.leftIconName || slots['icon-left']
      const hasRightIcon = () => props.rightIconName || slots['icon-right']
      const focusInput = () => MazInput.value?.focus()

      const onFocus = (e: Event) => {
        // sent the focus event
        // @arg event
        emit('focus', e)
        isFocus.value = true
      }
      const onBlur = (e: Event) => {
        // sent the blur event
        // @arg event
        emit('blur', e)
        isFocus.value = false
      }
      const onPaste = (e: Event) => {
        // sent when text is past in the textfield
        // @arg event
        emit('paste', e)
      }
      const onChange = (e: Event) => {
        // sent on input change
        // @arg event
        emit('change', e)
      }

      const clear = () => {
        emit('update:modelValue', props.type === 'number' ? 0 : '')
        // sent when the input is clear
        emit('clear')
      }

      const onKeyUp = (e: Event) => {
        // sent the keyup event
        // @arg event
        emit('keyup', e)
      }
      const onKeyDown = (e: Event) => {
        // sent the keydown event
        // @arg event
        emit('keydown', e)
      }

      return {
        emitValue,
        MazInput,
        isFocus,
        showPassword,
        placeholderValue,
        hintValue,
        hasLabel,
        inputType,
        hasPasswordBtn,
        hasClearBtn,
        hasLeftIcon,
        leftNumberIcon,
        hasRightIcon,
        onFocus,
        focusInput,
        onBlur,
        onPaste,
        onChange,
        clear,
        onKeyUp,
        onKeyDown,
      }
    },
  })
</script>
