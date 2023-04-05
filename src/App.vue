<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const containerEl = ref(null)
const { width, height } = useElementSize(containerEl);

const styleObject = reactive({
    width: `${width}px`,
})
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img alt="Vue logo" src="@/assets/logo.svg" width="25" height="25" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/about" class="nav-link">About</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <main class="flex-shrink-0 bg-info">
        <div class="container-fluid">
            <div id="page-container" class="py-0 border border-dark-subtle mt-3 h-100" ref="containerEl">
                <div class="p-3">
                    Height: {{ height }}
                    Width: {{ width }}
                </div>
                <RouterView v-slot="{ Component, route }" :style="styleObject">
                    <transition :name="route.meta.transition || 'scale-slide'" mode="out-in">
                        <component :is="Component" :key="route.path" />
                    </transition>
                </RouterView>

            </div>
        </div>
    </main>

    <footer class="footer mt-auto py-3 bg-light">
        <div class="container">
            <span class="text-muted">Site Footer &copy; 2023</span>
        </div>
    </footer>
</template>

<style>
#page-container {
    min-height: 80vh;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}


@keyframes fadeOut {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 0;
    }
}

@keyframes moveUp {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-400px);
    }
}

@keyframes slideUp {
    0% {
        transform: translateY(400px);
    }

    100% {
        transform: translateY(0);
    }
}


@keyframes collapseUp {
    0% {
        height: 500px;
    }

    50% {
        height: 250px;
    }

    100% {
        height: 0;
    }
}

.moveUp-enter-active {
    animation: fadeIn 0.3s ease-in;
}

.moveUp-leave-active {
    animation: moveUp 0.3s ease-in;
}

.scale-slide-enter-active,
.scale-slide-leave-active {
    position: absolute;
    transition: all 0.35s ease;
}

.scale-slide-enter-from {
    left: -100%;
    /* right: -100%; */
    opacity: 1;
}

.scale-slide-enter-to {
    left: 0%;
    /* right: 0%; */
    opacity: 1;
}

.scale-slide-leave-from {
    transform: scale(1);
}

.scale-slide-leave-to {
    transform: scale(0.8);
    opacity: 0;
}
</style>