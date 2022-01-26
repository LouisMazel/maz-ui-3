<template>
  <MazInput
    v-model="displayPrice"
    class="maz-base-component maz-input-price"
    v-bind="$attrs"
    left-icon-name="toll"
    @focus="isActive = true"
    @blur="isActive = false"
  />
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from '@nuxtjs/composition-api'

  export default defineComponent({
    name: 'MazInputPrice',
    props: {
      value: { type: [Number, String], default: null },
      currency: { type: String, default: 'EUR' },
      locale: { type: String, default: 'fr-FR' },
      min: { type: Number, default: 0 },
      max: { type: Number, default: Infinity },
    },
    setup(props, { emit, root: { $filters, $nextTick } }) {
      const isActive = ref(false)
      const valueString = computed(() =>
        typeof props.value === 'number' ? props.value.toString() : props.value,
      )
      const valueNumber = computed(() =>
        typeof props.value === 'string' ? Number(props.value) : props.value,
      )

      const priceFormatted = computed(() =>
        $filters.currency(valueNumber.value, props.locale, props.currency),
      )

      const displayPrice = computed({
        get: () => {
          if (isActive.value) return valueString.value
          if (props.value) return priceFormatted.value
        },
        set: (value) => {
          if (!value) {
            emitValues(null)
          } else {
            let newValue = parseFloat(
              value.replace(',', '.').replace(/[^\d\.]/g, ''),
            ) // eslint-disable-line no-useless-escape
            if (isNaN(newValue)) newValue = 0
            if (newValue < props.min) newValue = props.min
            if (newValue > props.max) newValue = props.max
            emitValues(newValue)
          }
        },
      })

      const emitValues = async (
        newValue: number | null,
        onlyFormatted?: boolean,
      ) => {
        if (!onlyFormatted) emit('input', newValue)
        await $nextTick()
        emit('formatted', priceFormatted.value)
      }

      emitValues(null, true)

      return {
        isActive,
        displayPrice,
      }
    },
  })
</script>
