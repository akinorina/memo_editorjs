import EditorJS, { OutputData, API, BlockAPI } from '@editorjs/editorjs'

export type EditorConfig = {
  id: string
  data?: OutputData
  onChange?: (api: API, block: BlockAPI) => void
}

export interface Editor {
  create: (config: EditorConfig) => Promise<EditorManager>
}
