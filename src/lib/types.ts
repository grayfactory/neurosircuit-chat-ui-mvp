export interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: number
}

export interface ChatConfig {
  apiUrl: string
  historyWindowSize: number
  maxTokens: number
  temperature: number
  timeout: number
  userId: string
  userName: string
}

export interface ApiMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface ApiRequest {
  messages: ApiMessage[]
}

export interface ApiResponse {
  answer: string
  used_rag: boolean
  processing_time: number
  model_used: string
  tokens_used: number | null
  rag_context: string | null
}
