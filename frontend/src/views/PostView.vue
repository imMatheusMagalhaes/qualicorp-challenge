<template>
  <v-container>
    <v-md-preview :text="text"></v-md-preview>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    }
  },
  mounted() {
    this.text = this.$route.query.mk
  }
};
</script>
