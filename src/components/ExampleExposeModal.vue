<template>
    <div class="modal fade" :class="{ isOpen: 'show' }" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        data-bs-backdrop="static" aria-hidden="true" ref="exampleModal">
        <div class="modal-dialog">
            <div class="modal-content" v-if="isOpen">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h2>{{ message }}</h2>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="close">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import * as bootstrap from 'bootstrap';

const isOpen = ref(false);
const exampleModal = ref(null);
const message = ref('');

let $modal: bootstrap.Modal;

const open = (msg: string) => {
    message.value = msg;
    isOpen.value = true;
    $modal.show();
};
const close = () => $modal.hide();

const onModalHidden = (event: EventListenerOrEventListenerObject) => {
    isOpen.value = false;
    console.log('hidden');
};

onMounted(() => {
    $modal = bootstrap.Modal.getOrCreateInstance('#exampleModal');
    const myModalEl = document.getElementById('exampleModal');
    //@ts-ignore
    myModalEl.addEventListener('hidden.bs.modal', onModalHidden);
});

onBeforeUnmount(() => {
    const myModalEl = document.getElementById('exampleModal');
    //@ts-ignore
    myModalEl.removeEventListener('hidden.bs.modal', onModalHidden);
    $modal.dispose();
});

defineExpose({
    open
});
</script>