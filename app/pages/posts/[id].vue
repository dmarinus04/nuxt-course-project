<template>
  <div class="container mx-auto md:w-1/2 w-4/5 py-8">
    <h3 class="text-3xl font-bold">
      <NuxtLink :to="`/posts/${route.params.id}`" >{{ post.title }}</NuxtLink>
    </h3>
    <div class="post-meta text-gray-700 flex items-center space-x-2">
      <div>{{ post.created_at }}</div>
      <div>&middot;</div>
      <div>{{ post.user.name }}</div>
    </div>
    <div class="post-content mt-3">
      {{ post.body }}
    </div>
  </div>
</template>
<script setup>
  const route = useRoute();

  const { data:post } = await useFetch(`http://localhost:8000/api/posts/${route.params.id}`)
</script>