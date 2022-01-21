<template>
  <table v-if="options" class="component-prop-doc">
    <thead>
      <th>
        Prop
      </th>
      <th>
        Type
      </th>
      <th>
        Required
      </th>
      <th>
        Default
      </th>
      <th>
        Possible Value
      </th>
    </thead>
    <tbody>
      <tr v-for="({ name, type, defaultValue, required, values }, i) in options" :key="i">
        <td>
          {{ name }}
        </td>
        <td>
          <code>
            {{ type }}
          </code>
        </td>
        <td>
          <code>
            {{ required }}
          </code>
        </td>
        <td>
          <code>
            {{ defaultValue }}
          </code>
        </td>
        <td>
          <div v-if="Array.isArray(values)" class="flex gap-05 flex-wrap">
            <code v-for="value in values" :key="value">
              {{ value }}
            </code>
          </div>
          <span v-else>
            -
          </span>
        </td>
      </tr>
    </tbody>
  </table>
  <span v-else>
    <br />
    No props available for this component
  </span>
</template>

<script lang="ts" setup>
import { computed, ref, onBeforeMount } from 'vue'

const props = defineProps({
  component: { type: String, required: true }
})

const options = ref()

const getValidatorValues = (validator) => {
  const firstPart = String(validator)?.split('[')[1]
  const secondePart = firstPart?.split(']')[0]

  const array = secondePart ? secondePart.replaceAll('"', '').split(',') : secondePart

  return array ?? '-'
}

const getOptions = async () => {
  const component = (await import(`maz-ui`))[props.component]

  if (component?.props) {
    options.value = Object.entries(component.props).map((prop) => ({
      name: prop[0],
      type: prop[1].type?.name ?? '-',
      defaultValue: prop[1].default ?? '-',
      required: prop[1].required ? 'true' : 'false',
      values: getValidatorValues(prop[1].validator),
    }))
  }
}

onBeforeMount(() => getOptions())
</script>
