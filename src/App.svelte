<script lang="ts">
  import { onMount } from 'svelte'
  import ChatMessage from './lib/components/ChatMessage.svelte'
  import TypingIndicator from './lib/components/TypingIndicator.svelte'
  import ErrorToast from './lib/components/ErrorToast.svelte'
  import ChatInput from './lib/components/ChatInput.svelte'
  import { chatStore } from './lib/stores/chat.svelte'
  import { sendMessage } from './lib/api/chatApi'
  import { config } from './lib/config'
  import type { Message } from './lib/types'

  let messageListEl: HTMLElement
  let showError = $state(false)

  $effect(() => {
    if (messageListEl) {
      messageListEl.scrollTop = messageListEl.scrollHeight
    }
  })

  async function handleSendMessage(content: string) {
    const userMessage: Message = {
      role: 'user',
      content,
      timestamp: Date.now()
    }

    chatStore.addMessage(userMessage)
    chatStore.setLoading(true)
    chatStore.setError(null)
    showError = false

    try {
      const response = await sendMessage(chatStore.messages)

      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: Date.now()
      }

      chatStore.addMessage(assistantMessage)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다'
      chatStore.setError(errorMessage)
      showError = true

      setTimeout(() => {
        showError = false
      }, 5000)
    } finally {
      chatStore.setLoading(false)
    }
  }

  function handleRetry() {
    const lastUserMessage = chatStore.messages
      .filter(m => m.role === 'user')
      .pop()
    
    if (lastUserMessage) {
      handleSendMessage(lastUserMessage.content)
    }
  }

  onMount(() => {
    const welcomeMessage: Message = {
      role: 'assistant',
      content: `안녕하세요, ${config.userName}님! 무엇을 도와드릴까요?`,
      timestamp: Date.now()
    }
    chatStore.addMessage(welcomeMessage)
  })
</script>

<div class="chat-container max-w-md mx-auto h-screen flex flex-col">
  <header class="flex items-center justify-between p-4 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark">
    <button class="text-text-light dark:text-text-dark text-2xl">
      <span class="material-icons">close</span>
    </button>
    <h1 class="text-lg font-bold text-text-light dark:text-text-dark">어시스턴트</h1>
    <div class="w-6"></div>
  </header>

  <main bind:this={messageListEl} class="flex-1 overflow-y-auto p-4 space-y-6">
    {#each chatStore.messages as message (message.timestamp)}
      <ChatMessage {message} />
    {/each}
    
    {#if chatStore.isLoading}
      <TypingIndicator />
    {/if}
  </main>

  <ChatInput disabled={chatStore.isLoading} onSend={handleSendMessage} />
</div>

{#if showError && chatStore.error}
  <ErrorToast
    message={chatStore.error}
    onRetry={handleRetry}
    onClose={() => showError = false}
  />
{/if}
