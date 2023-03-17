<template>
  <div>1231</div>
  <div>{{ props.count }}</div>
  <div>{{ props.list }}</div>
  <div>{{ list2 }}</div>
</template>
<script lang="ts" setup>
// import { PropType, onMounted, ref } from 'vue';
import { onMounted, ref } from 'vue';
type List = {
  name: string;
  age: number;
};

// const props = defineProps({
//   list: {
//     type: Object as PropType<List>,
//     default: () => ({}),
//   },
// });

interface Props {
  count: number | string;
  list: List;
  arr: { name: string; age: number }[];
}

// const props = defineProps<Props>();

// 赋默认值
const props = withDefaults(defineProps<Props>(), {
  count: 1,
  list: () => ({
    name: 'xxx',
    age: 19,
  }),
  arr: () => [{ name: 'xxx', age: 19 }],
});

// const emits = defineEmits(['getData']);
// 1
// const emits = defineEmits({
//   getData(payload: string) {
//     return payload.length > 0;
//   },
// });

// 2
interface Emits {
  (e: 'getData', payload: string): void;
}
const emits = defineEmits<Emits>();

onMounted(() => {
  emits('getData', '123');
});

const list2 = ref();
</script>
