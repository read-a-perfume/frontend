import tsconfigPaths from 'vite-tsconfig-paths'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
// import envCompatible from "vite-plugin-env-compatible";

export default defineConfig(({command, mode}) => {
  if (command === 'serve' && mode === 'development') {
    return {
      env: env,
      plugins: plugins,
      server: derServer,
    }
  } else {
    // command === 'build'
    return {
      env: env,
      plugins: plugins,
      server: {},
    }
  }
})

const env = {
  // `.env` 파일의 모든 환경변수를 읽어옵니다.
  // `.env` 파일의 환경변수를 선택적으로 읽어오려면 `keys` 옵션을 사용합니다.
  keys: ['VITE_API_KEY'],
}

const derServer = {
  open: '/',
  proxy: {
    // 경로가 "/api" 로 시작하는 요청을 대상으로 proxy 설정
    '/api': {
      // 요청 전달 대상 서버 주소 설정
      target:
        'http://ec2-15-164-250-165.ap-northeast-2.compute.amazonaws.com/api/v1/',
      // 요청 헤더 host 필드 값을 대상 서버의 호스트 이름으로  변경
      changeOrigin: true,
      // 요청 경로에서 '/api' 제거
      rewrite: path => path.replace(/^\/api/, ''),
      // SSL 인증서 검증 무시
      secure: true,
      // WebSocket 프로토콜 사용
      ws: true,
    },
  },
}

const plugins = [
  tsconfigPaths(),
  react({
    jsxImportSource: '@emotion/react',
    babel: {
      plugins: ['@emotion/babel-plugin'],
    },
  }),
  checker({
    typescript: true,
    eslint: {lintCommand: 'eslint ./src --ext .ts,.tsx'},
  }),
  // envCompatible({ prefix: "REACT_APP" }),
]
