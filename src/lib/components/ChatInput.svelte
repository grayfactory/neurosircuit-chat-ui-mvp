<script lang="ts">
  interface Props {
    disabled?: boolean
    onSend: (message: string) => void
  }

  let { disabled = false, onSend }: Props = $props()
  let inputValue = $state('')

  function handleSubmit(e: Event) {
    e.preventDefault()
    if (inputValue.trim() && !disabled) {
      onSend(inputValue)
      inputValue = ''
    }
  }
</script>

<footer class="p-4 bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark">
  <form onsubmit={handleSubmit} class="flex items-center gap-3">
    <button
      type="button"
      class="text-text-light-secondary dark:text-text-dark-secondary text-2xl"
    >
      <span class="material-icons">add_circle_outline</span>
    </button>
    <input
      bind:value={inputValue}
      {disabled}
      class="flex-1 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-full py-2 px-4 focus:ring-primary focus:border-primary text-text-light dark:text-text-dark disabled:opacity-50"
      placeholder="메시지를 입력하세요"
      type="text"
      autocomplete="off"
    />
    <button
      type="submit"
      disabled={disabled || !inputValue.trim()}
      class="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50"
    >
      <span class="material-icons text-xl">arrow_upward</span>
    </button>
  </form>
</footer>
