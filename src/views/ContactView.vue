<script setup lang="ts">
import StepA from '@/components/StepA.vue';
import StepB from '@/components/StepB.vue';

import ExampleExposeModal from '@/components/ExampleExposeModal.vue';
import DynamicModal from '@/components/DynamicModal.vue';
import { ref, shallowRef, type Ref } from 'vue';

const activeStep = shallowRef();

// @ts-ignore
const eeModal: Ref<{ open: (msg: string) => void }> = ref(null);


// @ts-ignore
const dModal: Ref<{ open: (cmp: any) => void }> = ref(null);
</script>

<template>
    <div>
        <h1>Contact View</h1>
    </div>
    <div class="my-5">
        <button class="btn btn-success" @click="eeModal.open('This is modal 1')">Show Modal 1</button>
        <button class="btn btn-primary" @click="eeModal.open('This is modal 2')">Show Modal 2</button>
        <ExampleExposeModal ref="eeModal" />
    </div>
    <div class="my-5">
        <button class="btn btn-success" @click="dModal.open(StepA)">Show Dynamic Modal 1</button>
        <button class="btn btn-primary" @click="dModal.open(StepB)">Show Dynamic Modal 2</button>
        <DynamicModal ref="dModal" />
    </div>
    <div>
        <button class="btn btn-light" @click="activeStep = StepA">Step A</button>
        <button class="btn btn-light" @click="activeStep = StepB">Step B</button>
        <!-- <p>{{ activeStep }}</p> -->
        <component :is="activeStep" />
    </div>
</template>


