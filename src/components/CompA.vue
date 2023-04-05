<template>
    <div>
        <div>
            {{ title }}
        </div>
        <div>
            <input type="text" class="form-control" v-model="title" />
        </div>

    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';

const title = ref('Component A');

onMounted(() => {
    console.log('Component A Mounted');
});

onBeforeUnmount(() => {
    console.log('Component A before unmount');
});
</script>