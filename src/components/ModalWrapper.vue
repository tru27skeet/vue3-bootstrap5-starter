<template>
    <div ref="modalRef" class="modal fade" id="modal-wrapper" tabindex="-1" aria-labelledby="modal-wrapper-label"
        aria-hidden="true" data-bs-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="modal-wrapper-label">Modal title</h1>
                    <button type="button" class="btn-close" aria-label="Close" @click="dismissModal"></button>
                </div>
                <div class="modal-body">
                    <slot>
                        This is an empty modal...
                    </slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="dismissModal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as bootstrap from 'bootstrap';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>();

const modalRef = ref<Element | null>(null);

const dismissModal = () => {
    const modal = bootstrap.Modal.getOrCreateInstance(modalRef.value as Element);
    modal.hide();
};

function onModalHidden() {
    // tell the consumer of this component that it's done doing it's thing
    emit('update:modelValue', false);
}

onMounted(() => {
    console.info('modal wrapper mounted');
    const modal = bootstrap.Modal.getOrCreateInstance(modalRef.value as Element);
    modalRef.value?.addEventListener('hidden.bs.modal', onModalHidden);
    if (props.modelValue) {
        modal.show();
    }
});

onBeforeUnmount(() => {
    // cleanup event listeners
    modalRef.value?.removeEventListener('hidden.bs.modal', onModalHidden);

    // dispose of the modal
    const modal = bootstrap.Modal.getOrCreateInstance(modalRef.value as Element);
    modal.dispose();
    console.info('modal wrapper UNmounted');
});
</script>