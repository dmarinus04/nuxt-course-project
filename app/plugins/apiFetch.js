import {defineNuxtPlugin,useRuntimeConfig} from "#app";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('useFetch', endpoint => useFetch(endpoint));
})

async function useFetch(endpoint) {
    const config = useRuntimeConfig()
    return await $fetch(`${config.public.apiBaseUrl}${endpoint}`);
}