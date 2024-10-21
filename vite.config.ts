import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    base: env.NODE_ENV === "production" ? "/Resume-wkx/" : "",
  };
});
