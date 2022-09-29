<template>
  <v-container class="d-flex flex-column">
    <v-container class="d-flex flex-row justify-space-between align-center">
      <div class="title">
        Escreva seu artigo em
        <a target="_blank" href="https://www.markdownguide.org/">Markdown</a>
      </div>
      <v-btn @click="log" elevation="2">SALVAR</v-btn>
    </v-container>
    <v-sheet color="white" elevation="4">
      <v-md-editor left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code"
        v-model="text" height="600px" />
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    }
  },
  methods: {
    log() { console.log(this.text) }
  },

};
</script>
