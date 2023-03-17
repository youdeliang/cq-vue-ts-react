<template>
  <div>{{ count }}</div>
</template>

<script lang="ts" setup>
import { useStore } from '@/store';
const store = useStore();
const count = store.state.count;
</script>
