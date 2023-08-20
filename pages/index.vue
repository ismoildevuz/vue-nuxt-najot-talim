<template>
  <Intro />
  <Advantage />
  <Course />
  <JobOffer />
  <Feedback />
  <Contact />
</template>

<script setup>
import { useCourses } from "~/stores/courses";

const courses_store = useCourses();

onMounted(() => {
  courses_store.updateData();
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700;800;900&display=swap");
@import url("https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css");
</style>
