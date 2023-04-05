<template>
    <div class="card p-3 shadow">
        <div>
            <h1>Contact View</h1>
            <h2>{{ showExampleModal }}</h2>
        </div>
        <div>
            <button class="btn btn-primary" @click="showExampleModal = !showExampleModal">Show Modal</button>
        </div>
        <div v-if="showExampleModal">
            <ExampleModalComponent v-model="showExampleModal" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ExampleModalComponent from '../components/ExampleModalComponent.vue'

const showExampleModal = ref(false);
</script>