// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import path from "path"
// import tailwindcss from "@tailwindcss/vite"

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // 👈 ADD THIS LINE (Match your repo name exactly)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})