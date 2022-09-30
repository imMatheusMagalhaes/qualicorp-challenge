<template>
  <v-app style="background: #f5f5f5 ;">
    <v-app-bar app color="primary" dark>
      <div class="title d-flex align-center">
        Markdown Blog
      </div>

      <v-spacer></v-spacer>

      <v-btn href="#" target="_blank" text>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() { return {} },
};
</script>
