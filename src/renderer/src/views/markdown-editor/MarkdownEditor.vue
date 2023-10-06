<template>
  <div ref="edContainerRef" class="w-screen min-h-screen"></div>
</template>
<script setup lang="ts">
import { ref, onMounted, shallowRef, nextTick } from 'vue';
import { basicSetup, EditorView } from "codemirror"
import { markdown } from '@codemirror/lang-markdown'
import { languages } from "@codemirror/language-data"
import { EditorState, Compartment } from "@codemirror/state"

const edContainerRef = ref()
const view = shallowRef()

const initEditorView = async () => {
  const extensions = [
    basicSetup,
    markdown({   //markdown语言解析扩展
      codeLanguages: languages  //这里指定markdown中代码块使用的解析扩展
    })
  ]
  view.value = new EditorView({
    doc: '# qwwq\n\rasas',
    extensions,
    parent: edContainerRef.value
  })
  await nextTick()
  console.log(view.value.state.doc);
}
onMounted(async () => {
  await nextTick()
  initEditorView()
})
</script>
