import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   define: {
//     __APP_ENV__: JSON.stringify(env.APP_ENV),
//   },
//   plugins: [react()],
// });

export default defineConfig(() => {
  return {
    define: {
      __APP_ENV__: process.env.VITE_RAPID_API_ARTICLE_KEY,
    },
    plugins: [react()],
  };
});
