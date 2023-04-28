import { Editor } from '~~/models'

const editor: Editor = {
  create: async ({ id, data, onChange }) => {
    const EditorJS = (await import('@editorjs/editorjs')).default
    const Paragraph = (await import('@editorjs/paragraph')).default

    return new Promise((resolve, reject) => {
      // ツールの設定
      const tools = {
        paragraph: {
          class: Paragraph,
          inlineToolbar: ['link', 'bold', 'italic'],
          config: {
            placeholder: '本文を入力'
          }
        }
      }

      // Editor.js のインスタンス生成
      const editor: any = new EditorJS({
        holder: id,
        tools,
        data,
        minHeight: 0,
        onReady: () => resolve({
          id,
          element: Element,
          instance: editor
        }),
        onChange
      })
    })
  }
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      editor
    }
  }
})
