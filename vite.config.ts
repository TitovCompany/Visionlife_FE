import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '', // 커스텀 도메인사용시 base 빈값으로 설정
  plugins: [react(), tailwindcss()],
});
