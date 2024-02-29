import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/client.ts"],
  format: ["cjs", "esm"],
  banner: {
    js: "// @ts-nocheck\n",
  },
  dts: true,
  clean: true,
  minify: true,
})
