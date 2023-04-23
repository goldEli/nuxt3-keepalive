<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const goBack = () => {
  router.go(-1);
};
</script>
<template>
  <button @click="goBack">go back</button>
</template>
<style></style>
