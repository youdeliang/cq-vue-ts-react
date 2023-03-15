<template>
  <div>1231</div>
  <div>{{ props.count }}</div>
  <div>{{ props.list }}</div>
  <div>{{ list2 }}</div>
</template>
<script lang="ts" setup>
import { PropType, onMounted, ref } from 'vue';
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
  count: number;
  list: List;
}

const props = defineProps<Props>();

// 赋默认值
withDefaults(props, {
  count: 1,
  list: () => ({
    name: 'xxx',
    age: 19,
  }),
});

// const emits = defineEmits(['getData']);
const emits = defineEmits({
  getData(payload: string) {
    return payload.length > 0;
  },
});

onMounted(() => {
  emits('getData', '123');
});

const list2 = ref();
</script>
