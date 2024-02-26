<template>
  <header class="d-flex align-items-center justify-content-between p-3 px-5">
    <h3>English dictonary</h3>
    <div class="d-flex align-items-center justify-content-space-between">
      <SiteButton class="me-3" @click="openAddWordDialog = true">
        Add word
      </SiteButton>

      <el-icon class="cursor-pointer" :size="20" @click="openAsideMenu = true">
        <Menu />
      </el-icon>
    </div>
  </header>
  <el-drawer v-model="openAsideMenu"> el drawer </el-drawer>

  <SiteDialog v-model="openAddWordDialog">
    <SiteInput v-model="newWord.word.value" />
    <SiteInput v-model="newWord.translation.value" />
    <SiteButton class="mx-auto">Add</SiteButton>
  </SiteDialog>

  <main>
    <slot name="default"></slot>
  </main>

  <footer></footer>
</template>

<script lang="ts" setup>
import SiteButton from "@/components/SiteButton.vue";
import SiteDialog from "@/components/SiteDialog.vue";
import SiteInput from "@/components/SiteInput.vue";
import { ref } from "vue";

const openAsideMenu = ref(false);
const openAddWordDialog = ref(false);
const newWord = {
  word: ref("name"),
  translation: ref("имя"),
};
</script>

<style lang="scss" scoped></style>
