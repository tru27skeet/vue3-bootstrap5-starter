<template>
    <div class="card p-3 shadow">
        <div>
            <h1>About View</h1>
        </div>
        <div>
            <label>
                <input type="radio" v-model="activeComponent" :value="null"> None
            </label>
            <label class="ms-3">
                <input type="radio" v-model="activeComponent" :value="CompA"> A
            </label>
            <label class="ms-3">
                <input type="radio" v-model="activeComponent" :value="CompB"> B
            </label>
            <!-- <Transition name="fade" mode="out-in">
                <component :is="activeComponent"></component>
            </Transition> -->
        </div>
        <div>
            <button type="button" class="btn btn-primary" @click="showModal">
                Launch demo modal {{ isShowingModal }}
            </button>
        </div>
        <div v-if="isShowingModal">
            <ModalWrapper v-model="isShowingModal">
                <div v-if="isShowingModal">
                    <Transition name="fade" mode="out-in">
                        <component :is="activeComponent"></component>
                    </Transition>
                </div>
            </ModalWrapper>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import CompA from '../components/CompA.vue';
import CompB from '../components/CompB.vue';
import ModalWrapper from '../components/ModalWrapper.vue';

// use shallowRef to avoid component being deeply observed
const activeComponent = shallowRef(CompA);

const isShowingModal = ref(false);

const showModal = () => {
    isShowingModal.value = true;
    //const modal = Modal.getOrCreateInstance('#modal-wrapper');
    //modal.show();
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>