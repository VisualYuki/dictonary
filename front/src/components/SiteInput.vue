<template>
  <el-input v-model="locModel" class="mb-4" size="large" />
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);

const locModel = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emits("update:modelValue", value);
  },
});
</script>

<style lang="scss" scoped></style>
