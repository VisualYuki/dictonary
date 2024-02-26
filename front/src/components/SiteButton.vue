<template>
  <el-button :size="props.size" :type="props.type" class="d-block">
    <slot name="default"></slot>
  </el-button>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

let props = defineProps({
  size: {
    default: "large",
    required: false,
    validation: (value: string) => {
      return ["small", "default", "large"].includes(value);
    },
  },
  type: {
    default: "primary",
    required: false,
    validation: (value: string) => {
      return ["primary", "success", "warning", "danger", "info"].includes(
        value
      );
    },
  },
});
</script>

<style lang="scss" scoped></style>
