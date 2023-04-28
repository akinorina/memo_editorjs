<script lang="ts" setup>
const editorjsJson = '{"time":1682659885708,"blocks":[{"id":"D_9Tq7Gur9","type":"paragraph","data":{"text":"あいしてます。"}},{"id":"e1zoh2JQ_F","type":"paragraph","data":{"text":"ついてる。"}},{"id":"J5lAEJJ7qA","type":"paragraph","data":{"text":"うれしい。"}},{"id":"bHxSgkkdya","type":"paragraph","data":{"text":"たのしい。"}},{"id":"HrxCc_YZgS","type":"paragraph","data":{"text":"かんしゃしてます。"}},{"id":"JjZ5SUM0uy","type":"paragraph","data":{"text":"しあわせです。"}},{"id":"L8hRPcu84d","type":"paragraph","data":{"text":"ありがとう。"}},{"id":"6uxVGF6YBP","type":"paragraph","data":{"text":"ゆるします。"}}],"version":"2.26.5"}'

const blocks = ref(JSON.parse(editorjsJson))

onMounted(async () => {
  const editor = await useEditor().create({
    id: 'editorjs',
    data: blocks.value,
    onChange: async (api, block) => {
      blocks.value = await api.saver.save()
    }
  })
})

function saveEditor() {
  console.log('--- saveEditor() ---')
  console.log('> ', blocks.value)
  console.log('> ', JSON.stringify(blocks.value))
}

</script>

<template>
  <div>
    <div>
      <h1>editor.js on nuxt3</h1>
      <div>
        <a href="https://qiita.com/i_110/items/7bc11cbf8ce4e64eab0b">
          https://qiita.com/i_110/items/7bc11cbf8ce4e64eab0b
        </a>
      </div>
    </div>
    <div>
      <button type="button" class="btn btn-primary" @click="saveEditor">save</button>
    </div>
    <div style="border: 1px #e0e0e0 dotted;">
      <div id="editorjs" />
    </div>
  </div>
</template>

<style scoped></style>
