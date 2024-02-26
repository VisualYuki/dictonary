<template>
  <mainLayout></mainLayout>
</template>

<script lang="ts" setup>
import mainLayout from "./layout/mainLayout.vue";

//export default defineComponent({
//  name: "",
//  async mounted() {
//    axios.defaults.headers.post["Content-Type"] =
//      "application/x-www-form-urlencoded";
//    let user = { name: "имя" };

//    await fetch("http://localhost:3000/post", {
//      method: "POST",
//      body: JSON.stringify(user),
//    }).then(function (response) {
//      debugger;
//      console.log(response);
//    });
//  },
//});
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
