<template>
    <div>
        Component B
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';

onMounted(() => {
    console.log('Component B Mounted');
});

onBeforeUnmount(() => {
    console.log('Component B before unmount');
});
</script>