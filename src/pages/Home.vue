<template>
  <DefaultLayout>
    <div
      class="w-3/4 pt-6 text-4xl font-semibold pb-11 leading-tighter sm:text-5xl md:text-6xl"
    >
      Your favorite place to get answers about
      <a href="https://tailwindcss.com" target="_blank">
        <img
          src="../assets/tailwindcss-logotype.svg"
          class="inline-block w-auto h-9 sm:h-10 md:h-11"
        />
      </a>
    </div>
    <div class="flex flex-col justify-between xl:flex-row xl:items-center">
      <article class="prose">
        <Chapter id="what-is-tailwind-css" msg="What is Tailwind CSS" />
        <p>
          <ExternalLink link="https://tailwindcss.com" msg="Tailwind CSS" />
          is a <strong>utility-first</strong> CSS framework that allows you to
          &ldquo;<i>quickly build any design, directly in your markup</i
          >.&rdquo; Utility-first means it doesn't provide components CSS
          classes like <HoverCode code=".btn" /> or
          <code class="whitespace-nowrap">.navbar</code>, but classes like
          <HoverCode code=".mt-2" /> or <HoverCode code=".px-3" />instead.
        </p>
        <p>
          Tailwind CSS was created by
          <ExternalLink link="https://adamwathan.me" msg="Adam Wathan" />
          and was launched in november 2017. Today, Tailwind CSS is constantly
          being tweeked, updated and improved by Adam and his team at
          <ExternalLink
            link="https://github.com/tailwindlabs"
            msg="Tailwind Labs"
          />, recently introducing a brand new Just-in-time compiler, always
          offering their users the best experience possible.
        </p>
      </article>
      <!-- 
            TODO: Find a better way to make that div the same max-width as the article above 
            max-width: 65ch is from the typography plugin, there's probably a way to make it responsive
          -->
      <div class="mt-3 ml-2 max-w-[65ch] xl:mt-0 xl:ml-2">
        <span class="text-sm text-neutral-400">Tailwind CSS launch tweet</span>
        <div
          class="flex flex-col p-3 bg-white border rounded-lg border-neutral-200"
        >
          <div class="flex items-start justify-between">
            <div class="flex items-center flex-grow space-x-2">
              <a href="https://twitter.com/tailwindcss" target="_blank">
                <img
                  src="https://pbs.twimg.com/profile_images/1278691829135876097/I4HKOLJw_400x400.png"
                  class="w-10 h-10"
                />
              </a>
              <div class="flex flex-col leading-none">
                <span class="font-semibold"
                  ><ExternalLink
                    link="https://twitter.com/tailwindcss"
                    msg="Tailwind CSS"
                    :show-icon="false"
                  />
                </span>
                <span class="text-sm text-neutral-400">@tailwindcss</span>
              </div>
            </div>
            <span class="flex-none">
              <img src="../assets/twitter-logo.svg" class="w-6 h-6" />
            </span>
          </div>
          <div class="mt-2 prose">
            🎉 The first public Tailwind CSS release is officially here!<br />Check
            out the docs and take it for a spin!<br />
            <ExternalLink
              link="https://t.co/RcCd4KNEig"
              msg="tailwindcss.com"
              :show-icon="false"
            />
          </div>
          <span class="text-sm text-neutral-400">
            <ExternalLink
              link="https://twitter.com/tailwindcss/status/925792223102304256"
              msg="November 1, 2017"
              :show-icon="false"
            />
          </span>
        </div>
      </div>
    </div>
    <article class="mt-8 prose">
      <Chapter id="what-is-this-place" msg="What is this place" />
      <p>
        <span class="text-lg"><FAQwind /></span> is a website built and
        maintained by members willing to help newcomers in this evergrowing
        community. You will find here some of the most asked questions on
        <ExternalLink
          link="https://discord.com/invite/7NF8GNe"
          msg="Tailwind CSS official Discord"
        />
        as well as tips on how to get your started with this framework.
      </p>
      <p>
        <strong>Disclaimer:</strong> This website isn't the official
        documentation nor does it claim to be. It should be used alongside the
        documentation as a cheatsheet for the community.<br />
        <ExternalLink
          link="https://tailwindcss.com/docs/"
          msg="Official documentation"
        />
      </p>
      <h3>I'm ready for the next part</h3>
      <p>
        <a class="flex items-center">Get started</a>
        <a class="flex items-center">Browse FAQ</a>
      </p>
    </article>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "../layouts/DefaultLayout.vue";

import FAQwind from "../components/FAQwind.vue";
import ExternalLink from "../components/ExternalLink.vue";
import Chapter from "../components/Chapter.vue";
import HoverCode from "../components/HoverCode.vue";
</script>
