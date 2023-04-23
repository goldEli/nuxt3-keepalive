<script setup lang="ts">
    import MovieCard from '~~/components/MovieCard.vue';
    import { APIResponse } from '~~/types/APIResponse';

    const searchTerm = ref('');
    const debouncedSearchTerm = refDebounced(searchTerm, 700);

    
    const page = ref(1);
    const disabledPrevious = computed(() => {
        return page.value === 1;
    })
    const disabledNext = computed(() => {
        return page.value + 1 === data.value?.total_pages;
    })
    
    const url = computed(() => {
        return `api/movies/search?query=${debouncedSearchTerm.value}&page=${page.value}` // Petición en server Nuxt por la busqueda y página
    });

    const { data } = await useFetch<APIResponse>(url)
</script>

<template>
    <div class="flex flex-col py-10">
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>123123</div> 
      <div>lint</div>
      <NuxtLink to="/test">123</NuxtLink>
    </div>
</template>