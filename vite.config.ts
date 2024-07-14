import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    base: "/web/",
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
