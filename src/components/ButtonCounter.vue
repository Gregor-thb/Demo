<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button type="submit" @click="count++">
    Hinzufügen (<span aria-live="polite">{{ count }}</span>)
  </button>
</template>
