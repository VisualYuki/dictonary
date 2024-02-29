<template>
  <header class="d-flex align-items-center justify-content-between p-3 px-5">
    <h3>English dictonary</h3>
    <div class="d-flex align-items-center justify-content-space-between">
      <addWord />

      <el-icon class="cursor-pointer" :size="20" @click="openAsideMenu = true">
        <Menu />
      </el-icon>
    </div>
  </header>
  <el-drawer v-model="openAsideMenu"> el drawer </el-drawer>

  <main>
    <slot name="default"></slot>
  </main>

  <footer></footer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import addWord from "@/layout-part/addWord.vue";

const openAsideMenu = ref(false);
</script>

<style lang="scss" scoped></style>
