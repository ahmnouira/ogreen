<script setup>
import { inject } from "vue";
import { useConnectionStore } from "../stores/connection";

const wsquinch = inject("wsquinch");
const connectionStore = useConnectionStore();

async function Login() {
  if (!connectionStore.connected) {
    wsquinch.connect(wsURL.value);
  }
}
</script>
<template>
  <form @submit.prevent="Login" class="grid grid-cols-12">
    <label for="wsURL" class="col-span-full text-xs mb-2">
      Remote Address
    </label>
    <input
      type="text"
      id="wsURL"
      class="col-span-9 py-2 px-3 text-sm focus:outline-none dark:bg-[#02051273]"
      placeholder="IP:Port"
    />
    <IButton
      v-if="!connectionStore.isConnected"
      class="col-span-3 ml-1 px-3 py-2.5"
      :text="'LOGIN'"
      :enableloading="true"
      :disabled="connectionStore.noConnect"
      :loading="connectionStore.isConnecting"
    >
      <template #icon>
        <svg
          class="w-3.5 h-3.5 mt-[2px] ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </template>
    </IButton>
    <IButton
      v-else
      class="col-span-3 ml-1 px-3 py-2.5"
      :text="'LOGOUT'"
      :enableicon="false"
      :enableloading="false"
    >
    </IButton>
  </form>
</template>