<template>
  <div
    :style="[wrapperStyle, { fontSize: size }]"
    class="maz-slider"
    :class="[`maz-slider--${color}`]"
    @mousemove.passive="handleMousemove"
    @mouseup.passive="handleMouseup"
    @mouseleave.passive="handleMouseup"
    @touchmove.passive="handleMousemove"
  >
    <!-- @touchmove="handleToucheMove" -->
    <div
      ref="MazSlider"
      class="maz-slider__bar maz-flex maz-items-center maz-justify-center"
      role="slider"
    >
      <div
        v-for="(div, i) in dividers"
        :key="`divider-${i}`"
        :style="[div]"
        class="maz-slider__divider"
      />

      <!-- eslint-disable -->
      <button
        v-for="(btn, i) in computedValue"
        :key="`cursor-${i}`"
        type="button"
        :data-label="getLabel(i)"
        class="maz-slider__btn maz-flex maz-items-center maz-justify-center maz-bg-gray-50"
        :class="{
          'active-cursor': i === activeCursor && !noCursorAnim,
        }"
        :style="[buttonStyles[i]]"
        @mousedown.passive="handleMousedown($event, i)"
        @touchstart.passive="handleMousedown($event, i)"
        @focus.passive="handleMousedown($event, i)"
        @blur.passive="blurCursor(i)"
        @touchend.passive="blurCursor(i)"
        @keydown.passive="cursorKeyDown($event, i)"
      >
        <span class="maz-flex maz-items-center maz-text-gray-900">
          {{ tmpValues?.[i] }}
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import { debounce } from '@/utils/debounce'

  import {
    defineComponent,
    ref,
    CSSProperties,
    watch,
    computed,
    onMounted,
    PropType,
    onBeforeUnmount,
    nextTick,
  } from 'vue'

  import { getPos, isBetween, getOpacityCoeff } from './utils'

  export default defineComponent({
    props: {
      // Array of cursors values
      modelValue: {
        type: [Number, Array] as PropType<number | number[]>,
        required: true,
        validator: (value: string) => {
          return (
            ['number'].includes(typeof value) ||
            Array.isArray(value) ||
            value === null
          )
        },
      },
      // array of cursors label
      labels: { type: Array, default: undefined },
      // min value of sliders
      min: { type: Number, default: 0 },
      // max value of sliders
      max: { type: Number, default: 100 },
      // height size of slider bar
      size: { type: String, default: undefined },
      // remove div in different colors
      noDivider: { type: Boolean, default: false },
      // become a logarithmic slider (exponential)
      log: { type: Boolean, default: false },
      // main slider color
      color: {
        type: String,
        default: 'primary',
        validator: (value: string) => {
          return ['primary', 'warning', 'secondary', 'danger'].includes(value)
        },
      },
      // disables cursor animation when active
      noCursorAnim: { type: Boolean, default: false },
    },

    emits: ['update:model-value'],
    setup(props, { emit }) {
      const MazSlider = ref<HTMLDivElement>()

      const activeCursor = ref<number>()
      const buttonPositions = ref<number[]>()
      const tmpValues = ref<number[]>()

      const buttonStyles = ref<CSSProperties[]>([])
      const dividers = ref<CSSProperties[]>([])

      // COMPUTED

      const computedValue = computed<number[]>(() => {
        const { modelValue } = props
        return typeof modelValue === 'number'
          ? [modelValue]
          : modelValue
          ? modelValue
          : [0]
      })
      const minLog = computed(() => {
        return Math.log(props.min || 1)
      })
      const maxLog = computed(() => {
        return Math.log(props.max)
      })
      const scale = computed(() => {
        const { min, max } = props
        return (maxLog.value - minLog.value) / (max - min)
      })
      const range = computed(() => {
        const { min, max } = props
        return max - min
      })
      const wrapperStyle = computed(() => {
        return {
          paddingTop: props.labels ? `2.5em` : `1em`,
        }
      })
      const hasMultipleValues = computed(() => Array.isArray(props.modelValue))

      watch(
        () => props.modelValue,
        () => (tmpValues.value = computedValue.value),
        { immediate: true },
      )
      watch(
        () => [computedValue.value, props.min, props.max, props.log].join(),
        () => buildComponent(true),
      )

      const resizeListenerFunction = debounce(() => buildComponent(), 300)

      onMounted(() => {
        buildComponent(true)

        window.addEventListener('resize', resizeListenerFunction)
      })

      onBeforeUnmount(() => {
        window.removeEventListener('resize', resizeListenerFunction)
      })

      const buildComponent = async (emitValue?: boolean) => {
        if (emitValue === true) checkValues()
        await calcPos()
        await nextTick()
        computedValue.value.forEach((_: any, i: number) => setBtnDividers(i))
      }
      const cursorKeyDown = (event: KeyboardEvent, i: number) => {
        // ArrowLeft
        if (event.code === 'ArrowLeft') {
          if (
            tmpValues.value &&
            isBetween(
              tmpValues.value[i] - 1,
              tmpValues.value[i - 1],
              tmpValues.value[i + 1],
              'minus',
            )
          ) {
            tmpValues.value[i]--
            emitValue(tmpValues.value)
          }
        }
        // ArrowRight
        else if (event.code === 'ArrowRight') {
          if (
            tmpValues.value &&
            isBetween(
              tmpValues.value[i] + 1,
              tmpValues.value[i - 1],
              tmpValues.value[i + 1],
              'plus',
            )
          ) {
            tmpValues.value[i]++
            emitValue(tmpValues.value)
          }
        }
      }
      const blurCursor = (i: number) => {
        activeCursor.value = undefined
        setBtnStyle(i)
      }
      const checkValues = () => {
        // check if values are not below the min or above the max
        const { min, max } = props
        const valuesChecked = computedValue.value.map((v: number) =>
          v < min ? min : v > max ? max : v,
        )
        emitValue(valuesChecked)
        tmpValues.value = valuesChecked
      }
      const emitValue = (values: number[]) => {
        let valueToEmit = hasMultipleValues.value ? values.slice() : values[0]
        emit('update:model-value', valueToEmit)
      }
      const getLabel = (i: number) => {
        const { labels } = props
        return labels ? labels[i] : undefined
      }
      const setBtnDividers = (i: number) => {
        setBtnStyle(i)
        if (!props.noDivider) setDividers()
      }
      const setBtnStyle = async (i: number) => {
        await nextTick()

        const currentCursor = document.querySelectorAll(
          '.maz-slider .maz-slider__btn',
        )

        // get width of text in cursor + padding/space
        if (currentCursor) {
          const cursor = currentCursor[i]
          const width = cursor?.clientWidth + 16

          const btnStyle = {
            left:
              typeof buttonPositions.value?.[i] === 'number'
                ? `${buttonPositions.value[i] - width / 2 ?? 1}px`
                : '',
          }

          buttonStyles.value[i] = btnStyle
        }
      }

      const setDividers = () => {
        if (buttonPositions.value) {
          // remove getters/setters of vue
          const base = buttonPositions.value.slice()
          // add an item to generate one more divider
          base.push(0)
          const baseLength = base.length
          const middle = Math.round(baseLength / 2)
          // generate dividers items with style
          dividers.value = base.map((pos, i) => ({
            left: `${i === 0 ? 0 : base[i - 1]}px`, // ATTENTION: buttonPositions.value[i - 1]
            right: `${
              i + 1 === baseLength ? 0 : 'calc( 100% - ' + pos + 'px )'
            }`,
            backgroundColor:
              middle === i + 1
                ? undefined
                : i < middle
                ? // ligthen
                  `rgba(255, 255, 255, ${getOpacityCoeff(
                    i,
                    middle,
                    baseLength,
                  )})`
                : // darken
                  `rgba(0, 0, 0, ${getOpacityCoeff(i, middle, baseLength)})`,
          }))
        }
      }

      const calcPos = async () => {
        await nextTick()
        const { min, max, log } = props
        const barWidth = MazSlider.value?.clientWidth
        if (barWidth) {
          buttonPositions.value = tmpValues.value?.map((v) =>
            log
              ? (barWidth / max) *
                (min + (Math.log(v) - minLog.value) / scale.value)
              : (barWidth / range.value) * (v - min),
          )
        } else {
          console.log('MazSlider ref not found')
        }
      }
      const getCursorsValues = async () => {
        await nextTick()
        const { max, min, log } = props
        const barWidth = MazSlider.value?.clientWidth
        if (barWidth) {
          return log
            ? buttonPositions.value?.map((pos: number) => {
                const position = pos / (barWidth / max)
                const value = Math.exp(
                  (position - min) * scale.value + minLog.value,
                )
                return Math.round(value)
              })
            : buttonPositions.value?.map(
                (pos: number) =>
                  Math.round(pos / (barWidth / range.value)) + min,
              )
        } else {
          console.log('MazSlider ref not found')
        }
      }
      const handleMousedown = (
        event: MouseEvent | TouchEvent | FocusEvent,
        i: number,
      ) => {
        if (activeCursor.value !== undefined) return

        activeCursor.value = i
        setBtnDividers(i)
      }
      const handleMouseup = async () => {
        if (activeCursor.value === undefined) return

        const values = await getCursorsValues()

        if (values) emitValue(values)

        activeCursor.value = undefined
      }
      const handleMousemove = async (event: MouseEvent | TouchEvent) => {
        await nextTick()
        if (activeCursor.value === undefined) return

        const barWidth = MazSlider.value?.clientWidth

        if (buttonPositions.value) {
          const prevValue = buttonPositions.value[activeCursor.value - 1] || 0
          const nextValue =
            buttonPositions.value[activeCursor.value + 1] || barWidth

          if (!MazSlider.value)
            return console.error('[MazSlider] MazSlider not available')

          buttonPositions.value[activeCursor.value] = (() => {
            const movement = getPos(event, MazSlider.value).x

            if (movement < prevValue) {
              return prevValue
            } else if (nextValue && movement > nextValue) {
              return nextValue
            }

            return movement
          })()

          tmpValues.value = await getCursorsValues()

          setBtnDividers(activeCursor.value)
        }
      }

      return {
        activeCursor,
        buttonStyles,
        dividers,
        tmpValues,
        wrapperStyle,
        computedValue,
        MazSlider,
        handleMousemove,
        handleMouseup,
        handleMousedown,
        blurCursor,
        cursorKeyDown,
        getLabel,
      }
    },
  })
</script>

<style lang="postcss" scoped>
  .maz-slider {
    @apply maz-py-[1em] maz-px-[1.5em];

    &__bar {
      position: relative;
      @apply maz-h-[0.5em] maz-rounded-full;
    }

    &__divider {
      position: absolute;
      border-radius: 2em;
      height: 100%;
    }

    &__btn {
      position: absolute;
      outline: none;
      cursor: pointer;
      font-size: 1em;
      font-weight: bold;
      line-height: 1;
      transition: box-shadow 300ms ease-in-out, width 300ms ease-in-out,
        transform 300ms ease-in-out, background-color 300ms ease-in-out;
      z-index: 1;
      user-select: none;

      @apply maz-rounded-full maz-bg-gray-50 maz-px-[0.5em] maz-py-[0.25em] maz-text-gray-900 maz-drop-shadow;

      & span {
        @apply maz-mx-[0.25em];
      }

      &.active-cursor {
        transform: scale(1.3);

        @apply maz-z-2;
      }

      &::before {
        content: attr(data-label);
        font-size: 0.8em;
        top: -1.5em;

        @apply maz-absolute maz-font-medium maz-text-gray-900;
      }

      &:hover {
        @apply maz-bg-gray-100;
      }
    }

    &--primary {
      & .maz-slider {
        &__bar {
          @apply maz-bg-primary;
        }

        &__btn.active-cursor {
          @apply maz-border-2 maz-border-primary maz-shadow-lg;
        }
      }
    }
  }
</style>
