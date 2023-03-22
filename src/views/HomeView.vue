<script setup lang="ts">
import { Tooltip } from 'bootstrap';
import { onMounted } from 'vue';

onMounted(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
});
</script>

<template>
    <div>
        <h1>Home View</h1>
    </div>
    <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
        <p>
            <span class="badge bg-primary" data-bs-toggle="tooltip" title="This is a tooltip!">Hover over me</span>
        </p>
    </div>
</template>
