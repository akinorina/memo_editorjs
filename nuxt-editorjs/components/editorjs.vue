<script lang="ts" setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const blocks = computed({
  get() {
    return props.modelValue
  },
  set(blocks) {
    emit('update:modelValue', blocks)
  }
})

onMounted(async () => {
  const editor = await useEditor().create({
    id: 'editorjs',
    data: blocks.value,
    onChange: async (api, block) => {
      blocks.value = await api.saver.save()
    }
  })
})
</script>

<template>
  <div>
    <div id="editorjs" />
  </div>
</template>

<style scoped></style>
