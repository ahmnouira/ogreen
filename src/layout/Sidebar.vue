<template>
  <aside class="col-span-2 p-4 bg-slate-400 dark:bg-zinc-900">
    <div class="p-4">
      <h1 class="text-2xl font-semibold">OGREEN</h1>
    </div>
    <ul class="mt-6">
      <li class="mb-2">
        <router-link class="block p-3 text-sm uppercase" to="/">Terminal</router-link>
      </li>
      <li class="mb-2">
        <router-link class="block p-3 text-sm uppercase" to="/overview">Overview</router-link>
      </li>
      <li class="mb-2">
        <router-link class="block p-3 text-sm uppercase" to="/strategies">Strategies</router-link>
      </li>
      <li class="mb-2">
        <router-link to="/configuration" class="block p-3">Configuration</router-link>
      </li>
      <li class="mb-2">
        <a href="#" class="block p-3">Stats</a>
      </li>
    </ul>
  </aside>
</template>