import type { Message } from '../types'

// Svelte 5 runes-based chat store
let messages = $state<Message[]>([])
let isLoading = $state(false)
let error = $state<string | null>(null)

export const chatStore = {
  get messages() {
    return messages
  },
  get isLoading() {
    return isLoading
  },
  get error() {
    return error
  },
  addMessage(message: Message) {
    messages = [...messages, message]
  },
  setMessages(newMessages: Message[]) {
    messages = newMessages
  },
  setLoading(loading: boolean) {
    isLoading = loading
  },
  setError(err: string | null) {
    error = err
  },
  reset() {
    messages = []
    isLoading = false
    error = null
  }
}
