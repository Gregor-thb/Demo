<script setup>
import { ref } from 'vue';
const checked = ref(false);
</script>
<template>
<div>
  const count = red(0)
  <button @click="count++">Geklickt: {{ count }}</button>
<Button size="small" :onClick = "() => {this.$refs.count.set(0)}">Reset</Button>
</div>
</template>