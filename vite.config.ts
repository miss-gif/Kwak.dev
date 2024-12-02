import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@mocks": path.resolve(__dirname, "/src/mocks"),
      "@components": path.resolve(__dirname, "/src/components"),
      "@sections": path.resolve(__dirname, "/src/components/sections"),
      "@layouts": path.resolve(__dirname, "/src/components/layouts"),
      "@utils": path.resolve(__dirname, "/src/utils"),
      "@assets": path.resolve(__dirname, "/src/assets"),
      "@styles": path.resolve(__dirname, "/src/styles"),
      "@images": path.resolve(__dirname, "/src/images"),
      "@data": path.resolve(__dirname, "/src/data"),
      "@hooks": path.resolve(__dirname, "/src/hooks"),
      "@context": path.resolve(__dirname, "/src/context"),
      "@pages": path.resolve(__dirname, "/src/pages"),
      "@templates": path.resolve(__dirname, "/src/templates"),
      "@config": path.resolve(__dirname, "/src/config"),
      "@constants": path.resolve(__dirname, "/src/constants"),
      "@services": path.resolve(__dirname, "/src/services"),
      "@api": path.resolve(__dirname, "/src/api"),
      "@types": path.resolve(__dirname, "/src/types"),
      "@public": path.resolve(__dirname, "/public"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://apis.data.go.kr",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
