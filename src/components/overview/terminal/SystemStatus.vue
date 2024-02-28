<script setup>
import { useSystemStore } from "@/stores/system";
const systore = useSystemStore();
</script>
<template>
  <div class="flex space-x-12">
    <div
      class="grid grid-cols-[auto,1fr] gap-x-4 gap-y-0 mb-4 pb-5 font-mono text-sm antialiased border-b-slate-700 border-b-2">
      <div class="font-semibold">Mode</div>
      <div class="w-auto">{{ systore.getestate.mode }}</div>
      <div class="font-semibold">Engine cores</div>
      <div class="w-auto">{{ systore.getestate.ecores }}</div>
      <div class="font-semibold">Strategies</div>
      <div class="w-auto">{{ systore.getestate.nstrategies }}</div>
      <div class="font-semibold">Symbols</div>
      <div class="w-auto">{{ systore.getestate.nsymbols }}</div>
      <div class="font-semibold">Engine footprint</div>
      <div class="w-auto">{{ systore.getestate.ememory }}mb</div>
      <div class="font-semibold">Authenticated</div>
      <div class="w-auto">{{ systore.getestate.authenticated }}</div>
      <div class="font-semibold">WSE</div>
      <div class="w-auto">{{ systore.getestate.wseon }}</div>
      <div class="font-semibold">WSE</div>
      <div class="w-auto">{{ systore.getestate.ewstreamon }}</div>
    </div>
    <div
      class="grid grid-cols-[auto,1fr] gap-x-4 gap-y-0 mb-4 pb-5 font-mono text-sm antialiased border-b-slate-700 border-b-2">
      <div class="font-semibold">Stream-to-memory</div>
      <div class="w-auto">{{ systore.getestate.perf.stomem }} μs</div>
      <div class="font-semibold">Engine consume-cycle</div>
      <div class="w-auto">{{ systore.getestate.perf.ccycle }} μs</div>
      <div class="font-semibold">Engine C-to-ontick</div>
      <div class="w-auto">{{ systore.getestate.perf.ctontick }} μs</div>
      <div class="font-semibold">Engine C-to-onbar</div>
      <div class="w-auto">{{ systore.getestate.perf.ctonbar }} μs</div>
      <div class="font-semibold">Sys tick-to-strategy</div>
      <div class="w-auto">{{ systore.getestate.perf.ttostrat }} μs</div>
      <div class="font-semibold">Sys tick-to-bar</div>
      <div class="w-auto">{{ systore.getestate.perf.btostrat }} μs</div>
      <div class="font-semibold">Sys throughput</div>
      <div class="w-auto">{{ systore.getestate.perf.throughput }}%</div>
      <div class="font-semibold">Sys[engine] uptime</div>
      <div class="w-auto">{{ systore.getestate.perf.euptime }}</div>
    </div>
    <div
      class="grid grid-cols-[auto,1fr] gap-x-4 gap-y-0 mb-4 pb-5 font-mono text-sm antialiased border-b-slate-700 border-b-2">
      <div class="font-semibold">WSE</div>
      <div class="w-auto">{{ systore.getestate.perf.wsticks }} ticks</div>
      <div class="font-semibold">WSE</div>
      <div class="w-auto">{{ systore.getestate.perf.wstpp }} TPP/s</div>
      <div class="font-semibold">Engine</div>
      <div class="w-auto">{{ systore.getestate.perf.eticks }} ticks</div>
      <div class="font-semibold">Engine</div>
      <div class="w-auto">{{ systore.getestate.perf.eonticks }} onticks</div>
      <div class="font-semibold">Engine</div>
      <div class="w-auto">{{ systore.getestate.perf.eonbars }} onbars</div>
      <div class="font-semibold">Sys</div>
      <div class="w-auto">{{ systore.getestate.perf.stpp }} TPP/s</div>
    </div>
  </div>
</template>