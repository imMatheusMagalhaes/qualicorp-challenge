<template>
  <v-container class="d-flex flex-column">
    <v-snackbar v-model="notify" v-bind:color="notificationSeverity" absolute right bottom>
      {{ notificationMessage }}
    </v-snackbar>
    <v-dialog v-model="modal" persistent max-width="600px">
      <v-card>
        <v-container class="d-flex flex-column">
          <form @submit.prevent="createPost">
            <v-text-field v-model="title" solo label="Título" required></v-text-field>
            <v-text-field v-model="author" solo label="Seu nome" required></v-text-field>
            <div class="d-flex flex-row justify-space-between align-center">
              <v-btn color="error" @click="handleModal" elevation="2">FECHAR</v-btn>
              <v-btn type="submit" color="success" elevation="2">ENVIAR</v-btn>
            </div>
          </form>
        </v-container>
      </v-card>
    </v-dialog>
    <div class="d-flex flex-row justify-space-between align-center mb-4">
      <div class="title">
        Escreva seu artigo em
        <a target="_blank" href="https://www.markdownguide.org/">Markdown</a>
      </div>
      <v-btn color="primary" v-if="postToUpdate" @click="updatePost" elevation="2">SALVAR</v-btn>
      <v-btn color="primary" v-else @click="handleModal" elevation="2">SALVAR</v-btn>
    </div>
    <v-sheet color="white" elevation="4">
      <v-md-editor left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code"
        v-model="text" height="600px" />
    </v-sheet>
  </v-container>
</template>

<script>
import request from "../configs/axios";
export default {
  data() {
    return {
      postToUpdate: undefined,
      notificationMessage: "",
      notificationSeverity: "info",
      notify: false,
      modal: false,
      text: "",
      author: "",
      title: "",
    }
  },
  methods: {
    handleModal() {
      this.author = ""
      this.title = ""
      if (this.text !== "")
        return this.modal = !this.modal
      return this.notification("Escreva algo", "info")
    },
    notification(notificationMessage, notificationSeverity) {
      this.notificationMessage = notificationMessage
      this.notificationSeverity = notificationSeverity
      this.notify = true
    },
    async createPost() {
      try {
        await request.post("/post/create", {
          mk: this.text,
          author: this.author,
          title: this.title
        })
        this.handleModal()
        this.notification("Salvado com sucesso", "success")
        this.text = ""
        return this.$router.push({ path: "/" })
      } catch (error) {
        console.log(error);
        this.handleModal()
        this.notification("Ocorreu um problema, tente novamente", "error")
      }
    },
    async updatePost() {
      try {
        await request.put(`/post/update/${this.postToUpdate.id}`, {
          mk: this.text,
        })
        this.notification("Salvado com sucesso", "success")
        this.text = ""
        return this.$router.push({ path: "/" })
      } catch (error) {
        this.notification("Ocorreu um problema, tente novamente", "error")
      }
    },
  },
  mounted() {
    if (this.$route.query.post) {
      this.postToUpdate = this.$route.query.post
      this.text = this.$route.query.post.mk
    }
  }
};
</script>
