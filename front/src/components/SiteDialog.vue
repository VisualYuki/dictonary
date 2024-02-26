<template>
  <el-dialog v-model="locModel" width="350" class="pt-5">
    <slot name="default"></slot>
  </el-dialog>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const locModel = computed({
  set(value: boolean) {
    emit("update:modelValue", value);
  },
  get() {
    return props.modelValue;
  },
});
</script>

<style lang="scss" scoped></style>
