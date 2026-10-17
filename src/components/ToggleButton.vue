<script setup>
import { ref } from 'vue'

const isOn = ref(false)
</script>

<template>
  <button>
    {{ isOn ? 'An' : 'Aus' }}
  </button>
</template>