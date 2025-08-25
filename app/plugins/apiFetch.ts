import {defineNuxtPlugin, useRuntimeConfig, useAsyncData} from "#app";

// NOTE: This function is the base/main functionality for fetching data with a provided endpoint URL.
// Keep in mind if you are going to use dynamic query params, include them in the endpoint key.
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('useFetch', (endpointUrl: string) => {
        return useAsyncData(() => {
            return $fetch(`${useRuntimeConfig().public.apiBaseUrl}${endpointUrl}`)
        });
    })
})