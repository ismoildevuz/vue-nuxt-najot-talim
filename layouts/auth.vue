<template>
  <div class="w-full h-screen flex">
    <div
      class="w-full h-full bg-[#F8F7EF] hidden lg:flex items-center justify-center"
    >
      <img src="/images/bg-auth.png" alt="" />
    </div>

    <div class="w-full h-full overflow-y-scroll">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
