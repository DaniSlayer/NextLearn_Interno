<template>
  <v-app>
    <!-- Header -->
    <v-app-bar
      color="purple"
      dark
      dense
      app
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold">NEXTLEARN</v-toolbar-title>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer
      v-model="drawer"
      app
      color="purple lighten-5"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">Menú</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in menuItems"
          :key="item.to"
          :to="item.to"
          router
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenido principal -->
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const menuItems = ref([
  { title: 'Inicio', to: '/', icon: 'mdi-home' },
  { title: 'Acerca', to: '/about', icon: 'mdi-information' },
  { title: 'Proyectos', to: '/proyectos', icon: 'mdi-briefcase' }
])
</script>
