<template>
	<div>
		<ul class="list-disc">
			<li v-for="wordItem in rawData">
				<span class="font-medium text-2xl text-blue-950">
					{{ wordItem.word }}
				</span>

				<ol class="list-decimal pl-6 text-base">
					<li v-for="translationItem in wordItem.translations">
						<span class="text-purple-800 font-medium">
							<span class="underline">{{
								translationItem["specificWord"]
							}}</span>
							<span class="font-bold uppercase">
								[{{ translationItem.shortDescription }}]
							</span>
							<!-- <span class="italic">
								({{ translationItem.speech_part }})</span
							> -->
						</span>
						<br />
						<span class="text-blue-950">{{
							translationItem.description
						}}</span>
						<br />
						<span class="text-blue-600">{{
							translationItem.translation
						}}</span>
						<ul class="list-disc list-inside">
							<li>
								{{ translationItem.examples }}
							</li>
						</ul>
					</li>
				</ol>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Axios from "axios";

const rawData = ref([]);

function getAllWords() {
	Axios.get("http://localhost:3013/all", {}).then(function (response) {
		debugger;
		rawData.value = formatData(response.data);
	});
}

getAllWords();

function formatData(data: {}[]) {
	return data.map((item) => {
		const result: any = {};

		result["word"] = item.word;

		result["translations"] = item["translations"];

		return result;
	});
}

// fetch("http://localhost:3012/all", {
// 	method: "GET",
// 	// headers: {
// 	// 	"Content-Type": "application/json",
// 	// },
// })
// 	.then((response) => response.json())
// 	.then((response) => {
// 		rawData.value = formatData(response);

// 		console.log(rawData.value);
// 	});
</script>

<style lang="scss">
#app {
	min-height: 100vh;
}

.cursor-pointer {
	cursor: pointer;
}
</style>
