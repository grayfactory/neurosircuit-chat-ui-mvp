import type { Message, ApiRequest, ApiResponse, ApiMessage } from '../types'
import { config } from '../config'

export async function sendMessage(messages: Message[]): Promise<string> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), config.timeout)

  try {
    // 최근 메시지만 선택하여 API 형식으로 변환
    const recentMessages = messages.slice(-config.historyWindowSize)
    const apiMessages: ApiMessage[] = recentMessages.map(msg => ({
      role: msg.role,
      content: msg.content
    }))

    const requestBody: ApiRequest = {
      messages: apiMessages
    }

    const response = await fetch(config.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.detail || 'API 요청 실패')
    }

    const data: ApiResponse = await response.json()

    if (!data.answer) {
      throw new Error('올바르지 않은 응답 형식입니다')
    }

    return data.answer

  } catch (error) {
    clearTimeout(timeoutId)

    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('요청 시간이 초과되었습니다')
    }

    throw error
  }
}
