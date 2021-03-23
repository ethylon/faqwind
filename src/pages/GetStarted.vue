<template>
  <div class="flex flex-col h-full text-neutral-900">
    <header class="sticky top-0 flex-none w-full bg-white shadow">
      <div class="container flex items-center justify-between py-3">
        <span class="text-4xl">
          <FAQwind />
        </span>
      </div>
    </header>
    <main class="container flex-grow py-3 mx-auto">
      <div class="flex flex-col mt-8">
        <article class="prose">
          <h1>Getting started with Tailwind CSS</h1>
          <p>
            Before starting coding straight away, it's important to understand
            what it does and how it works. Tailwind CSS, after being built, will
            result in a large CSS file containing all the CSS class you need to
            start building your website. Any missing utility you might be
            needing will have to be added in
            <code>tailwind.config.js</code> file; this is where you will be
            adding your own configuration and customisation.
          </p>
          <p>
            If you don't want to build Tailwind CSS or if you want to quickly
            jump into it to try, you can include the default stylesheet by
            referencing it in the HTML <code>head</code> of your project as
            described in the official documentation
            <ExternalLink
              link="https://tailwindcss.com/docs/installation#using-tailwind-via-cdn"
              msg="here"
            />
          </p>
          <Chapter id="installing-tailwind" msg="Installing Tailwind CSS" />
          <p>
            The official documentation provides guides on how to install
            Tailwind CSS for some of the most popular frameworks. If your
            framework isn't listed here or if you prefer installing it as an
            external tool, please follow
            <ExtenralLink
              link="https://tailwindcss.com/docs/installation#installing-tailwind-css-as-a-post-css-plugin"
              msg="this guide"
            />.
          </p>
            <ExternalLink
              link="https://tailwindcss.com/docs/guides/nextjs"
              msg="Next.js"
            /><br />
            <ExternalLink
              link="https://tailwindcss.com/docs/guides/vue-3-vite"
              msg="Vue 3 (vitejs)"
            /><br />
            <ExternalLink
              link="https://tailwindcss.com/docs/guides/laravel"
              msg="Laravel"
            />
        </article>
      </div>
    </main>
  </div>
</template>

<script setup>
import ExternalLink from "../components/ExternalLink.vue";
import Chapter from "../components/Chapter.vue";
</script>
