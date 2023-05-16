<template>
    <div class="card p-3 shadow">
        <div class="d-flex justify-content-between">
            <div>
                <h1>Book List</h1>
            </div>
            <div>
                <form class="row row-cols-lg-auto g-3 align-items-center" @submit.prevent="runSearch">
                    <div class="col-12">
                        <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
                        <input type="text" class="form-control" v-model="searchQuery" id="inlineFormSelectPref" />
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <div v-if="bookStore.isLoading">
            <h2 class="placeholder-glow">
                Showing
                <span class="placeholder col-1"></span>
                of
                <span class="placeholder col-1"></span>
                results
            </h2>
            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-6 g-4">
                <div class="col" v-for="n in 20">
                    <div class="card h-100 placeholder-glow">
                        <img class="card-img-top img-fluid placeholder" style="height: 200px;" />
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-12"></span>
                                <span class="placeholder col-8"></span>
                            </h5>
                            <h6 class="card-subtitle mb-2 text-muted placeholder-glow">
                                <span class="placeholder col-8"></span>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <h2>Showing {{ bookStore.books.length }} of {{ bookStore.totalResultCount }} results</h2>
            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-6 g-4">
                <div class="col" v-for="book in bookStore.books">
                    <div class="card h-100">
                        <img v-if="book.isbn" :src="`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`"
                            class="card-img-top img-fluid" :class="{ 'placeholder': !book.isbn }" />
                        <img v-else alt="Vue logo" src="@/assets/logo.svg" class="img-fluid m-4" />
                        <div class="card-body">
                            <h5 class="card-title">{{ book.title }}</h5>
                            <h6 class="card-subtitle mb-2 text-muted" v-if="book.author_name">by {{ book.author_name[0] }}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useBookStore } from '@/stores/bookStore';

const bookStore = useBookStore();
const searchQuery = ref('the lord of the rings');

const runSearch = () => bookStore.searchBooks(searchQuery.value);

runSearch();
</script>