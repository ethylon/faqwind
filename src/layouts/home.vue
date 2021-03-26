<template>
  <div class="flex h-screen overflow-hidden text-neutral-900">
    <div
      class="flex-col flex-none hidden w-56 h-full min-h-0 py-3 space-y-3 bg-white border-r shadow border-neutral-200 sm:flex"
    >
      <a href="/" class="flex-none mx-auto text-xs">
        <Logo />
      </a>
      <div class="flex-grow overflow-y-auto"></div>
      <div class="flex-none mx-auto">
        <a
          href="https://github.com/ethylon/FAQwind"
          class="flex items-center space-x-1"
          target="_blank"
          actions
        >
          <span class="text-sm font-semibold">GitHub</span>
          <mdi-github class="w-6 h-6" />
        </a>
      </div>
    </div>
    <main class="flex-grow overflow-y-auto">
      <div class="container flex flex-col py-6 mx-auto">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
