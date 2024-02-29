<template>
	<div :class="{ 'mb-3': mb }">
		<label>{{ props.label }}</label>
		<el-input :type="type" v-model="locModel" size="large" />
	</div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";

//const props = defineProps(["modelValue", "label", "mb", ]);
const props = defineProps({
	modelValue: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		default: "",
	},
	mb: {
		type: Boolean,
		default: false,
	},
	type: {
		type: String,
		default: "text",
		validation: function (value: string) {
			return ["text", "textarea"].includes(value);
		},
	},
});
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
