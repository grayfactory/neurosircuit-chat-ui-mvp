# 채팅봇 UI - Svelte Edition

Modern chatbot UI built with Svelte 5, TypeScript, and Tailwind CSS.

## 🚀 기술 스택

- **Frontend Framework**: Svelte 5 (with runes)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Type Safety**: TypeScript
- **Markdown**: Marked.js

## 📦 프로젝트 구조

```
chat-ui-mvp/
├── src/
│   ├── lib/
│   │   ├── components/        # Svelte 컴포넌트
│   │   ├── stores/            # Svelte 5 runes 스토어
│   │   ├── api/               # API 클라이언트
│   │   ├── config.ts          # 앱 설정
│   │   └── types.ts           # TypeScript 타입 정의
│   ├── App.svelte             # 메인 앱 컴포넌트
│   ├── main.ts                # 엔트리포인트
│   └── app.css                # 글로벌 스타일
├── public/                    # 정적 파일
├── .github/workflows/         # GitHub Actions
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## 🛠️ 개발

```bash
# 의존성 설치
npm install

# 개발 서버 시작 (http://localhost:5173)
npm run dev

# 타입 체크
npm run check
```

## 📦 빌드 & 배포

### GitHub Pages (간편 - 무료)

**수동 배포:**
```bash
npm run deploy
```

**자동 배포 (추천):**

1. GitHub에 코드 push
2. Repository Settings → Pages
3. Source: "Deploy from a branch" 선택
4. Branch: "gh-pages" 선택
5. 완료! `https://username.github.io/repo-name` 접속

이후 main/master 브랜치에 push할 때마다 자동 배포됩니다.

## 🎨 컴포넌트

- **ChatMessage**: 사용자/어시스턴트 메시지 렌더링
- **TypingIndicator**: 로딩 상태 애니메이션
- **ErrorToast**: 에러 메시지 표시
- **ChatInput**: 메시지 입력 폼

## 🔧 설정

### API 엔드포인트 변경

**파일 위치**: `src/lib/config.ts`

API 서버 주소를 변경하려면 이 파일을 수정하세요:

```typescript
export const config: ChatConfig = {
  apiUrl: "http://localhost:8008/chat",  // ← 여기서 변경
  historyWindowSize: 10,
  maxTokens: 1024,
  temperature: 0.7,
  timeout: 300000,
  userId: "user_0009",
  userName: "송민호"
}
```

### API 요청 형식

API는 다음 형식으로 요청을 받습니다:

```json
{
  "messages": [
    {
      "role": "user",
      "content": "메시지 내용"
    },
    {
      "role": "assistant",
      "content": "응답 내용"
    }
  ]
}
```

**응답 형식:**
```json
{
  "answer": "AI 응답 메시지",
  "used_rag": false,
  "processing_time": 1.5916743278503418,
  "model_used": "gpt-4o-mini",
  "tokens_used": null,
  "rag_context": null
}
```
