<script setup>
import { ref } from 'vue'

const isOn = ref(false)
</script>

<template>
  <button>
    {{ isOn ? 'Aus' : 'An' }}
  </button>
</template>