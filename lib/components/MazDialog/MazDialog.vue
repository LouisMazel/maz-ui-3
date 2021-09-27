<template>
  <transition name="maz-dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave">
    <div
      v-if="value"
      class="maz-base-component maz-dialog maz-dialog--mask"
      :class="{
        'maz-dialog--success': success,
        'maz-dialog--danger': danger,
        'maz-dialog--fullsize': fullsize,
        'maz-is-dark': dark,
      }"
    >
      <div class="maz-dialog__wrapper maz-flex maz-align-center">
        <!-- v-click-outside="vcoConfig" -->
        <div
          :style="widthStyle"
          class="
            maz-dialog__container
            maz-dialog-animation maz-elevation maz-flex maz-direction-column maz-bg-color maz-border-radius
          "
        >
          <div v-if="!noHeader" class="maz-dialog__header maz-flex maz-space-between maz-align-center maz-p-3">
            <!-- Replace the title element text -->
            <slot name="title">
              <!-- `<p class="maz-dialog__header__title">Title header</p>` -->
              <p class="maz-dialog__header__title">
                {{ title }}
              </p>
            </slot>

            <div v-if="!noClose" class="maz-flex close-modal" @click="$emit('update:modelValue', false)">
              <i class="material-icons"> close </i>
            </div>
          </div>
          <div class="maz-dialog__body maz-p-3 maz-text-color">
            <!-- Replace the content -->
            <slot>
              <!-- `<p>Content</p>` -->
              <p>Content</p>
            </slot>
          </div>
          <div v-if="!noFooter" class="maz-dialog__footer maz-flex maz-align-end maz-justify-end maz-p-3">
            <!-- Replace the footer bar -->
            <slot name="footer">
              <!-- Two `<MazBtn />` -->
              <MazBtn color="default" outline size="md" @click="closeDialog"> Close </MazBtn>
              <MazBtn v-if="!noConfirm" class="maz-ml-3" size="md" :color="buttonConfirmColor" @click="onConfirm($event)">
                Confirm
              </MazBtn>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import { computed, defineComponent, onBeforeUnmount, watch, nextTick } from 'vue'
  // import vClickOutside from 'v-click-outside'
  import MazBtn from './../MazBtn/MazBtn.vue'

  const addListerner = (keyPressHandler: (e: KeyboardEvent) => void) => {
    if (typeof window === 'undefined') return null
    window.addEventListener('keydown', keyPressHandler)
  }

  const removeListerner = (keyPressHandler: (e: KeyboardEvent) => void) => {
    if (typeof window === 'undefined') return null
    window.removeEventListener('keydown', keyPressHandler)
  }

  export default defineComponent({
    name: 'MazDialog',
    components: { MazBtn },
    // directives: {
    //   clickOutside: vClickOutside.directive
    // },
    props: {
      // `true` if dialog is open / `false` if is close
      modelValue: { type: Boolean, required: true },
      // is the `max-width` of the dialog (number in pixels)
      maxWidth: { type: [Number || String], default: null },
      // is the `width` of the dialog (number in pixels)
      width: { type: [Number || String], default: null },
      // if is `true`, is not possible to close he dialog with a click outside
      persistent: { type: Boolean, default: false },
      // remove the header
      noHeader: { type: Boolean, default: false },
      // remove the footer
      noFooter: { type: Boolean, default: false },
      // remove the close button
      noClose: { type: Boolean, default: false },
      // remove the confirm button
      noConfirm: { type: Boolean, default: false },
      // add "success" style to the dialog
      success: { type: Boolean, default: false },
      // add "danger" style to the dialog
      danger: { type: Boolean, default: false },
      // add "dark" style to the dialog
      dark: { type: Boolean, default: false },
      // exclude elements classes (elements sometimes can close the dialog)
      excludedClasses: { type: Array, default: Array },
      // make dialog fullsize
      fullsize: { type: Boolean, default: false },
      // title of the dialog
      title: { type: String, default: 'Header title' },
    },
    emits: ['update:modelValue', 'open', 'close', 'confirm'],
    setup(props, { emit }) {
      const widthStyle = computed(() => {
        const { fullsize, maxWidth, width } = props
        return {
          maxWidth: fullsize && !maxWidth ? null : Number.isInteger(maxWidth) ? `${maxWidth}px` : maxWidth,
          width: fullsize && !width ? null : Number.isInteger(width) ? `${width}px` : width,
        }
      })
      const buttonConfirmColor = computed(() => (props.danger ? 'danger' : props.success ? 'success' : 'primary'))

      const preventClickOutside = (event?: { target: HTMLElement }) => {
        const { excludedClasses } = props
        if (!event || !event?.target || !event?.target.classList) return true

        const eventClasses = new Array(event.target.classList)
        return !eventClasses.some((c) => excludedClasses.includes(c))
      }

      const closeDialog = () => {
        if (!props.persistent) {
          // sent when dialog is close
          // @arg Boolean `false`
          emit('update:modelValue', false)
        }
      }

      const vcoConfig = computed(() => ({
        handler: closeDialog,
        middleware: preventClickOutside,
        events: ['click'],
        isActive: !props.fullsize,
      }))

      const keyPressHandler = (e: KeyboardEvent) => {
        if (e.keyCode === 27) {
          // escape
          closeDialog()
        }
      }

      const afterEnter = (e: Event) => {
        // sent when after dialog is open
        // @arg event
        emit('open', e)
      }
      const afterLeave = (e: Event) => {
        // sent when after dialog is close
        // @arg event
        emit('close', e)
      }
      const onConfirm = (e: Event) => {
        // sent when you click on confirm button
        // @arg event
        emit('confirm', e)
      }

      onBeforeUnmount(() => {
        removeListerner(keyPressHandler)
      })

      watch(
        () => props.modelValue,
        async (value) => {
          if (value) {
            addListerner(keyPressHandler)
            await nextTick()
          } else removeListerner(keyPressHandler)
        }
      )

      return {
        widthStyle,
        buttonConfirmColor,
        vcoConfig,
        afterEnter,
        afterLeave,
        onConfirm,
        closeDialog,
      }
    },
  })
</script>
