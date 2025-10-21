<script lang="ts">
  import { marked } from 'marked'
  import type { Message } from '../types'

  interface Props {
    message: Message
  }

  let { message }: Props = $props()

  const time = $derived(
    new Date(message.timestamp).toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit'
    })
  )

  const isAssistant = $derived(message.role === 'assistant')
  const htmlContent = $derived(
    isAssistant ? marked.parse(message.content) : escapeHtml(message.content)
  )

  function escapeHtml(text: string): string {
    const div = document.createElement('div')
    div.textContent = text
    return div.innerHTML
  }
</script>

{#if isAssistant}
  <div class="message message-assistant flex gap-3 items-start">
    <div class="message-avatar w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
      <span class="material-icons text-2xl">favorite_border</span>
    </div>
    <div class="message-wrapper flex flex-col gap-1 max-w-[75%]">
      <span class="message-sender text-sm font-medium text-text-light dark:text-text-dark">어시스턴트</span>
      <div class="message-content p-4 rounded-large bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark shadow-sm rounded-tl-sm markdown-content">
        {@html htmlContent}
      </div>
      <span class="message-time text-xs text-text-light-secondary dark:text-text-dark-secondary mt-1">{time}</span>
    </div>
  </div>
{:else}
  <div class="message message-user flex justify-end">
    <div class="message-wrapper flex flex-col gap-1 max-w-[75%] items-end">
      <div class="message-content p-4 rounded-large bg-user-bubble-light dark:bg-user-bubble-dark text-white shadow-sm rounded-tr-sm">
        {@html htmlContent}
      </div>
      <span class="message-time text-xs text-text-light-secondary dark:text-text-dark-secondary mt-1">{time}</span>
    </div>
  </div>
{/if}

<style>
  :global(.markdown-content p) {
    margin: 0 0 8px 0;
  }
  
  :global(.markdown-content p:last-child) {
    margin-bottom: 0;
  }
  
  :global(.markdown-content code) {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
  }
  
  :global(.dark .markdown-content code) {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  :global(.markdown-content pre) {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 12px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 8px 0;
  }
  
  :global(.dark .markdown-content pre) {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  :global(.markdown-content pre code) {
    background: none;
    padding: 0;
  }
</style>
