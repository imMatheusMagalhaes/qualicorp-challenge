<template>
  <v-container class="d-flex flex-column justify-center align-center">
    <v-snackbar v-model="notify" v-bind:color="notificationSeverity" absolute right bottom>
      {{ notificationMessage }}
    </v-snackbar>
    <v-dialog v-model="deleteModal" persistent max-width="300px">
      <v-card>
        <v-container class="d-flex flex-column">
          <form @submit.prevent="createPost">
            <div class="title">Excluir esse post?</div>
            <div class="d-flex flex-row justify-space-between align-center">
              <v-btn @click="deletePost" color="error">SIM</v-btn>
              <v-btn @click="closeDeleteConfirmModal" color="info" elevation="2">NÂO</v-btn>
            </div>
          </form>
        </v-container>
      </v-card>
    </v-dialog>
    <router-link class="mb-4" style="text-decoration: none;" to="/post/create">
      <v-btn color="primary">Escrever um post</v-btn>
    </router-link>
    <div class="d-flex flex-wrap" style="width: 100%;">
      <v-card style="margin: 10px" v-for="post in posts" elevation="2" :key="post.elementId">
        <v-card-title>{{post.properties.title}}</v-card-title>
        <v-card-text><strong>Criado em: </strong>{{friendlyDate(post.properties.createdAt)}}</v-card-text>
        <v-card-text><strong>Atualizado em: </strong>{{friendlyDate(post.properties.updatedAt)}}</v-card-text>
        <v-card-text><strong>Autor: </strong> {{post.properties.author}}</v-card-text>
        <v-card-actions class="d-flex justify-space-between">
          <router-link style="text-decoration: none;" :to="{
          path: '/post/view', query: { mk: post.properties.mk } }">
            <v-btn style="margin: 5px;" color="primary">Abrir</v-btn>
          </router-link>
          <router-link style="text-decoration: none;" :to="{
          path: '/post/create', query: { post:{ ...post.properties, id: post.elementId} } }">
            <v-btn style="margin: 5px;" color="yellow">Editar</v-btn>
          </router-link>
          <v-btn style="margin: 5px;" @click="openDeleteConfirmModal(post.elementId)" color="error">Excluir</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import request from "../configs/axios";
export default {
  data() {
    return {
      notificationMessage: "",
      notificationSeverity: "info",
      notify: false,
      deleteModal: false,
      posts: [],
      postToDelete: "",
      postToUpdate: ""
    }
  },
  methods: {
    friendlyDate(date){
      const friendly = new Date(date)
      return friendly.toLocaleDateString("pt-BR")
    },
    notification(notificationMessage, notificationSeverity) {
      this.notificationMessage = notificationMessage
      this.notificationSeverity = notificationSeverity
      this.notify = true
    },
    openDeleteConfirmModal(id) {
      this.postToDelete = id
      return this.deleteModal = true
    },
    closeDeleteConfirmModal() {
      this.postToDelete = ""
      return this.deleteModal = false
    },
    async getAllposts() {
      try {
        const { data } = await request.get("/post/get-all")
        return this.posts = data
      } catch (error) {
        this.notification("Error aonlistar posts", "error")
        throw error
      }
    },
    async deletePost() {
      try {
        await request.delete(`/post/delete/${this.postToDelete}`)
        this.notification("Excluido com sucesso", "success")
        this.posts = this.posts.filter(post => post.elementId !== this.postToDelete)
        this.postToDelete = ""
        return this.deleteModal = false
      } catch (error) {
        this.notification("Error ao excluir", "error")
        throw error
      }
    },
  },
  mounted() {
    this.getAllposts()
  }

};
</script>
