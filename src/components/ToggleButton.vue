<script setup>
import { ref } from 'vue';
const checked = ref(false);
</script>
<template>
    <div class="flex justify-center">
        <ToggleButton v-model="checked" onLabel="On" offLabel="Off" class="w-24" />
    </div>
</template>
