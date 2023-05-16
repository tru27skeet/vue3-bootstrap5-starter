import { defineStore } from 'pinia'
import { useProgress } from '@marcoschulte/vue3-progress';

interface Book {
    title: string;
    isbn: string[];
    author_name: string[];
}

export const useBookStore = defineStore('bookStore', {
    state: () => ({
        hasSearched: false,
        isLoading: false,
        __booksInternal__: [] as Book[],
        totalResultCount: 0
    }),
    getters: {
        books: (state) => state.__booksInternal__,
    },
    actions: {
        searchBooks(query: string) {
            const endpoint = `https://openlibrary.org/search.json?q=${query}`;
            const progress = useProgress().start();
            this.isLoading = true;
            return fetch(endpoint)
                .then((res) => res.json())
                .then((data) => {
                    this.__booksInternal__ = data.docs;
                    this.totalResultCount = data.numFound;
                    this.isLoading = false;
                    progress.finish();
                });
        }
    }
})
