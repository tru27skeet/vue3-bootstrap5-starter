<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" @click="modalInstance.hide" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="modalInstance.hide">Close</button>
                    <button type="button" class="btn btn-primary" @click="saveChanges" :disabled="isSaving">Save
                        changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useModalInstance } from '@/composables/ModalInstance';

// tell the consumer of this component that it's done doing it's thing
const done = () => emit('update:modelValue', false);
const modalInstance = useModalInstance('#exampleModal', done);
defineProps<{ modelValue: boolean }>();
const emit = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>();


const isSaving = ref(false);
const saveChanges = () => {
    isSaving.value = true;
    setTimeout(() => {
        isSaving.value = false;
        modalInstance.hide();
    }, 2000);
};
</script>