import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
// import envCompatible from "vite-plugin-env-compatible";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    checker({
      typescript: true,
      eslint: { lintCommand: "eslint ./src --ext .ts,.tsx" },
    }),
    // envCompatible({ prefix: "REACT_APP" }),
  ],
});
