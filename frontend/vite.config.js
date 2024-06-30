import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    server: {
      port: env.VITE_FRONTEND_PORT,
      proxy: {
        "/api": env.VITE_SERVER_URI,
      },
    },
  };
});
