import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";


export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, ".");

    return ({
        base: env.VITE_BASE,
        plugins: [react(), tsconfigPaths(), htmlPlugin(env)],
    })
});

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
