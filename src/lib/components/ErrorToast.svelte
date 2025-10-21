<script lang="ts">
  import { fade, fly } from 'svelte/transition'

  interface Props {
    message: string
    onRetry?: () => void
    onClose: () => void
  }

  let { message, onRetry, onClose }: Props = $props()
</script>

<div
  class="fixed bottom-20 left-1/2 -translate-x-1/2 bg-red-600 text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3 z-[1000]"
  transition:fly={{ y: 100, duration: 300 }}
>
  <span class="flex-1">{message}</span>
  {#if onRetry}
    <button
      class="bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded text-sm transition-colors"
      onclick={onRetry}
    >
      재시도
    </button>
  {/if}
  <button
    class="bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-sm transition-colors"
    onclick={onClose}
  >
    ×
  </button>
</div>
