import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
    const define = {
        __BUILT_AT__: `"${JSON.stringify(new Date().getTime())}"`,
    };

    const env = loadEnv(mode, ".");

    Object.assign(env, define);

    return {
        assetsInclude: ["robots.txt"],
        define,
        base: env.VITE_BASE,
        build: {
            outDir: env.VITE_OUT_DIR,
        },
        plugins: [react(), tsconfigPaths(), htmlPlugin(env)],
    };
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
