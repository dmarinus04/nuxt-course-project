<template>
  <div class="container mx-auto md:w-1/2 w-4/5 py-8 divide-y space-y-8 divide-gray-300">
    <PostItem v-for="index in 10" :key="index"/>
  </div>
</template>