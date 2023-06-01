<template>
    <div class="modal fade" :class="{ isOpen: 'show' }" id="exampleDynamicModal" tabindex="-1"
        aria-labelledby="exampleDynamicModalLabel" data-bs-backdrop="static" aria-hidden="true" ref="exampleDynamicModal">
        <div class="modal-dialog">
            <div class="modal-content" v-if="isOpen">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleDynamicModalLabel">Dynamic Modal title</h1>
                    <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <component :is="modalComp" />
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
import { onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import * as bootstrap from 'bootstrap';

const isOpen = ref(false);
const exampleDynamicModal = ref(null);
//const message = ref('');

const modalComp = shallowRef();

let $modal: bootstrap.Modal;

const open = (cmp: any) => {
    modalComp.value = cmp
    isOpen.value = true;
    $modal.show();
};
const close = () => $modal.hide();

const onModalHidden = (event: EventListenerOrEventListenerObject) => {
    isOpen.value = false;
    console.log('hidden');
};

onMounted(() => {
    $modal = bootstrap.Modal.getOrCreateInstance('#exampleDynamicModal');
    const myModalEl = document.getElementById('exampleDynamicModal');
    //@ts-ignore
    myModalEl.addEventListener('hidden.bs.modal', onModalHidden);
});

onBeforeUnmount(() => {
    const myModalEl = document.getElementById('exampleDynamicModal');
    //@ts-ignore
    myModalEl.removeEventListener('hidden.bs.modal', onModalHidden);
    $modal.dispose();
});

defineExpose({
    open
});
</script>