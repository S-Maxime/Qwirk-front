<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  methods: {
    minimizeWindow() {
      window.electronAPI.minimizeWindow()
    },
    maximizeWindow() {
      window.electronAPI.maximizeWindow()
    },
    closeWindow() {
      window.electronAPI.closeWindow()
    }
  }
})
</script>

<template>
  <section id="app">
    <section id="mainContent">
      <section class="title-bar">
        <button class="win-minimize" @click="minimizeWindow"></button>
        <button class="win-maximize" @click="maximizeWindow"></button>
        <button class="win-close" @click="closeWindow"></button>
      </section>
      <router-view></router-view>
    </section>
  </section>
</template>
