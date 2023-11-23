import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: [
        'assets/js/jquery-3.3.1.min.js',
        'assets/js/theme-change.js',
        'assets/js/jquery-2.1.4.min.js',
        'assets/js/jquery.chocolat.js',
        'assets/js/jquery.magnific-popup.min.js',
        'assets/js/owl.carousel.js',
        'assets/js/bootstrap.min.js',
        'assets/images/1.jpg',
        'assets/images/2.jpg',
        'assets/images/3.jpg',
        'assets/images/a1.jpg',
        'assets/images/a2.jpg',
        'assets/images/a3.jpg',
        'assets/images/blog1.jpg',
        'assets/images/blog2.jpg',
        'assets/images/blog3.jpg',
        'assets/images/blog4.jpg',
        'assets/images/blog5.jpg',
        'assets/images/blog6.jpg',
        'assets/images/team1.jpg',
        'assets/images/team2.jpg',
        'assets/images/team3.jpg',
        'assets/images/team4.jpg',
      ],
    },
  },
})
