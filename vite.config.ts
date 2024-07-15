import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    base: process.env.VITE_BASE,
    plugins: [react(), tsconfigPaths(), htmlPlugin(loadEnv(mode, "."))],
}));

function htmlPlugin(env: ReturnType<typeof loadEnv>) {
    return {
        name: "html-transform",
        transformIndexHtml: {
            order: "pre" as const,
            handler: (html: string): string =>
                html.replace(/%(.*?)%/g, (match, p1) => env[p1] ?? match),
        },
    };
}
