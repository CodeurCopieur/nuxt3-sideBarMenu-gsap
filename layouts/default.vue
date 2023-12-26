<script setup>
  onMounted(()=> {
    contentAnimation({parent: '.container'});
  });
</script>
<template>
  <div class="container">
    <div class="website-container">
      <Header/>
      <slot />
      <SideBar />
    </div>
  </div>
</template>