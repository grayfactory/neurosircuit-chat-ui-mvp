import type { ChatConfig } from './types'

export const config: ChatConfig = {
  apiUrl: "http://localhost:8008/chat",
  historyWindowSize: 10,
  maxTokens: 1024,
  temperature: 0.7,
  timeout: 30000,
  userId: "user_0009",
  userName: "송민호"
}
