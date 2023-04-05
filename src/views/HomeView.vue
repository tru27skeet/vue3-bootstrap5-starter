<script setup lang="ts">
//import { Tooltip } from 'bootstrap';
import { onMounted } from 'vue';
import * as bootstrap from 'bootstrap';

onMounted(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});
</script>

<template>
    <div class="card p-3 shadow">
        <div>
            <h1>Home View</h1>
        </div>
        <div class="alert alert-primary" role="alert">
            A simple primary alert—check it out!
            <p>
                <span class="badge bg-primary" data-bs-toggle="tooltip" title="This is a tooltip!">Hover over me</span>
            </p>
        </div>
        <hr />
        <div class="border position-relative" style="min-height: 200px;">
            <div class="position-absolute">
                one

            </div>
            <div class="position-absolute">
                two
            </div>
        </div>
    </div>
</template>
