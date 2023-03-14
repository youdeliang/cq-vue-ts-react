<template>
  <div>{{ a }}</div>
</template>

<script lang="ts" setup>
import { onMounted, ref, Ref } from "vue";

type A = number | string;

const a = ref<A>(1);

onMounted(() => {
  a.value = "124";
});
</script>

<style></style>
