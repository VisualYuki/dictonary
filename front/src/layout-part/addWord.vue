<template>
	<div>
		<SiteButton class="me-3" @click="openAddWordDialog = true">
			Add word
		</SiteButton>

		<SiteDialog v-model="openAddWordDialog">
			<SiteInput v-model="word" label="Word" :mb="true" />
			<el-divider border-style="dashed" />
			<div class="mb-3 pb-2">
				<template v-for="(item, idx) in wordData" :key="'addWord' + idx">
					<el-card class="mb-2">
						<SiteInput
							v-model="item.translation"
							type="textarea"
							label="Translation"
						/>
						<SiteInput
							v-model="item.example"
							type="textarea"
							label="Example"
							mb
						/>
						<SiteButton
							class="mx-auto"
							type="danger"
							@click="deleteWordData(idx)"
						>
							<el-icon>
								<Delete />
							</el-icon>
						</SiteButton>
					</el-card>
				</template>
				<SiteButton class="mx-auto" @click="addInputsGroup()">
					<el-icon color="white">
						<Plus />
					</el-icon>
				</SiteButton>
			</div>
			<el-divider border-style="dashed" />

			<SiteButton class="mx-auto" @click="send">Send</SiteButton>
		</SiteDialog>
	</div>
</template>

<script lang="ts" setup>
import SiteButton from "@/components/SiteButton.vue";
import SiteDialog from "@/components/SiteDialog.vue";
import SiteInput from "@/components/SiteInput.vue";
import { reactive, ref } from "vue";
import Axios from "axios";

const openAddWordDialog = ref(false);
const word = ref("");
let wordData = ref<{ translation: string; example: string }[]>([]);

function addInputsGroup() {
	wordData.value.push({
		translation: "",
		example: "",
	});
}
addInputsGroup();

function deleteWordData(idx: number) {
	wordData.value = wordData.value.slice(idx, 1);
}

function send() {
	//fetch("http://localhost:3000/delete").then((response) => {
	//	debugger;
	//});

	Axios.post("http://localhost:3000/add", {
		params: {
			word: word.value,
			wordData: wordData.value,
		},
	}).then(function (response) {
		debugger;
	});

	//Axios({
	//	method: "POST",
	//	url: "https://localhost:3000/add",
	//}).then((response) => {
	//	debugger;
	//});

	//fetch("https://localhost:3000/add", {
	//	method: "POST",
	//}).then((response) => {
	//	debugger;
	//});
}
</script>

<style lang="scss" scoped></style>
