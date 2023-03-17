<template>
  <div class="about">
    <h1>This is an about page</h1>
    <OtherComponnet :count="count" :list="list" :arr="arr" @getData="getData" />
    <VuexView />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import OtherComponnet from './9-7-api-组件通信TS.vue';
import VuexView from './VuexView.vue';
const count = ref(1);
const list = ref({
  name: 'xiaoming',
  age: 123,
});
const arr = ref([]);
const getData = (payload: string) => {
  console.log('payload :>> ', payload);
};
</script>
