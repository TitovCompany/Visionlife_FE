import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // 커스텀 도메인사용시 base 빈값으로 설정
  base: '',

  // 전역 상수로 대체되는 값을 정의(환경 변수)
  define: {
    'process.env': process.env,
  },

  // @를 src 디렉토리로 매핑
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@layout': '/src/layout',
      '@service': '/src/service',
      '@hone': '/src/features/hone',
      '@business': '/src/features/business-overview',
      '@catalog': '/src/features/catalog',
      '@news': '/src/features/news',
      '@profile': '/src/features/profile',
    }
  },

  server: {
    port: 3000, // 개발 서버 포트 지정
    open: true, // 서버 실행 시 브라우저 자동 열기
  },

  css: {
    modules: {
      generateScopedName: '[hash:base64:6]',  // 클래스명 난독화
    }
  },

  build: {
    minify: 'terser',
    terserOptions: {
      mangle: true,           // 변수명 난독화
      compress: {
        drop_console: true,   // console.log 제거
        drop_debugger: true,  // debugger 제거
      }
    },
    // 소스맵 제거 (개발시 사용)
    sourcemap: false,

    // 캐싱, 최적화
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      }
    },

    // 브라우저 지원 대상
    target: 'es2015',
  },

  optimizeDeps: {
    exclude: ['moment', 'lodash'], // 번들에서 제외할 패키지
  },

  plugins: [
    react(),
    tailwindcss(),
  ],
});
