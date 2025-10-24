<template>
  <div class="pa-8">
    <h1 class="text-h3 mb-4 purple--text">Nuestros Proyectos</h1>
    <v-row>
      <v-col
        v-for="proyecto in proyectos"
        :key="proyecto.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="h-100">
          <v-card-title>{{ proyecto.nombre }}</v-card-title>
          <v-card-text>
            {{ proyecto.descripcion }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="purple" text>Ver más</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'default'
})

const proyectos = ref([
  {
    id: 1,
    nombre: 'Proyecto 1',
    descripcion: 'Descripción del primer proyecto'
  },
  {
    id: 2,
    nombre: 'Proyecto 2',
    descripcion: 'Descripción del segundo proyecto'
  },
  {
    id: 3,
    nombre: 'Proyecto 3',
    descripcion: 'Descripción del tercer proyecto'
  }
])
</script>