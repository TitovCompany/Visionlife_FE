import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

// test page 폴더를 제외
const excludeTestPage = () => {
  const testPagePath = path.resolve(__dirname, 'src/test');
  return fs.existsSync(testPagePath) ? {test_page: testPagePath} : {};
};

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  // 배포 여부 확인
  const isProduction = mode === 'production';

  return {
    // 커스텀 도메인사용시 base 빈값으로 설정
    base: '/',

    // 전역 상수로 대체되는 값을 정의
    define: {},

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
      },
    },

    server: {
      // port: 3000,  // 개발 서버 포트 지정
      // open: true,  // 서버 실행 시 브라우저 자동 열기

      headers: {
        // XSS 및 Clickjacking 방지
        content_security_policy:
          "default-src 'self' style-src 'self' 'unsafe-inline';",
        'X-Frame-Options': 'DENY', // Clickjacking 방지
        'X-Content-Type-Options': 'nosniff', // MIME 타입 스니핑 방지
        'Referrer-Policy': 'strict-origin-when-cross-origin', // Referrer 정보 최소화
      },
    },

    css: {
      modules: {
        generateScopedName: '[hash:base64:6]', // 클래스명 난독화
      },
    },

    build: {
      minify: 'esbuild',
      terserOptions: {
        mangle: true, // 변수명 난독화
        compress: {
          drop_console: true, // console.log 제거
          drop_debugger: true, // debugger 제거
        },
      },

      // 소스맵 제거 (개발시 사용)
      sourcemap: false,

      // 캐싱, 최적화
      assetsDir: 'assets',
      rollupOptions: {
        // 번들에 포함되지 않도록 설정
        external: ['config.json'],
        output: {
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
        },
      },

      input: {
        // 메인 엔트리 파일
        main: path.resolve(__dirname, 'index.html'),

        // test page 폴더를 배포에서 제외
        ...(isProduction && excludeTestPage() ? {} : {test: excludeTestPage()}),
      },

      // 브라우저 지원 대상
      target: 'es2015',
    },

    optimizeDeps: {
      exclude: ['moment', 'lodash'], // 번들에서 제외할 패키지
      include: ['react', 'react-dom', 'japark-test'], // 최적화 포함 대상 지정
    },

    plugins: [react(), tailwindcss()],
  };
});