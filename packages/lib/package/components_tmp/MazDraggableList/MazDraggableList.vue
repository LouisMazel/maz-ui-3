<template>
  <div
    class="maz-base-component maz-draggable-list maz-mb-3"
    :class="{
      'maz-is-dark': dark,
    }"
  >
    <Draggable
      v-model="items"
      v-bind="dragOptions"
      group="modules"
      @start="drag = true"
      @end="drag = false"
    >
      <TransitionGroup
        type="transition"
        tag="div"
        :name="!drag ? 'maz-flip-list' : null"
      >
        <div
          v-for="(item, i) in value"
          :key="`${itemKey ? item[itemKey] : Object.values(item)[0]}`"
          class="maz-draggable-list__item maz-align-center maz-space-between maz-flex"
        >
          <!-- Default item displayed in list -->
          <slot :item="item" :index="i" tag="div">
            <!-- `<span>{{ item }}</span>` -->
            <span>
              {{ item }}
            </span>
          </slot>
        </div>
      </TransitionGroup>
    </Draggable>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue'
  import Draggable from 'vuedraggable'

  /**
   * > Smart Draggable List
   */

  export default defineComponent({
    name: 'MazDraggableList',
    components: { Draggable },
    props: {
      // Must be an `Array` (use `v-model`)
      modelValue: { type: Array, required: true },
      // is the item's key to build le list (must be different for each item)
      itemKey: { type: String, default: null },
      // set dark theme
      dark: { type: Boolean, default: false },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const items = computed({
        get() {
          return props.modelValue
        },
        set(value) {
          // update the v-model
          // @arg list updated
          emit('update:modelValue', value)
        },
      })

      const drag = ref(false)
      const dragOptions = ref({
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      })

      return {
        items,
        drag,
        dragOptions,
      }
    },
  })
</script>
