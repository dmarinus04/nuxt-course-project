<template>
  <div>
    <div class="post-container py-8">
      <h3 class="text-3xl font-bold">
        <NuxtLink :to="`/posts/1`" >Title of post</NuxtLink>
      </h3>
      <div class="post-meta text-gray-700 flex items-center space-x-2">
        <div>Aug 24, 2025</div>
        <div>&middot;</div>
        <div>Daniel Marinus</div>
      </div>
      <div class="post-preview leading-relaxed mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula maximus lacus in imperdiet. Proin dignissim
        massa in ipsum aliquet vehicula. Proin dapibus libero non sagittis mattis. Vivamus lorem libero, congue id semper
        et, pharetra quis ex. Sed sit amet libero in mi bibendum gravida eget vel nisi. Ut semper, lectus a consectetur
        imperdiet, turpis mauris mollis augue, a consectetur tortor ipsum ac tortor. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Donec feugiat in est a semper. Vivamus fermentum lacus eros,
        sed feugiat nisl accumsan consequat. Donec aliquet in leo dignissim dignissim.
      </div>
      <div class="mt-4">
        <NuxtLink :to="`/posts/1`" class="bg-blue-700 hover:bg-blue-700 text-white rounded inline-block px-4 py-2">Read More</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>