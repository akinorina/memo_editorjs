<script lang="ts" setup>
import { text } from 'stream/consumers'
import { ref } from 'vue'

// 初期データ
const editorjsJson = '{"time":1682660617643,"blocks":[{"id":"D_9Tq7Gur9","type":"paragraph","data":{"text":"あいしてます。"}},{"id":"e1zoh2JQ_F","type":"paragraph","data":{"text":"ついてる。"}},{"id":"HrxCc_YZgS","type":"paragraph","data":{"text":"かんしゃしてます。"}}],"version":"2.26.5"}'

// ページ内データ
const editorjsData = ref(JSON.parse(editorjsJson))
// ボタン click event handler
function saveEditor() {
  console.log('--- saveEditor() ---')
  console.log('> ', editorjsData.value)
  console.log('> ', JSON.stringify(editorjsData.value))
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
    </div>
    <div style="border: 1px #e0e0e0 dotted;">
      <button type="button" @click="saveEditor">save</button><br>
      <div>
        <editorjs v-model="editorjsData" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
