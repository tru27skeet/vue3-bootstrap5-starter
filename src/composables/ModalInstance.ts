import { onMounted, onBeforeUnmount } from 'vue';
import * as bootstrap from 'bootstrap';
import type { Modal } from 'bootstrap';

export function useModalInstance(modalSelector: string, onHidden: () => void) {

    const selector = modalSelector;
    let modal: Modal;

    function onModalHidden() {
        onHidden();
    }

    onMounted(() => {
        console.log('modal instance mounted');
        modal = bootstrap.Modal.getOrCreateInstance(selector);
        document.querySelector(selector)?.addEventListener('hidden.bs.modal', onModalHidden);
        modal?.show();
    });

    onBeforeUnmount(() => {
        console.log('modal instance BEFORE UNMOUNT');
        document.querySelector(selector)?.removeEventListener('hidden.bs.modal', onModalHidden);
        modal.dispose();
    });

    const showModal = () => {
        modal?.show();
    };

    const hideModal = () => {
        modal?.hide();
    };

    return {
        show: showModal,
        hide: hideModal
    };
}