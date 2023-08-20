// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt"],
  components: [
    {
      path: "~/components/",
    },
    {
      path: "~/components/Header",
    },
    {
      path: "~/components/Intro",
    },
    {
      path: "~/components/Advantage",
    },
    {
      path: "~/components/Course",
    },
    {
      path: "~/components/JobOffer",
    },
    {
      path: "~/components/Feedback",
    },
    {
      path: "~/components/Contact",
    },
    {
      path: "~/components/Footer",
    },
  ],
});
