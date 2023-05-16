<template>
    <div class="card p-3 shadow">
        <div>
            <h1>Contact View</h1>
            <h2>{{ showExampleModal }}</h2>
        </div>
        <div>
            <button class="btn btn-primary" @click="showExampleModal = !showExampleModal">Show Modal</button>
            <button class="btn btn-primary ms-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight">Show Sidebar</button>
        </div>
        <div v-if="showExampleModal">
            <ExampleModalComponent v-model="showExampleModal" />
        </div>

        <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header bg-info">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Send Message</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                ...
            </div>
            <div class="offcanvas-footer border p-1">
                <div class="d-flex justify-content-between">
                    <div class="btn-group dropup">
                        <button type="button" class="btn btn-light btn-sm border dropdown-toggle d-block"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Templates
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <div class="d-grid gap-2">
                                    <button type="button" class="btn btn-light btn-sm border mx-2">
                                        Create New Template
                                    </button>
                                </div>
                            </li>
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div>
                        <button type="button" class="btn btn-secondary btn-sm">Go</button>
                    </div>
                </div>
                <div class="mt-2 row g-1">
                    <div class="col">
                        <textarea ref="textarea" v-model="input" class="form-control border-0 resize-none"
                            placeholder="Enter Message" rows="3" />
                        <div class="form-text ms-3">{{ input?.length || 0 }} characters</div>
                    </div>
                    <div class="col-auto">
                        <button type="button" class="btn btn-primary btn-sm">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTextareaAutosize } from '@vueuse/core'
import ExampleModalComponent from '../components/ExampleModalComponent.vue'

const showExampleModal = ref(false);

const { textarea, input } = useTextareaAutosize({})
</script>

<style>
.resize-none {
    resize: none;
}
</style>